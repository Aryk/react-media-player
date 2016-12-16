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
                onClick={media.stateHelper.togglePlay}
                {...Player.extractPropsFromMediaState(media.state)}
                mediaStateGetter={media.stateGetter}
                mediaStateSetter={media.stateSetter}
              />
              <div className="media-controls">
                <PlayPause
                  className="media-control media-control--play-pause"
                  togglePlay={media.stateHelper.togglePlay}
                  isPlaying={media.stateHelper.isPlaying}
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
                    isPlaying={media.stateHelper.isPlaying}
                    pause={media.stateHelper.pause}
                    play={media.stateHelper.play}
                    seekTo={media.stateHelper.seekTo}
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
                  toggleMute={media.stateHelper.toggleMute}
                />
                <Volume
                  className="media-control media-control--volume"
                  volume={media.state.statVolume}
                  setVolume={media.stateHelper.setVolume}
                />
                <Fullscreen
                  className="media-control media-control--fullscreen"
                  isFullscreen={media.state.statFullscreen}
                  fullscreen={media.stateHelper.fullscreen}
                />
              </div>
            </div>
          )
        }}
      </Media>
    )
  }
}
