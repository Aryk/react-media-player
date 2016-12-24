import Player from '../Player'
import keyboardControls from './keyboard-controls'
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
    get state() {
      return getState();
    },
    setState: setState,
    togglePlay: () => {
      const currentPlayback = getState().statPlayback !== 'playing' ? 'playing' : 'paused';
       setState({setPlayback: currentPlayback});
      return currentPlayback;
    },
    toggleMute: () => setState({setMute: !getState().statMute}),
    get isPlaying() {
      return getState().statPlayback === 'playing'
    },
    play: () => setState({setPlayback: 'playing'}),
    pause: () => setState({setPlayback: 'paused'}),
    pauseOnceAt: (time) => setState({setPauseOnceAt: time}),
    seekTo: (time) => setState({setSeekTo: time}),
    skip: (val) => setState({setSkipTime: val}),
    addVolume: (val) => setState({setAddVolume: val}),
    setVolume: (val) => setState({setVolume: val}),
    fullscreen: () => setState({setFullscreen: true}),
    get keyboardControls() {
      return keyboardControls.bind(this);
    },
    /**
     * Creates the player probs and essentially connects your Player component to your store.
     * @returns {{...playerProps, mediaStateGetter: *, mediaStateSetter: *}}
     */
    toPlayerProps: () => {
      return {
        ...Player.extractPropsFromMediaState(getState()),
        mediaStateGetter: getState,
        mediaStateSetter: setState,
      };
    },
    /**
     * Batch calls that call `setState`. If you want to reduce trips to your store, you may want to consider using this.
     *
     * @param func - Pass in a function that accepts a mediaHelper as an argument and perform operations on that.
     */
    batch: (func) => {
      const localUpdates = {};
      const localSetState = (updates) => Object.assign(localUpdates, updates);
      func(mediaHelper(getState, localSetState));
      setState(localUpdates);
    },
  }
}