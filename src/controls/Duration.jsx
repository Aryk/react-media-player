import React, { Component, PropTypes } from 'react'
import formatTime from '../utils/format-time'

class Duration extends Component {
  shouldComponentUpdate({ duration }) {
    return this.props.duration !== duration
  }

  render() {
    const { className, style, duration } = this.props;
    return (
      <time className={className} style={style}>
        {duration ? formatTime(duration) : "0:00"}
      </time>
    )
  }
}

export default Duration
