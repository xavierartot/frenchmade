// AIzaSyDaBXsXVV-2w3w5TjcJQKV-TBcbxq1nGRga
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => (
  <div
    style={{
      position: 'relative',
      color: '#999',
      fontSize: '1rem',
      textAlign: 'center',
      background: 'rgba(0, 0, 0, .85)',
      height: 40,
      width: 60,
      top: -20,
      left: -30,
    }}
  >
    {text}
  </div>
);

class SimpleMap extends React.Component {
  static defaultProps = {
    center: { lat: 30.2570661, lng: -97.73018109999998 },
    zoom: 15,
  };

  render() {
    return (
      <GoogleMapReact defaultCenter={this.props.center} defaultZoom={this.props.zoom}>
        <AnyReactComponent lat={30.2570661} lng={-97.73018109999998} text="French Made" />
      </GoogleMapReact>
    );
  }
}

export default SimpleMap;
