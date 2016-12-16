import React, { Component, PropTypes } from 'react'

class Fullscreen extends Component {
  shouldComponentUpdate({ isFullscreen }) {
    return this.props.isFullscreen !== isFullscreen;
  }

  render() {
    const { className, style, isFullscreen, fullscreen } = this.props;

    return (
      <button
        type="button"
        className={className}
        style={style}
        onClick={fullscreen}
      >
        { isFullscreen ? 'Exit Fullscreen' : 'Fullscreen' }
      </button>
    )
  }
}

export default Fullscreen
