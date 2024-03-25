
import { Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import Content from '../components/content/Content';
import Slider from '../components/slider/Slider';
import img from './../../public/slider/s1.jpg'
import { useState } from 'react';
import './MapDetails.css'

function MapDetails() {
  const initialData = [
    { id: 1, firstName: 'Mark', lastName: 'Otto', handle: '@mdo', contact: '@mdo', disabled: false },
    { id: 2, firstName: 'Jacob', lastName: 'Thornton', handle: '@fat', contact: '@fat', disabled: false },
    { id: 3, firstName: 'Larry', lastName: 'the Bird', handle: '@twitter', contact: '@twitter', disabled: false },
    { id: 4, firstName: 'Mark', lastName: 'Otto', handle: '@mdo', contact: '@mdo', disabled: false },
    { id: 5, firstName: 'Jacob', lastName: 'Thornton', handle: '@fat', contact: '@fat', disabled: false },
    { id: 6, firstName: 'Larry', lastName: 'the Bird', handle: '@twitter', contact: '@twitter', disabled: false }
  ];


  return (
    <div>
      <Header></Header>
      <Slider></Slider>
        <div className="container pt-3"><h1>Gi Products</h1></div>
      <Content></Content>
    
      <div className="container">
        <div className="row py-5">
          <div className="col-12">
            <img src={img} alt="" style={{ width: "100%", borderRadius: '10px' }} />
          </div>
          <div className="col-12 py-5">
            <h3 >Content Section 2</h3>
            <p> magni ullam a vel natus pariatur dolorem repellat dolorum eligendi cumque in adipisci repellendus possimus incidunt
              praesentium, perferendis odit iure iusto quas impedit dolore? Sunt officiis voluptatum earum necessitatibus iste
              perferendis aut aliquam provident, nulla neque harum temporibus repellat ducimus tempore maiores, dicta vitae!
              Magnam saepe distinctio nisi quos minus quas, eaque officiis natus ut veniam fugiat culpa animi. Architecto,
              perspiciatis! Cumque commodi inventore quas officia laboriosam. Adipisci eveniet temporibus corrupti possimus
              exercitationem. Nobis perferendis quisquam obcaecati est possimus tenetur aliquid commodi saepe quod, sit neque
              dolor optio sequi, cumque reprehenderit consectetur minima dignissimos nihil eaque placeat quaerat dolorem. Explicabo
              repellendus molestias optio reprehenderit. Rerum voluptates numquam repellendus sunt vel error reprehenderit recusandae

              doloremque quidem quos molestias quo quisquam!</p>
          </div>
        </div>
      </div>
      <div className="container">
      <table className="table border">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th scope="col" className=''>Contact</th>
    </tr>
  </thead>
  <tbody>
    {initialData.map((row, index) => (
        <tr key={row.id} className={index > 2 ? 'blur' : ''}>
        <th scope="row">{row.id}</th>
        <td>{row.firstName}</td>
        <td>{row.lastName}</td>
        <td>{row.handle}</td>
        <td className='blur'>{row.contact}</td>
      </tr>
    ))}
  </tbody>
</table>
      
      </div>
      <div>

     <div className='text-center py-5'>
     <NavLink to="/contact" target="_blank" rel="noopener noreferrer">
        <button type="button" className="btn btn-primary btn-lg">Get a Code</button>
</NavLink>
     </div>

      </div>
    </div>
  );
}

export default MapDetails;