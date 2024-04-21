import { NavLink } from 'react-router-dom';
import about from './../../../public/map1.jpeg'
function MapSection() {
    return (
        <>
         <div className='container '>
           
            <div className="row">
                <div className="col-md-12">
              
                <h1 className="text-center heading  ">Map</h1>
                
                    </div>
                </div>
                <div className='pt-5' style={{textAlign:"center"}}>
                <NavLink to="/lefletmap" target="_blank" rel="noopener noreferrer">
                        <button type="button" className="btn btn-primary btn-lg">View On Map</button>
                    </NavLink>
                </div>
         <div className="row py-5">
            
            <div className="col-12 ">
                <img className="img-fluid rounded" loading="lazy" src={about} alt="About 1" />
            </div>
            <div className="col-12 ">
               
            </div>
        </div>
        </div> 
        </>
    );
}
export default MapSection;