/**
 * Two ways to use this function:
 *
 *   1. On your component, bind it with 'this' and then execute it, like:
 *
 *         stateHelper = mediaStateHelper.bind(this)();
 *         stateHelper.pause() // pauses the video
 *
 *   2. Use it in reducers or other actions to generate the necessary state back, so
 *
 *         const functions = mediaStateHelper();
 *         functions.seekTo(3) // => {setSeekTo: 3}
 */
export default function(state = null) {
  let runWithState, getState;
  if (typeof this.setState === 'function') {
    runWithState = this.setState.bind(this);
    getState = () => this.state;
  } else if (state) {
    runWithState = (state) => state; // just return the state
    getState = () => state;
  } else {
    throw Error("Not bound to a React component and no state was passed in.")
  }

  return {
    togglePlay: () => {
      runWithState({setPlayback: getState().statPlayback !== 'playing' ? 'playing' : 'paused'});
    },
    toggleMute: () => runWithState({setMute: !getState().statMute}),
    get isPlaying() {
      return getState().statPlayback === 'playing'
    },
    play: () => runWithState({setPlayback: 'playing'}),
    pause: () => runWithState({setPlayback: 'paused'}),
    seekTo: (val) => runWithState({setSeekTo: val}),
    skip: (val) => runWithState({setSkipTime: val}),
    addVolume: (val) => runWithState({setAddVolume: val}),
    setVolume: (val) => runWithState({setVolume: val}),
    fullscreen: () => runWithState({setFullscreen: true}),
  }
}