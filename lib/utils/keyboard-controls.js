'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = keyboardControls;
var MEDIA_KEYS = [0, 'f', 'j', 'k', 'l', ',', '.', ' ', 'Home', 'End', 'ArrowLeft', 'ArrowTop', 'ArrowRight', 'ArrowDown'];

function keyboardControls(e) {
  var key = e.key,
      shiftKey = e.shiftKey;

  // prevent default on any media keys

  MEDIA_KEYS.some(function (_key) {
    return _key === key && e.preventDefault();
  });

  // handle respective key controls
  switch (key) {
    // Play/Pause
    case ' ':
    case 'k':
      this.togglePlay();
      break;

    // Seeking Backwards
    case 'ArrowLeft':
      this.skip(shiftKey ? -10 : -5);
      break;
    case 'j':
      this.skip(shiftKey ? -10 : -5);
      break;
    case ',':
      this.skip(-1);
      break;

    // Seeking Forwards
    case 'ArrowRight':
      this.skip(shiftKey ? 10 : 5);
      break;
    case 'l':
      this.skip(shiftKey ? 10 : 5);
      break;
    case '.':
      this.skip(1);
      break;
    case 0:
    case 'Home':
      this.seekTo(0);
      break;
    case 'End':
      this.seekTo(this.state.statDuration);
      break;

    // Volume
    case 'ArrowUp':
      this.addVolume(shiftKey ? 10 : 5);
      break;
    case 'ArrowDown':
      this.addVolume(shiftKey ? -10 : -5);
      break;

    // Fullscreen
    case 'f':
      this.fullscreen();
      break;
  }
}