import { useEffect,  useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON , LayersControl} from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './../../public/marker-icon-2x.png'
import logo from './../../public/b.png'
import {products} from './../data/products/products.js'
import {locations} from './../data/location/location.js'
import "./map.css";
import MiniMapControl from './MiniMapControl';

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
      <div className="header " style={{}} >
        <div className="card" style={{backgroundColor:"white", color:'blue', border:'none'}}>
          <div className="row" style={{alignItems:'center'}}>
            <div className="col-12 col-md-3" style={{alignItems:'center'}}>
              <img src={logo} alt="" width={180} height={80} />
            </div>
            <div className="col-12 col-md-9 " style={{alignItems:'center', textAlign:'right', color: 'blue'}}>
          
            <h5 className='pe-2'>বাংলাদেশের নির্দেশিত সকল ভৌগোলিক নির্দেশক লিস্ট</h5>
         
            </div>
          </div>
        </div>
      </div>
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
              <th className='table-top-title'>ভৌগোলিক নিদর্শন</th>
              <th className='table-top-title'>জেলা/অঞ্চল</th>
              <th className='table-top-title'>ওয়েবসাইট </th>
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
                    <a href={product.webLink}> পরিদর্শন</a>
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
        <BaseLayer checked name="OpenStreetMap.Mapnik">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </BaseLayer>
        <BaseLayer name="OpenStreetMap.BlackAndWhite">
          <TileLayer url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png" />
        </BaseLayer>
        <BaseLayer name="USGS.USImageryTopo">
          <TileLayer url="https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}" />
        </BaseLayer>
        <BaseLayer name="Carto Dark">
          <TileLayer url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png" />
        </BaseLayer>
      </LayersControl>
      {geojsonData && <GeoJSON data={geojsonData} style={{ color: '#454B1B' }} />}
      {locations.map((location, index) => (
        <Marker key={index} position={location.position}>
          <Popup style={{ zIndex: '999' }}>
            <div className='row '>
              <div  className='col-4 col-md-6'>
              <p><img className='rounded' alt={location.name} src={location.img} decoding="async" width="100%" height="93" /></p>
              <h6 className='fw-bold'>তালিকা</h6>
              <ul>
             <li>বাগদা চিংড়ি</li>
             <li>ফজলি আম</li>
              <li>খিরসাপাতি</li>
              <li>ইলিশ</li>
           </ul>

              </div>
              <div  className='col-8 col-md-6'>
              <div className=''>
                <h6 className='fw-bold'>{location.name}</h6><span className='px-2'>({location.district}) </span>
              </div>
              <p>{location.description}</p>
             
           <div className='text-center fw-bold'>
             <a href="">  ওয়েবসাইট পরিদর্শন</a>
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






