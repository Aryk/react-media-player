import React, { Component, PropTypes } from 'react'
import { Player, controls } from '../src/react-media-player'
import PlayPause from './PlayPause'
import MuteUnmute from './MuteUnmute'
import Repeat from './Repeat'

const { CurrentTime, Progress, SeekBar, Duration } = controls;

const PrevTrack = (props) => (
  <svg width="10px" height="12px" viewBox="0 0 10 12" {...props}>
    <polygon fill="#FAFBFB" points="10,0 2,4.8 2,0 0,0 0,12 2,12 2,7.2 10,12"/>
  </svg>
);

const NextTrack = (props) => (
  <svg width="10px" height="12px" viewBox="0 0 10 12" {...props}>
    <polygon fill="#FAFBFB" points="8,0 8,4.8 0,0 0,12 8,7.2 8,12 10,12 10,0"/>
  </svg>
);

class MediaPlayer extends Component {

  render() {
    const { src, currentTrack, loop, startTime, endTime, autoPlay,
      onPlay, onEnd, onPrevTrack, onNextTrack, onRepeatTrack,
      media, keyboardControls} = this.props;

    return (
      <div
        className={'media-player' + (media.isFullscreen ? ' media-player--fullscreen' : '')}
        onKeyDown={keyboardControls}
        tabIndex="0"
      >
        <div
          className="media-player-element"
          onClick={media.togglePlay}
        >
          <Player
            {...{src, autoPlay, onPlay, onEnd, loop, startTime, endTime}}
            {...media.toPlayerProps()}
            debugMode={true}
          />
        </div>
        <div className="media-controls media-controls--full">
          <div className="media-row">
            <CurrentTime
              className="media-control media-control--current-time"
              currentTime={media.currentTime}
            />
            {currentTrack}
            <Duration
              className="media-control media-control--duration"
              duration={media.duration}
            />
          </div>
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
          <div className="media-row">
            <div className="media-control-group">
              <MuteUnmute
                className="media-control media-control--mute-unmute"
                volume={media.volume}
                isMuted={media.isMuted}
                toggleMute={media.toggleMute}
              />
            </div>
            <div className="media-control-group">
              <PrevTrack
                className="media-control media-control--prev-track"
                onClick={onPrevTrack}
              />
              <PlayPause
                className="media-control media-control--play-pause"
                togglePlay={media.togglePlay}
                isPlaying={media.isPlaying}
              />
              <NextTrack
                className="media-control media-control--next-track"
                onClick={onNextTrack}
              />
            </div>
            <div className="media-control-group">
              <Repeat
                className="media-control media-control--repeat"
                isActive={loop}
                onClick={onRepeatTrack}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MediaPlayer
