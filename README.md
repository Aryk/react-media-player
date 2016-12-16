## React Media Player

Components and decorators to help build video & audio players in React. Supports HTML5, Youtube, and Vimeo media types.

Integrates seamlessly with your application by exposing hooks for updating state. If you use Redux, you can do all state updates to a central store.



## Install

`npm install react-media-player --save`

```html
<script src="https://unpkg.com/react-media-player/dist/react-media-player.js"></script>
(UMD library exposed as `ReactMediaPlayer`)
```

<br/>

## `Player` component

This is the main component that hosts most of the logic. Props are passed into this, as well as, callbacks to update the state. The state can be updated by passing through a proc calling `this.setState` or by having it dispatch a redux action in your app.

### Basic Props

#### `src`: PropTypes.string.isRequired

This is the source of the media you want to play. Currently supporting Youtube, Vimeo, and any HTML5 compatible video or audio.

#### `vendor`: PropTypes.oneOf(['youtube', 'vimeo', 'audio', 'video'])

Explicitly choose which internal component to render for the player. If nothing is set, the library does its best to determine what player to render based on the source passed in.

#### `autoPlay`: PropTypes.bool

Autoplay media when the component is mounted or `src` changes.

#### `loop`: PropTypes.bool

Loop the current `src` indefinitely.

#### `startTime`: PropTypes.number

Start the current media at a given time.

#### `endTime`: PropTypes.number

Have the media end at a given time.

### Callbacks

#### `onReady`: PropTypes.func

Callback when the media is ready to start playing.

#### `onDuration`: PropTypes.func

Callback when the duration of the media has been calculated.
 
#### `onTimeUpdate`: PropTypes.func

Callback when media time has changed.

#### `onProgress`: PropTypes.func

Callback when media starts downloading.
    
#### `onLoad`: PropTypes.func

Callback when component first renders onto the screen.
      
#### `onPlay`: PropTypes.func

Callback when media starts playing.

#### `onPause`: PropTypes.func

Callback when media has been paused.

#### `onEnd`: PropTypes.func

Callback when media has "ended". This is either at the end of the video or at the `endTime` specified.
  
#### `onError`: PropTypes.func

Callback when an error occurs.

#### `onMute`: PropTypes.func

Callback when the player has been muted.

#### `onVolumeChange`: PropTypes.func

Callback when the player volume has changed.

## Basic Example

In this example, we use the `Media` class to set up our own basic media player. The `Media` class is not required and can be swapped out with your own container in case you want to more state variables and more complex functionality.

```js
import React, { Component } from 'react'
import { Media, Player, controls } from '../src/react-media-player'
const { CurrentTime, Progress, SeekBar, PlayPause } = controls;

export default class VideoPlayer extends Component {

  render() {

    return (
      <Media>
        {(media) => {
          return (
            <div>
              <Player
                src={this.props.src}
                onClick={media.stateHelper.togglePlay}
                
                {...Player.extractPropsFromMediaState(media.state)}
                mediaStateGetter={media.stateGetter}
                mediaStateSetter={media.stateSetter}
              />
              <div>
                <PlayPause
                  togglePlay={media.stateHelper.togglePlay}
                  isPlaying={media.stateHelper.isPlaying}
                />
                <CurrentTime
                  currentTime={media.state.statCurrentTime}
                />
                <div>
                  <Progress
                    progress={media.state.statProgress}
                  />
                  <SeekBar
                    progress={media.state.statProgress}
                    duration={media.state.statDuration}
                    currentTime={media.state.statCurrentTime}
                    isPlaying={media.stateHelper.isPlaying}
                    pause={media.stateHelper.pause}
                    play={media.stateHelper.play}
                    seekTo={media.stateHelper.seekTo}
                  />
                </div>
              </div>
            </div>
          )
        }}
      </Media>
    )
  }
}

```

In order to use your own class, simply add a little boiler plate to set up the default state and define the getters and setters for the state:

```js

import React, { Component } from 'react'
import { Player, controls, utils } from '../src/react-media-player'

const { mediaStateHelper } = utils;
const { CurrentTime, PlayPause, MuteUnmute, Duration, Volume } = controls;

class VideoPlayer extends Component {

  constructor(props) {
    super(props);
    this.state = Object.assign({}, Player.defaultMediaState);
  }

  _stateGetter = () => this.state;
  _stateSetter = (mediaState) => this.setState(mediaState);
  _stateHelper = mediaStateHelper.bind(this)();

  render() {
    const isFullscreen = this.state.statFullscreen;

    return (
      <div>
        <Player
          src={this.props.src}
          onClick={this._stateHelper.togglePlay}

          // Pass through the props from the state!
          {...Player.extractPropsFromMediaState(this.state)}

          // Provide your own getter and setter for the state.
          mediaStateGetter={this._stateGetter}
          mediaStateSetter={this._stateSetter}
        />
        <div>
          <PlayPause
            togglePlay={this._stateHelper.togglePlay}
            isPlaying={this._stateHelper.isPlaying}
          />
          <CurrentTime
            currentTime={this.state.statCurrentTime}
          />
          <Duration
            duration={this.state.statDuration}
          />
          <MuteUnmute
            volume={this.state.statVolume}
            isMuted={this.state.statMute}
            toggleMute={this._stateHelper.toggleMute}
          />
          <Volume
            volume={this.state.statVolume}
            setVolume={this._stateHelper.setVolume}
          />
        </div>
      </div>
    )
  }
}

```

