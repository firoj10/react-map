import about from './../../../public/map1.jpeg'
function MapSection() {
    return (
        <>
         <div className='container'>
            <div>
            <h1 className="text-center heading  mt-5">Map</h1>
            </div>
         <div className="row py-5">
            
            <div className="col-12 ">
                <img className="img-fluid rounded" loading="lazy" src={about} alt="About 1" />
            </div>
            <div className="col-12 ">
                {/* <button>View Map</button> */}
              
                <div style={{textAlign:"center"}}>
                <button type="button" className="btn btn-primary  px-4 my-4 text-center" >View Map</button>
                </div>
            </div>
        </div>
        </div> 
        </>
    );
}
export default MapSection;