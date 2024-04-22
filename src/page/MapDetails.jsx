
import { Link, NavLink, useLoaderData,  } from 'react-router-dom';
import Header from '../components/Header';
import Content from '../components/content/Content';
import Slider from '../components/slider/Slider';


import './MapDetails.css'
import Footer from '../components/Footer';

function MapDetails() {
 

  const data = useLoaderData();

  return (
    <div>
      <Header></Header>
      <div className=" py-4 text-center" style={{backgroundColor:'white', color:'Black'}}><h1 className="container mb-0">{data.name}</h1></div>
      <Slider key={data.id}  data={data }></Slider>
      <div className='container pt-4'>
      <h3>{data.name}</h3>
      <p className=''>{data?.longdescription? data.longdescription: '' }</p>
      </div>
    
      <div className="container">
        <div className="row py-5">
          <div className="col-12">
            <img src={data.img} alt="" className='details-img' style={{  borderRadius: '10px' }} />
          </div>
          <div className="col-12 py-5">
           
           <h3>Description</h3>
            <p>{data.sortdescription? data.sortdescription : '' }</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div style={{ overflowX: 'auto' }}>
        <table className="table border">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Vendor Name</th>
      <th scope="col">Capacity</th>
      <th scope="col">Average Delivery time</th>
      <th scope="col" className=''>Contact</th>
    </tr>
  </thead>
  <tbody>
    {data?.table?.map((row, index) => (
        <tr key={row.id} className={index > 2 ? 'blur' : ''}>
        {/* <th scope="row">{row.id}</th> */}
        <td>{index+1}</td>
        <td>{row.vendorName}</td>
        <td>{row.capacity}</td>
        <td>{row.averageDeliveryTime}</td>
        <td className='blur'>{row.contact}</td>
      </tr>
    ))}
  </tbody>
</table>
        </div>
  
      
      </div>
      <div>

     <div className='text-center py-5'>
     <NavLink to="/contact" target="_blank" rel="noopener noreferrer">
        <button type="button" className="btn btn-primary btn-lg">Get Quotation</button>
</NavLink>
     </div>

      </div>
      <Footer></Footer>
    </div>
  );
}

export default MapDetails;