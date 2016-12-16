import Player from '../Player'
/**
 * Two ways to use this function:
 *
 *   1. On your component, bind it with 'this' and then execute it, like:
 *
 *         stateHelper = mediaHelper(this);
 *         stateHelper.pause() // pauses the video
 *
 *   2. Use it in reducers or other actions to generate the necessary state back, so
 *      if you were using react-redux and used the @connect function to connect your components
 *      and pass in props from your store, you could do this:
 *
*         stateHelper = mediaHelper(
 *          () => this.props.mediaState,
 *          (state) => this.props.dispatch({type: 'MEDIA_PLAYER_UPDATE', payload: state})
 *        );
 *
 *      And then you could have other connected components that
 */

export default function mediaHelper(getStateOrComponent, setState) {
  let getState;
  if (typeof getStateOrComponent === 'function') {
    getState = getStateOrComponent;
    if (typeof setState !== 'function') {
      throw Error("If you are passing in a getState function, please also pass in setState.")
    }
  } else if (getStateOrComponent.isReactComponent) {
    const reactComponent = getStateOrComponent;
    setState = reactComponent.setState.bind(reactComponent);
    getState = () => reactComponent.state;
  } else {
    throw Error("Invalid getState and setState values, see documentation.")
  }

  return {
    togglePlay: () => {
      return setState({setPlayback: getState().statPlayback !== 'playing' ? 'playing' : 'paused'});
    },
    toggleMute: () => setState({setMute: !getState().statMute}),
    get isPlaying() {
      return getState().statPlayback === 'playing'
    },
    play: () => setState({setPlayback: 'playing'}),
    pause: () => setState({setPlayback: 'paused'}),
    seekTo: (val) => setState({setSeekTo: val}),
    skip: (val) => setState({setSkipTime: val}),
    addVolume: (val) => setState({setAddVolume: val}),
    setVolume: (val) => setState({setVolume: val}),
    fullscreen: () => setState({setFullscreen: true}),
    get state() {
      return getState();
    },
    toPlayerProps: () => {
      return {
        ...Player.extractPropsFromMediaState(getState()),
        mediaStateGetter: getState,
        mediaStateSetter: setState,
      };
    }
  }
}