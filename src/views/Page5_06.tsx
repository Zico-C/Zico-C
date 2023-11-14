import { Map, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "react-leaflet-markercluster/dist/styles.min.css";
import MarkerClusterGroup  from "react-leaflet-markercluster";
import { ReactNode } from "react";

interface ModifiedMarkerClusterGroupProps {
  children?: ReactNode;
}

const ModifiedMarkerClusterGroup = (props: ModifiedMarkerClusterGroupProps) => {
  return <MarkerClusterGroup {...props} />;
};

const App = () => {
  const markerPositions = [
    [49.8397, 24.0297],
    [52.2297, 21.0122],
    [51.5074, -0.0901],
    // Add more marker positions as needed
  ];

  return (
    <Map center={[51.0, 19.0]} zoom={4} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <ModifiedMarkerClusterGroup>
        {markerPositions.map((position, index) => (
          <Marker key={index} position={position as [number, number]}>
            {/* You can customize the marker here if needed */}
          </Marker>
        ))}
      </ModifiedMarkerClusterGroup>
    </Map>
  );
};

export default App;
