import React, { Component, PropTypes } from 'react'

class Fullscreen extends Component {

  render() {
    const { isFullscreen, fullscreen, className } = this.props;
    return (
      <svg width="36px" height="36px" viewBox="0 0 36 36" className={className} onClick={fullscreen}>
        <circle fill="#373D3F" cx="18" cy="18" r="18"/>
        {
          !isFullscreen ?
          <g>
	          <polyline fill="none" stroke="#CDD7DB" strokeWidth="1.75" points="9.875,16.5 9.875,11.375 15,11.375"/>
	          <polyline fill="none" stroke="#CDD7DB" strokeWidth="1.75" points="26.125,16.5 26.125,11.375 21,11.375"/>
	          <polyline fill="none" stroke="#CDD7DB" strokeWidth="1.75" points="9.875,19.5 9.875,24.625 15,24.625"/>
	          <polyline fill="none" stroke="#CDD7DB" strokeWidth="1.75" points="26.125,19.5 26.125,24.625 21,24.625"/>
          </g> :
          <g>
            <polyline fill="none" stroke="#CDD7DB" strokeWidth="1.75" points="14.125,10.5 14.125,15.625 9,15.625"/>
            <polyline fill="none" stroke="#CDD7DB" strokeWidth="1.75" points="21.875,10.5 21.875,15.625 27,15.625"/>
            <polyline fill="none" stroke="#CDD7DB" strokeWidth="1.75" points="14.125,25.5 14.125,20.375 9,20.375"/>
            <polyline fill="none" stroke="#CDD7DB" strokeWidth="1.75" points="21.875,25.5 21.875,20.375 27,20.375"/>
          </g>
        }
      </svg>
    )
  }
}

export default Fullscreen
