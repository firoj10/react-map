
import {  NavLink, useLoaderData, } from 'react-router-dom';
import Header from '../components/Header';

import Slider from '../components/slider/Slider';


import './MapDetails.css'
import Footer from '../components/Footer';
import { useEffect } from 'react';

function MapDetails() {


  const data = useLoaderData();



  // When the component mounts, or the page changes, scroll to the top to focus on the empty div
  useEffect(() => {
        
    window.scrollTo(0, 0);
}, []); 

  return (
    <div tabIndex="-1" autoFocus>
      <Header></Header>
      <div  tabIndex="-1" autoFocus  className=" py-4 text-center" style={{ backgroundColor: 'white', color: 'Black' }}><h1 className="container mb-0">{data.name}</h1></div>
      <Slider key={data.id} data={data}></Slider>
      <div className='container pt-4'>
        <h3>{data.name}</h3>
        <p className=''>{data?.material ? data.material : ''}</p>
      </div>

      <div className="container">
        <div className="row py-5 ">
          <div className="col-12 col-md-12 col-lg-6 py-4">
            <img src={data.img} alt="" className='details-img' style={{ borderRadius: '10px', height: '440px' }} />
          </div>
          <div className="col-12 col-md-12 col-lg-6 py-4 ">

            <p>{data.sortdescription ? data.longdescription : ''}</p>
          </div>
          <div className="col-12 col-md-12 col-lg-6 py-4">

            <p>{data.sortdescription ? data.sortdescription : ''}</p>
          </div>
          <div className="col-12 col-md-12 col-lg-6 py-4 ">


            <img src={data?.sliderimg?.img_1} alt="" className='details-img' style={{ borderRadius: '10px', height: '440px' }} />

          </div>
        </div>
      </div>
      <div className="container">
        <div style={{ overflowX: 'auto' }}>
          <table className="table border">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">COMPANY NAME</th>
                <th scope="col">PROPRIETOR NAME</th>
                <th scope="col">ORDER PROCESSING TIME</th>
                <th scope="col">LOCATION</th>
                <th scope="col" className=''>CONTACT</th>
              </tr>
            </thead>
            <tbody>
              {data?.table?.map((row, index) => (
                <tr key={row.id} className={index > 2 ? 'blur' : ''}>
                  {/* <th scope="row">{row.id}</th> */}
                  <td>{index + 1}</td>
                  <td>{row.vendorName}</td>
                  <td>{row.proprietor}</td>
                  <td>{row.averageDeliveryTime}</td>
                  <td>{row?.location}</td>
                  <td className='blur'>{row.contact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


      </div>
      <div>

        <div className='text-center py-5'>
          <NavLink to="/contact" rel="noopener noreferrer">
            <button type="button" className="btn btn-primary btn-lg">Get Quotation</button>
          </NavLink>
        </div>

      </div>
      <Footer></Footer>
    </div>
  );
}

export default MapDetails;