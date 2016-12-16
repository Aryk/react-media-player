import React, { Component, PropTypes } from 'react'

class Progress extends Component {
  shouldComponentUpdate({ progress }) {
    return this.props.progress !== progress
  }

  render() {
    const { className, style, progress } = this.props;

    return (
      <progress
        className={className}
        style={style}
        max={100}
        value={progress * 100}
      />
    )
  }
}

export default Progress
