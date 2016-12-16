import React, { Component, PropTypes } from 'react'
import formatTime from '../utils/format-time'

class CurrentTime extends Component {
  shouldComponentUpdate({ currentTime }) {
    return this.props.currentTime !== currentTime
  }

  render() {
    const { className, style, currentTime } = this.props;
    return (
      <time className={className} style={style}>
        {formatTime(currentTime)}
      </time>
    )
  }
}

export default CurrentTime
