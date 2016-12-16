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
)

const NextTrack = (props) => (
  <svg width="10px" height="12px" viewBox="0 0 10 12" {...props}>
    <polygon fill="#FAFBFB" points="8,0 8,4.8 0,0 0,12 8,7.2 8,12 10,12 10,0"/>
  </svg>
)

class MediaPlayer extends Component {

  render() {
    const { src, currentTrack, loop, startTime, endTime, autoPlay,
      onPlay, onEnd, onPrevTrack, onNextTrack, onRepeatTrack,
      mediaStateGetter, mediaStateSetter, mediaStateHelper,
      keyboardControls} = this.props;
    const mediaState = mediaStateGetter();

    return (
      <div
        className={'media-player' + (mediaState.statFullscreen ? ' media-player--fullscreen' : '')}
        onKeyDown={keyboardControls}
        tabIndex="0"
      >
        <div
          className="media-player-element"
          onClick={mediaStateHelper.togglePlay}
        >
          <Player
            {...{src, autoPlay, onPlay, onEnd, loop, startTime, endTime}}
            debugMode={true}
            {...Player.extractPropsFromMediaState(mediaState)}
            mediaStateGetter={mediaStateGetter}
            mediaStateSetter={mediaStateSetter}
          />
        </div>
        <div className="media-controls media-controls--full">
          <div className="media-row">
            <CurrentTime
              className="media-control media-control--current-time"
              currentTime={mediaState.statCurrentTime}
            />
            {currentTrack}
            <Duration
              className="media-control media-control--duration"
              duration={mediaState.statDuration}
            />
          </div>
          <div className="media-control-group media-control-group--seek">
            <Progress
              className="media-control media-control--progress"
              progress={mediaState.statProgress}
            />
            <SeekBar
              className="media-control media-control--seekbar"
              progress={mediaState.statProgress}
              duration={mediaState.statDuration}
              currentTime={mediaState.statCurrentTime}
              isPlaying={mediaStateHelper.isPlaying}
              pause={mediaStateHelper.pause}
              play={mediaStateHelper.play}
              seekTo={mediaStateHelper.seekTo}
            />
          </div>
          <div className="media-row">
            <div className="media-control-group">
              <MuteUnmute
                className="media-control media-control--mute-unmute"
                volume={mediaState.statVolume}
                isMuted={mediaState.statMute}
                toggleMute={mediaStateHelper.toggleMute}
              />
            </div>
            <div className="media-control-group">
              <PrevTrack
                className="media-control media-control--prev-track"
                onClick={onPrevTrack}
              />
              <PlayPause
                className="media-control media-control--play-pause"
                togglePlay={mediaStateHelper.togglePlay}
                isPlaying={mediaStateHelper.isPlaying}
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
