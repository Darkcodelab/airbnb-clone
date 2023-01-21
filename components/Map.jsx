import "mapbox-gl/dist/mapbox-gl.css";

import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";

function Map({ searchResult }) {
  const [selectedLocation, setSelectedLocation] = useState({});
  const coords = searchResult.map((res) => {
    return { latitude: res.lat, longitude: res.long };
  });
  const center = getCenter(coords);
  const [viewport] = useState({
    width: "100%",
    height: "100%",
    zoom: 11,
    latitude: center.latitude,
    longitude: center.longitude,
  });
  return (
    <ReactMapGL
      mapStyle="mapbox://styles/darkcoder/cld5ik7a0001w01pgqybi4rbu"
      mapboxAccessToken={process.env.mapbox_key}
      initialViewState={viewport}
    >
      {searchResult.map((res) => {
        return (
          <div key={res.long}>
            <Marker latitude={res.lat} longitude={res.long} offset={[-20, -10]}>
              <p
                className="text-3xl animate-[bounce_2s_ease-in_infinite] cursor-pointer"
                onClick={() => setSelectedLocation(res)}
                aria-label="push-pin"
                role="img"
              >
                📌
              </p>
            </Marker>
            {selectedLocation.long == res.long ? (
              <Popup
                longitude={res.long}
                latitude={res.lat}
                closeOnClick={false}
                closeOnMove={true}
                onClose={() => setSelectedLocation({})}
              >
                <div>{res.title}</div>
              </Popup>
            ) : null}
          </div>
        );
      })}
    </ReactMapGL>
  );
}
export default Map;
