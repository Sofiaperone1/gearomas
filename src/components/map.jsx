import * as React from 'react';
import Map, {NavigationControl, Marker} from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import '../views/ContactForm/ContactForm.css'

const Maps = () => {

  return (
    <div className="map" >
      <Map mapLib={maplibregl} 
        initialViewState={{
          longitude:  -58.38,
          latitude: -34.61,
          zoom: 4
        }}
        style={{width: "100%", height: "67vh"}}
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=f36wdhqCL7SaViSOWEY2"
      >
        <NavigationControl position="top-left" />
        <Marker 
           longitude={-64.1833}
           latitude={-31.4167}
           color="#61dbfb"
        />
        <Marker 
           longitude={-60.2833}
           latitude={-38.3833}
           color="#61dbfb"
        />
            <Marker 
           longitude={-58.3816}
           latitude={-34.6037}
           color="#61dbfb"
        />
      </Map>
    </div>
  );
}

export default Maps;