<br/>

## To read the media's state look for the `stat*` keys:

#### `statCurrentTime`: PropTypes.number
#### `statProgress`: PropTypes.number
#### `statDuration`: PropTypes.number
#### `statPlayback`: PropTypes.string

Can be on of ['unstarted', 'loading', 'playing', 'paused', 'ended', 'errored']

#### `statVolume`: PropTypes.number
#### `statMute`: PropTypes.bool
#### `statFullscreen`: PropTypes.bool

## To modify the media's state, simply update the state keys starting with `set*`:

#### `setSeekTo`: PropTypes.number
#### `setSkipTime`: PropTypes.number
#### `setPlayback`: PropTypes.string
#### `setVolume`: PropTypes.number
#### `setAddVolume`: PropTypes.number
#### `setMute`: PropTypes.bool
#### `setFullscreen`: PropTypes.bool
```js

import React, { Component } from 'react'

class CustomPlayPause extends Component {

  constructor(props) {
    super(props);
    this.state = Object.assign({}, Player.defaultMediaState);
  }

  _stateGetter = () => this.state;
  _stateSetter = (mediaState) => this.setState(mediaState);

  _handlePlayPause = () => {
    this.setState({setPlayback: 'playing'})
  }

  render() {
    const { className, style, media, src } = this.props
    return (
       <Player
          src={src}
          onClick={_handlePlayPause}
          {...Player.extractPropsFromMediaState(this.state)}
          mediaStateGetter={this._stateGetter}
          mediaStateSetter={this._stateSetter}
      />
      <button
        type="button"
        className={className}
        style={style}
        onClick={this._handlePlayPause}
      >
        { this.state.statPlayback === 'playing' ? 'Pause' : 'Play' }
      </button>
    )
  }
}

export default CustomPlayPause
```

## `utils.mediaStateHelper`

However, to make it easy to work with common actions, a media state helper has been provided. So the previous example would become:

```js

import React, { Component } from 'react'

class CustomPlayPause extends Component {

  constructor(props) {
    super(props);
    this.state = Object.assign({}, Player.defaultMediaState);
  }

  _stateGetter = () => this.state;
  _stateSetter = (mediaState) => this.setState(mediaState);
  _stateHelper = mediaStateHelper.bind(this)();

  render() {
    const { className, style, media, src } = this.props
    return (
       <Player
          src={src}
          onClick={this._stateHelper.togglePlay}
          {...Player.extractPropsFromMediaState(this.state)}
          mediaStateGetter={this._stateGetter}
          mediaStateSetter={this._stateSetter}
      />
      <button
        type="button"
        className={className}
        style={style}
        onClick={this._stateHelper.togglePlay}
      >
        { this._stateHelper.isPlaying ? 'Pause' : 'Play' }
      </button>
    )
  }
}

export default CustomPlayPause
```

There are more methods as well:

#### `togglePlay()`: Switch the play mode.
#### `toggleMute()`: Switch the current mute setting.
#### `isPlaying`: Check if the video is playing.
#### `play()`: Play the video.
#### `pause()`:  Pause the video.
#### `seekTo(time)`: Seek to a part in the video.
#### `skip(time)`: Skip a certain amount of time in the video.
#### `setVolume(volume)`: Set the volume setting.
#### `addVolume(volumeIncrement)`: Add to the volume setting.
#### `fullscreen()`: Fullscreen the video.
    
<br/>

## `utils.keyboardControls`

A special function that will provide keyboard support to the media player. Keyboard functions also operate by modifying the state.

```js

import React, { Component } from 'react'
import { Player, controls, utils } from 'react-media-player'
const { PlayPause, CurrentTime, Progress, SeekBar, Duration, MuteUnmute, Volume, Fullscreen } = controls
const { keyboardControls } = utils

class MediaPlayer extends Component {

  constructor(props) {
    super(props);
    this.state = Object.assign({}, Player.defaultMediaState);
  }

  _stateGetter = () => this.state;
  _stateSetter = (mediaState) => this.setState(mediaState);
  _keyboardControls = keyboardControls.bind(this);
  
  render() {
    return (
        <div
          className="media"
          onKeyDown={this._keyboardControls}
        >
          <Player
            src="against-them-all.mp3"
            className="media-player"
          {...Player.extractPropsFromMediaState(this.state)}
          mediaStateGetter={this._stateGetter}
          mediaStateSetter={this._stateSetter}
          />
        </div>
    )
  }
}
```

<br/>

## `utils.formatTime`

A helper function to format time.

```js
import React, { Component } from 'react'
import { utils } from 'react-media-player'
const { formatTime } = utils

class CurrentTime extends Component {
  shouldComponentUpdate({ currentTime }) {
    return this.props.currentTime !== currentTime
  }

  render() {
    const { className, style, currentTime } = this.props
    return (
      <time className={className} style={style}>
        {formatTime(currentTime)}
      </time>
    )
  }
}

export default CurrentTime
```

<br/>

## Running Locally

clone repo

`git clone git@github.com:souporserious/react-media-player.git`

move into folder

`cd ~/react-media-player`

install dependencies

`npm install`

run dev mode

`npm run dev`

open your browser and visit: `http://localhost:8080/`
