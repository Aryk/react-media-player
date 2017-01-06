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
              className={'media-player' + (media.isFullscreen ? ' media-player--fullscreen' : '')}
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
                  currentTime={media.currentTime}
                />
                <div className="media-control-group media-control-group--seek">
                  <Progress
                    className="media-control media-control--progress"
                    progress={media.progress}
                  />
                  <SeekBar
                    className="media-control media-control--seekbar"
                    progress={media.progress}
                    duration={media.duration}
                    currentTime={media.currentTime}
                    isPlaying={media.isPlaying}
                    pause={media.pause}
                    play={media.play}
                    seekTo={media.seekTo}
                  />
                </div>
                <Duration
                  className="media-control media-control--duration"
                  duration={media.duration}
                />
                <MuteUnmute
                  className="media-control media-control--mute-unmute"
                  volume={media.volume}
                  isMuted={media.isMuted}
                  toggleMute={media.toggleMute}
                />
                <Volume
                  className="media-control media-control--volume"
                  volume={media.volume}
                  setVolume={media.setVolume}
                />
                <Fullscreen
                  className="media-control media-control--fullscreen"
                  isFullscreen={media.isFullscreen}
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
