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
    setState = setState || ((updates) => { // getState only mode
        throw Error("setState was not passed in so cannot perform updates.")
      });
  } else if (typeof setState === 'function') { // setState only mode
    getState = () => {
      throw Error("getState was not passed in so cannot read the media state.")
    };
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
    setState,
    togglePlay: () => {
      const currentPlayback = getState().statPlayback !== 'playing' ? 'playing' : 'paused';
       setState({setPlayback: currentPlayback});
      return currentPlayback;
    },
    toggleMute: () => setState({setMute: !getState().statMute}),
    play: () => setState({setPlayback: 'playing'}),
    pause: () => setState({setPlayback: 'paused'}),
    pauseAt: (time) => setState({setPauseAt: time}),
    // We also set the statCurrentTime here, because until
    // the video starts playing the statCurrentTime will not be updated.
    seekTo: (time, playAfterSeek) => {
      let updates = {setSeekTo: time, statCurrentTime: time};
      // When the video hasn't started playing yet, sometimes it will startplaying after seeking *before* the video
      // is played (this happens with Youtube, for example).
      if (playAfterSeek === undefined && !getState().statCurrentTime) {
        playAfterSeek = false;
      }
      if (playAfterSeek !== undefined) {
        Object.assign(updates, {setPlayback: playAfterSeek ? 'playing' : 'paused'})
      }
      setState(updates)
    },
    skip: (val) => setState({setSkipTime: val}),
    addVolume: (val) => setState({setAddVolume: val}),
    setVolume: (val) => setState({setVolume: val}),
    fullscreen: () => setState({setFullscreen: true}),

    // Direct getters for the stat properties.
    get currentTime() { return getState().statCurrentTime; },
    get progress() { return getState().statProgress; },
    get duration() { return getState().statDuration; },
    get playback() { return getState().statPlayback; },
    get volume() { return getState().statVolume; },
    // is* follows convention for isPlaying
    get isPlaying() { return getState().statPlayback === 'playing' },
    get isMuted() { return getState().statMute; },
    get isFullscreen() { return getState().statFullscreen; },

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