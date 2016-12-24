import React, { Component, PropTypes, Children } from 'react'
import mediaHelper  from './utils/media-helper'
import Player  from './Player'

class Media extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = Object.assign({}, Player.defaultMediaState);
  }

  render() {
    return this.props.children(mediaHelper(this));
  }
}

export default Media
