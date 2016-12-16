import mediaHelper from './media-helper'
const MEDIA_KEYS = [0, 'f', 'j', 'k','l', ',', '.', ' ', 'Home', 'End', 'ArrowLeft', 'ArrowTop', 'ArrowRight', 'ArrowDown']

export default function keyboardControls(e) {
  const { key, shiftKey } = e;
  const helper = mediaHelper.bind(this)();

  // prevent default on any media keys
  MEDIA_KEYS.some(_key => (_key === key) && e.preventDefault());

  // handle respective key controls
  switch (key) {
    // Play/Pause
    case ' ':
    case 'k':
      helper.togglePlay();
      break;

    // Seeking Backwards
    case 'ArrowLeft':
      helper.skip(shiftKey ? -10 : -5);
      break;
    case 'j':
      helper.skip(shiftKey ? -10 : -5);
      break;
    case ',':
      helper.skip( -1);
      break;

    // Seeking Forwards
    case 'ArrowRight':
      helper.skip(shiftKey ? 10 : 5);
      break;
    case 'l':
      helper.skip(shiftKey ? 10 : 5);
      break;
    case '.':
      helper.skip(1);
      break;
    case 0:
    case 'Home':
      helper.seekTo(0);
      break;
    case 'End':
      helper.seekTo(this.state.statDuration);
      break;

    // Volume
    case 'ArrowUp':
      helper.addVolume(shiftKey ? 10 : 5);
      break;
    case 'ArrowDown':
      helper.addVolume(shiftKey ? -10 : -5);
      break;

    // Fullscreen
    case 'f':
      helper.fullscreen()
      break;
  }
}
