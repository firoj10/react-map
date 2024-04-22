import { NavLink } from 'react-router-dom';
import about from './../../../public/map1.jpeg'
import "./MapSection.css";
function MapSection() {
    return (
        <>
         <div className='container '>
           
            <div className="row">
                <div className="col-md-12">
              
                <h1 className="text-center heading  ">Explore Bangladesh's Geographic Treasures: Interactive Map of GI Products</h1>
                
                    </div>
                </div>
                
                <div className=" position-relative">
                <div className="">
                    {/* Light black background */}
                    <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}></div>
                    
                    {/* Image */}
                    <img className="img-fluid rounded" loading="lazy" src={about} alt="About 1" />
                    
                    {/* Buttons */}
                    <div className='position-absolute top-50 start-50 translate-middle' style={{textAlign:"center"}}>
                    <NavLink to="/lefletmap"  >
                        <button type="button" className="btn btn-primary btn-lg mr-2">View On Map</button>
                    </NavLink>
                    {/* Add more buttons as needed */}
                    </div>
                </div>
                </div>
       
        </div> 
        </>
    );
}
export default MapSection;