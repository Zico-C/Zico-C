import React from "react";
import { Map, TileLayer, Marker } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import "react-leaflet-markercluster/dist/styles.min.css"; // 引入樣式
import L from "leaflet"; // 引入 Leaflet

// 生成隨機座標
const getRandomCoordinates = (): L.LatLng => {
  const lat = 24.98992602827932 + Math.random() * 0.1;
  const lng = 121.47831148890552 + Math.random() * 0.1;
  return L.latLng(lat, lng);
};

const generateMarkers = (count: number) => {
  const markers = [];
  for (let i = 0; i < count; i++) {
    markers.push({
      position: getRandomCoordinates(),
    });
  }
  return markers;
};

const MyMap: React.FC = () => {
  return (
    <Map
      center={[25.03, 121.52]}
      zoom={12}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <MarkerClusterGroup
        // 設置為 true 可以提高地圖性能，因為它僅顯示使用者地圖可見區域內的標記，使用者可見區域外的標記全部移除。
        // 設置為 false 則會顯示所有標記，即使它們在可見區域之外。
        removeOutsideVisibleBounds={false}
        // removeOutsideVisibleBounds={false}
      >
        {/* 渲染 5000 隨機標記 */}
        {generateMarkers(5000).map((marker, index) => (
          <Marker key={index} position={marker.position} />
        ))}
      </MarkerClusterGroup>
    </Map>
  );
};

export default MyMap;
