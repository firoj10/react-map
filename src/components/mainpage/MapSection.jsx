import { NavLink } from 'react-router-dom';
import about from './../../../public/map-final.png'
import "./MapSection.css";
function MapSection() {
    return (
        <>
         <div className='container pt-4'>
           
            <div className="row">
                <div className="col-md-12">
              
                <h1 className="text-center heading  ">Explore Bangladesh's Geographic Treasures: Interactive Map of GI Products</h1>
                
                    </div>
                </div>
                
                <div className=" position-relative">
                <div className="">
                 <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}></div>
                    <img className="img-fluid rounded map-images" width="100%" loading="lazy" src={about} alt="About 1" />
                    <div className='position-absolute rounded  top-50 start-50 translate-middle' style={{textAlign:"center"}}>
                    <NavLink  target="" rel="noopener noreferrer" to="/lefletmap"  >
                        <button type="button" className="btn btn-primary view-map">View On Map</button>
                    </NavLink>
                  
                    </div>
                </div>
            </div>
            
        </div> 
        </>
    );
}
export default MapSection;