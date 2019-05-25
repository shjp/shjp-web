import React, { memo } from 'react';
import { Marker } from 'google-maps-react';
import GoogleMap from 'components/common/GoogleMap';

function LocationPicker({ selectedPosition, onSelect }) {

  const _handleClick = (mapProps, map, evt) => {
    const { latLng } = evt;
    if (!latLng) {
      console.warn('Cannot get LatLng from click event');
      return;
    }

    const lat = latLng.lat();
    const lng = latLng.lng();

    let poi = null;
    if (evt.placeId) {
      const service = new window.google.maps.places.PlacesService(map);
      service.getDetails({
        placeId: evt.placeId,
        // Be careful when adding fields here! Some fields are priced.
        fields: ['name', 'formatted_address']
      }, (place, status) => {
        if (status === 'OK') {
          poi = place;
        }
        console.log('place = ', place);
        onSelect({ lat, lng, poi });
      })
    } else {
      onSelect({ lat, lng, poi });
    }
  };

  return (
    <GoogleMap
      clickableIcons={true}
      onClick={_handleClick}
    >
      {
        selectedPosition && (
          <Marker
            position={selectedPosition}
          />
        )
      }
    </GoogleMap>
  );
}

export default memo(LocationPicker);
