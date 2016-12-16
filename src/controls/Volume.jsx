import React, { Component, PropTypes } from 'react'

class Volume extends Component {
  _onChangeUsed = false;

  shouldComponentUpdate({ volume }) {
    return this.props.volume !== volume
  }

  _setVolume = (value) => this.props.setVolume(parseFloat((+value).toFixed(4)));

  _handleMouseUp = ({ target: { value } }) => {
    // set volume on mouseUp as well because of this bug in <= IE11
    // https://github.com/facebook/react/issues/554
    if (!this._onChangeUsed) {
      this._setVolume(value);
    }
  };

  _handleChange = ({ target: { value } }) => {
    this._setVolume(value);
    this._onChangeUsed = true;
  };

  render() {
    const { className, style, volume } = this.props;
    return (
      <input
        type="range"
        step="any"
        min={0}
        max={1}
        value={volume}
        onMouseUp={this._handleMouseUp}
        onChange={this._handleChange}
        className={className}
        style={{
          backgroundSize: (volume * 100 / 1) + '% 100%',
          ...style
        }}
      />
    )
  }
}

export default Volume
