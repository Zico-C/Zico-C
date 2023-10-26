import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "../../node_modules/leaflet/dist/leaflet.css"
/*  MapContainer：這是地圖的容器，用來顯示地圖。
    TileLayer：這是地圖的圖層，用來指定地圖的圖片資源。
    Marker：這是地圖上的標記點，可以用來標示位置。
    Popup：這是標記點的彈出窗口，顯示有關該標記點的信息。
*/
function MapView() {
  return (
    <div id="map" style={{ height: '100%', width: '80%' }}>
      <h1>Leaflet 地圖示例</h1>
      {/* 地圖容器 */}
      <MapContainer center={[24.80063398900308, 120.97787231991643]} zoom={25} style={{ height: '700px' }}>
        {/* 地圖圖層 */}
        <TileLayer 
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> 貢獻者'
            //地圖圖層的URL
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* 地圖標記 */}
        <Marker position={[24.80063398900308, 120.97787231991643]}>
          {/* 彈出窗口 */}
          <Popup>
            這是一個Leaflet地圖的標記點。
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MapView;