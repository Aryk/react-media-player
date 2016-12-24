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

A basic React component called `Media` is provided to help you get up and running. It's actually pretty straight forward, which is why I recommend not using it and instead just manually setting the default state keys and managing it yourself, but here it is in all it's glory:

```jsx
import React, { Component, PropTypes, Children } from 'react'
import mediaHelper  from './utils/media-helper'
import Player  from './Player'

class Media extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = Object.assign({}, Player.defaultMediaState);
  }

  render() {
    return this.props.children(mediaHelper(this));
  }
}

export default Media
```

Here is a Video player that uses this component.

```jsx
import React, { Component } from 'react'
import { Media, Player, controls, utils } from '../src/react-media-player'
import PlayPause from './PlayPause'
import MuteUnmute from './MuteUnmute'
import Fullscreen from './Fullscreen'

const { CurrentTime, Progress, SeekBar, Duration, Volume } = controls;

export default class VideoPlayer extends Component {

  render() {

    return (
      <Media>
        {(media) => {
          return (
            <div
              className={'media-player' + (media.state.statFullscreen ? ' media-player--fullscreen' : '')}
              tabIndex="0"
            >
              <Player
                src={this.props.src}
                onClick={media.togglePlay}
                {...media.toPlayerProps()}
              />
              <div className="media-controls">
                <PlayPause
                  className="media-control media-control--play-pause"
                  togglePlay={media.togglePlay}
                  isPlaying={media.isPlaying}
                />
                <CurrentTime
                  className="media-control media-control--current-time"
                  currentTime={media.state.statCurrentTime}
                />
                <div className="media-control-group media-control-group--seek">
                  <Progress
                    className="media-control media-control--progress"
                    progress={media.state.statProgress}
                  />
                  <SeekBar
                    className="media-control media-control--seekbar"
                    progress={media.state.statProgress}
                    duration={media.state.statDuration}
                    currentTime={media.state.statCurrentTime}
                    isPlaying={media.isPlaying}
                    pause={media.pause}
                    play={media.play}
                    seekTo={media.seekTo}
                  />
                </div>
                <Duration
                  className="media-control media-control--duration"
                  duration={media.state.statDuration}
                />
                <MuteUnmute
                  className="media-control media-control--mute-unmute"
                  volume={media.state.statVolume}
                  isMuted={media.state.statMute}
                  toggleMute={media.toggleMute}
                />
                <Volume
                  className="media-control media-control--volume"
                  volume={media.state.statVolume}
                  setVolume={media.setVolume}
                />
                <Fullscreen
                  className="media-control media-control--fullscreen"
                  isFullscreen={media.state.statFullscreen}
                  fullscreen={media.fullscreen}
                />
              </div>
            </div>
          )
        }}
      </Media>
    )
  }
}
```
Here is an example, where the `Media` component is not being used.

```jsx
import React, { Component } from 'react'
import { Player, controls, utils } from '../src/react-media-player'
const { CurrentTime, Progress, SeekBar, PlayPause } = controls;

export default class VideoPlayer extends Component {

  constructor(props) {
    super(props);
    // Assign the default state for the media player by merging in Player.defaultMediaState.
    this.state = Object.assign({}, Player.defaultMediaState);
  }

  // Use the provided helper to make working with the media state easier.
  media = utils.mediaHelper(this);
  
  render() {
    return (
      <div>
        <Player
          src={this.props.src}
          onClick={this.media.togglePlay}
			{/* Pass through the props from the media's state into the player to 'connect' it. */}
          {...this.media.toPlayerProps()}
        />
        <div>
          <PlayPause
            togglePlay={this.media.togglePlay}
            isPlaying={this.media.isPlaying}
          />
          <CurrentTime
            {/* Access the media's state directly to work with it's information. */}
            currentTime={this.media.state.statCurrentTime}
          />
          <div>
            <Progress
              progress={this.media.state.statProgress}
            />
            <SeekBar
              progress={this.media.state.statProgress}
              duration={this.media.state.statDuration}
              currentTime={this.media.state.statCurrentTime}
              isPlaying={this.media.isPlaying}
              pause={this.media.pause}
              play={this.media.play}
              seekTo={this.media.seekTo}
            />
          </div>
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
    // Start the video playing.
    this.setState({setPlayback: this.state.setPlayback !== 'playing' ? 'playing' : 'paused'})
  }

  render() {
    const { className, style, media, src } = this.props
    return (
       <Player
          src={src}
          onClick={_handlePlayPause}
          {/* These three fields below are usually handled with mediaHelper(this).toPlayerProps */}
          {/* but we left it here to show you that this is possible as well. See utils.mediaHelper below. */}
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

## `utils.mediaHelper`

However, to make it easy to work with common actions, a media state helper has been provided. So the previous example would become:

```js
import React, { Component } from 'react'
import { Player, utils } from '../src/react-media-player'

class CustomPlayPause extends Component {

  constructor(props) {
    super(props);
    this.state = Object.assign({}, Player.defaultMediaState);
  }

  media = utils.mediaHelper(this);

  render() {
    const { className, style, media, src } = this.props
    return (
       <Player
          src={src}
          onClick={this.media.togglePlay}
          {...media.toPlayerProps()}
      />
      <button
        type="button"
        className={className}
        style={style}
        onClick={this.media.togglePlay}
      >
        { media.isPlaying ? 'Pause' : 'Play' }
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

A special function that will provide keyboard support to the media player. Keyboard functions also operate by modifying the state. You can use this class directly, or call the `keyboardControls` method on the `mediaHelper` object.

```js
import React, { Component } from 'react';
import { Player, controls, utils } from 'react-media-player';
const { PlayPause, CurrentTime, Progress, SeekBar, Duration, MuteUnmute, Volume, Fullscreen } = controls;
const { keyboardControls, mediaHelper } = utils;

class MediaPlayer extends Component {

  constructor(props) {
    super(props);
    this.state = Object.assign({}, Player.defaultMediaState);
  }

  _mediaHelper = mediaHelper(this);
  // You could do this, but we've made it even easier...see below...
  // _keyboardControls = keyboardControls.bind(this._mediaHelper);

  render() {
    return (
      <div
        className="media"
        onKeyDown={this._mediaHelper.keyboardControls}
      >
        <Player
          src="against-them-all.mp3"
          className="media-player"
          {...this._mediaHelper.toPlayerProps}
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
