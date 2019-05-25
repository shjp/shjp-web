import React, { memo } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

import './GoogleMap.scss';

const defaultGoogleMapProps = {
  zoom: 14,
  style: {
    width: '100%',
    height: '100%',
  },
  initialCenter: {
    lat: 43.613282,
    lng: -79.5152824,
  },
};

const WrappedGoogleMap = GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(props => (
  <Map
    {...defaultGoogleMapProps}
    {...props}
  />
));

function GoogleMap(props) {
  return (
    <div className="google-map-container">
      <WrappedGoogleMap
        {...props}
        className="google-map"
      />
    </div>
  );
}

export default memo(GoogleMap);
