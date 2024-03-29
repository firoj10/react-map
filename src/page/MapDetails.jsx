
import { Link, NavLink, useLoaderData,  } from 'react-router-dom';
import Header from '../components/Header';
import Content from '../components/content/Content';
import Slider from '../components/slider/Slider';
import img from './../../public/slider/s1.jpg'

import './MapDetails.css'

function MapDetails() {
  // const [locatio, setlocatio] = useState(null);

  const data = useLoaderData();
  console.log(data);

  // Now you can use params.id to fetch data or perform other operations
  // Make sure to handle loading, error, and data states

  // useEffect(() => {
  //   fetch(`location.json/${id}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //     })
  //     .catch(error => {
  //       // Handle errors
  //     });
  // }, [id]);


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
      <Slider key={data.id}  data={data }></Slider>
        <div className="container pt-3"><h1>Gi Products</h1>  <h2></h2></div>
      {/* <Content></Content> */}
      <div className='container'>
      <p>{data.sortdescription? data.sortdescription : '' }</p>
      </div>
    
      <div className="container">
        <div className="row py-5">
          <div className="col-12">
            <img src={img} alt="" style={{ width: "100%", borderRadius: '10px' }} />
          </div>
          <div className="col-12 py-5">
            <h3>{data.name}</h3>
           
            <p>{data?.longdescription? data.longdescription: '' }</p>
          </div>
        </div>
      </div>
      <div className="container">
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
        <button type="button" className="btn btn-primary btn-lg">Get Quotation</button>
</NavLink>
     </div>

      </div>
    </div>
  );
}

export default MapDetails;