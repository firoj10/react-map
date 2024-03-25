import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON, LayersControl } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../../public/marker-icon-2x.png'
import { products } from './../data/products/products.js'
import { locations } from './../data/location/location.js'
import "./map.css";
import MiniMapControl from './MiniMapControl';
import { NavLink } from 'react-router-dom';
import Header from './Header.jsx';

function LeafletMap() {
  const { BaseLayer } = LayersControl;

  const [geojsonData, setGeojsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('./bangladesh.json');
      const data = await response.json();
      setGeojsonData(data);
    };

    fetchData();
  }, []);

  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  const [legendOpen, setLegendOpen] = useState(false);

  const toggleLegend = () => {
    setLegendOpen(!legendOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.innerWidth > 768;
      setIsDesktop(isDesktop);
    };

    window.addEventListener('resize', handleResize);

    if (isDesktop) {
      setLegendOpen(true);
    } else {
      setLegendOpen(false);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isDesktop]);

  return (
    <div className="map-containeree">
     <Header></Header>
      <div className={`map_legend_infosee ${legendOpen ? 'open' : 'closed'}`}>
        <div id="map_data_infos" style={{ maxHeight: '310px', overflow: 'auto' }}>
          <div className='close-btn'>
            {isDesktop && (
              <div className='show-btn'>
                <button onClick={toggleLegend}>{legendOpen ? "Hide List" : "Show List"}</button>
              </div>
            )}

            {!isDesktop && (
              <div className='show-btn'>
                <button onClick={() => setLegendOpen(!legendOpen)}>
                  {legendOpen ? "Hide List" : "Show List"}
                </button>
              </div>
            )}
          </div>
          {legendOpen && (
            <table className="table table-striped table-hover">
              <thead className='sticky-top'>
                <tr>
                  <th className='table-top-title'>Geographical Features</th>
                  <th className='table-top-title'>District/Region</th>
                  <th className='table-top-title'>Website</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={index}>
                    <td style={{ paddingLeft: '8px', textAlign: 'left' }}>
                      <span className='table-title'>{product.name}</span>
                    </td>

                    <td style={{ paddingLeft: '8px', textAlign: 'left' }}>
                      <span className='table-title'>{product.district}</span>
                    </td>
                    <td style={{ paddingRight: '8px', textAlign: 'right' }}>
                      <span className='table-title'>
                        {/* <a href={product.webLink}>Website</a> */}
                        <NavLink to="/mapDetails" target="_blank" rel="noopener noreferrer">Website</NavLink>

                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

        </div>

      </div>
      <div className="map"></div>
      <MapContainer center={[23.685, 90.3563]} zoom={7} style={{ height: '100vh', backgroundColor: 'lightblue' }}>
        <LayersControl position="topright">
          <BaseLayer  name="OpenStreetMap.Mapnik">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </BaseLayer>
          <BaseLayer name="OpenStreetMap.BlackAndWhite">
            <TileLayer url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png" />
          </BaseLayer>
          <BaseLayer name="USGS.USImageryTopo">
            <TileLayer url="https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}" />
          </BaseLayer>
          <BaseLayer checked name="Carto Dark">
            <TileLayer url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png" />
          </BaseLayer>
        </LayersControl>
        {/* {geojsonData && <GeoJSON data={geojsonData} style={{ color: '#454b1b9e', }} />} */}
        <div>
          {geojsonData && (
            <GeoJSON
              data={geojsonData}
              style={() => ({
                fillColor: "#dc354596",
                fillOpacity: 2,
                color: "#2c310a", // Border color
                weight: 1, // Border width
                zIndex: -1
              })}
            />
          )}
        </div>
        {locations.map((location, index) => (
          <Marker key={index} position={location.position}>
            <Popup style={{ zIndex: '999' }}>
              <div className="row">
                <div className="col-12">
                  <p><img className='rounded' alt={location.name} src={location.img} decoding="async" width="100%" height="130" /></p>
                </div>
               
              </div>


              <div className='row '>
                <div className='col-12 col-md-12'>

                  {/* <h6 className='fw-bold'>List</h6> */}
                  <div className=''>
                    <h6 className='fw-bold'>{location.name}</h6><span className=''>({location.district}) </span>
                  </div>
                  {/* <p>{location.description}</p> */}
                  <p className='m-2 fw-bold fs-7'>{location.material ? location.material : ' '}</p>
                   <p className='m-1 description'>{location.description ?.des1 ? location.description.des1 : ' '}</p>
                   <p className='m-1 description'>{location.description ?.des2 ? location.description.des2 : ' '}</p> 
                 <p className='m-1 description'>{location.description ?.des3 ? location.description.des3 : ' '}</p>
                   <p className='m-1 description'>{location.description ?.des4 ? location.description.des4 : ' '}</p>
                 <p className='m-1 description'>{location.description ?.des5 ? location.description.des5 : ' '}</p>
                  <p className='m-1 description'>{location.description ?.des5 ? location.description.des6 : ' '}</p>
                 <p className='m-1 description'>{location.description ?.des7 ? location.description.des7 : ' '}</p>
                   <p className='m-1 description'>{location.description ?.des8 ? location.description.des8 : ' '}</p> 

                  <div className='text-center fw-bold'>
                    <a href="">Visit Website</a>
                  </div>
                </div>
              </div>

            </Popup>
          </Marker>
        ))}
        <MiniMapControl position={[23.685, 90.3563]} zoom={4} />
      </MapContainer>
    </div>

  );
}

export default LeafletMap;






