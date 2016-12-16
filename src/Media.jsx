import React, { Component, PropTypes, Children } from 'react'
import mediaStateHelper  from './utils/media-state-helper'
import Player  from './Player'

class Media extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = Object.assign({}, Player.defaultMediaState);
  }

  _stateGetter = () => this.state;
  _stateSetter = (mediaState) => this.setState(mediaState);
  _stateHelper = mediaStateHelper.bind(this)();

  _getPlayerProps() {
    return {
      state: this.state,
      stateGetter: this._stateGetter,
      stateSetter: this._stateSetter,
      stateHelper: this._stateHelper,
    };
  }

  render() {
    const { children } = this.props;

    if (typeof children === 'function') {
      return children(this._getPlayerProps())
    }

    return Children.only(children)
  }
}

export default Media
