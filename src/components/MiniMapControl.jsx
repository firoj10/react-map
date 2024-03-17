import React, { useRef, useEffect } from 'react';
import { useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Make sure to import Leaflet CSS
import "./map.css";

const MiniMapControl = ({ position, zoom }) => {
  const map = useMap();
  const miniMapRef = useRef(null);
 
  useEffect(() => {
    if (!miniMapRef.current) return;

    const miniMap = new window.L.Map(miniMapRef.current, {
      zoomControl: false // Disable default zoom control
    }).setView(position, zoom);

    new window.L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Mini Map',
    }).addTo(miniMap);

    return () => {
      miniMap.remove();
    };
  }, [position, zoom]);

  return <div ref={miniMapRef} className="leaflet-mini-map" />;
};

export default MiniMapControl;
