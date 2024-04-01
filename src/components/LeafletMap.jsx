import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON, LayersControl } from 'react-leaflet';
import "leaflet/dist/leaflet.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import logo from './../../public/fab.png'

import marker  from './../../public/marker-icon-2x.png'
import { Icon } from 'leaflet'
const myIcon = new Icon({
 iconUrl: marker,
 iconSize: [20,30]
})
// import { locations } from './../data/location/location.js'
import "./map.css";
import MiniMapControl from './MiniMapControl';
import { Link, } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

function LeafletMap() {
  const { BaseLayer } = LayersControl;

  const [geojsonData, setGeojsonData] = useState(null);
  const [locations, setlocations] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('./bangladesh.json');
      const data = await response.json();
      setGeojsonData(data);
    };

    fetchData();
  }, []);

 
  useEffect(() => {
    fetch('./location.json')
      .then((res) => res.json())
      .then((data) => {
        setlocations(data);
      });
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
                {locations?.map((location, index) => (
                  <tr key={index}>
                    <td style={{ paddingLeft: '8px', textAlign: 'left' }}>
                      <span className='table-title'>{location.name}</span>
                    </td>

                    <td style={{ paddingLeft: '8px', textAlign: 'left' }}>
                      <span className='table-title'>{location.district}</span>
                    </td>
                    <td style={{ paddingRight: '8px', textAlign: 'right' }}>
                      <span className='table-title'>
                        {/* <a href={product.webLink}>Website</a> */}
                        {/* <NavLink to="/mapDetails" target="_blank" rel="noopener noreferrer">Website</NavLink> */}
                        <Link target="_blank" to={`/mapDetails/${location.id}`}>
                          View Details
                        </Link>

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
          <BaseLayer  name="OpenStreetMap.BlackAndWhite">
            <TileLayer url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png" />
          </BaseLayer>
          <BaseLayer checked  name="USGS.USImageryTopo">
            <TileLayer url="https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}" />
          </BaseLayer>
          <BaseLayer name="Carto Dark">
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
        {locations?.map((location, index) => (
          <Marker key={index} position={location.position} icon={myIcon}
          >
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
                   <p className='m-1 description'>{location.productlist ?.des1 ? location.productlist.des1 : ' '}</p>
                   <p className='m-1 description'>{location.productlist ?.des2 ? location.productlist.des2 : ' '}</p> 
                 <p className='m-1 description'>{location.productlist ?.des3 ? location.productlist.des3 : ' '}</p>
                   <p className='m-1 description'>{location.productlist ?.des4 ? location.productlist.des4 : ' '}</p>
                 <p className='m-1 description'>{location.productlist ?.des5 ? location.productlist.des5 : ' '}</p>
                  <p className='m-1 description'>{location.productlist ?.des5 ? location.productlist.des6 : ' '}</p>
                 <p className='m-1 description'>{location.productlist ?.des7 ? location.productlist.des7 : ' '}</p>
                   <p className='m-1 description'>{location.productlist ?.des8 ? location.productlist.des8 : ' '}</p> 

                  <div className='text-center fw-bold'>
                    {/* <a href="">Visit Website</a> */}
                    {/* <Link to={`/mapDetails/${location.id}`}><button className=" p-3   bg-orange-900  text-white ">View Details</button></Link> */}
                    <Link target="_blank"  to={`/mapDetails/${location.id}`}>
                    View Details
                    </Link>
                   
                   </div>
                </div>
              </div>

            </Popup>
          </Marker>
        ))}
        <MiniMapControl position={[23.685, 90.3563]} zoom={4} />
      </MapContainer>
      <Footer></Footer>
    </div>

  );
}

export default LeafletMap;






