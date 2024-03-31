
import { Link, NavLink, useLoaderData,  } from 'react-router-dom';
import Header from '../components/Header';
import Content from '../components/content/Content';
import Slider from '../components/slider/Slider';
// import img from './../../public/slider/s1.jpg'

import './MapDetails.css'
import Footer from '../components/Footer';

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
    { id: 1, Vendor: 'FreshFruit Suppliers', Capacity: '500 kg', Deliverytime: '2 days', Contact: '+8801XXXXXXXXX', disabled: false },
    { id: 2, Vendor: 'Tropical Harvests Ltd.', Capacity: '700 kg',Deliverytime: '3 days', Contact: '+8801XXXXXXXXX', disabled: false },
    { id: 3, Vendor: 'Mango Mania Farms', Capacity: '400 kg', Deliverytime: '1 day', Contact: '+8801XXXXXXXXX', disabled: false },
    { id: 4, Vendor: 'Golden Orchard', Capacity: '600 kg', Deliverytime: '2 days', Contact: '+8801XXXXXXXXX', disabled: false },
    { id: 5, Vendor: 'Sweet Harvest Farms', Capacity: '550 kg', Deliverytime: '2 days', Contact: '+8801XXXXXXXXX', disabled: false },
    { id: 6, Vendor: 'Green Haven Agro', Capacity: '450 kg', Deliverytime: '1 day', Contact: '+8801XXXXXXXXX', disabled: false },
    { id: 7, Vendor: "Nature's Bounty", Capacity: '800 kg', Deliverytime: '3 days', Contact: '+8801XXXXXXXXX', disabled: false },
    { id: 8, Vendor: 'Fruitful Harvest Co.', Capacity: '500 kg', Deliverytime: '2 days', Contact: '+8801XXXXXXXXX', disabled: false },
    { id: 9, Vendor: 'Sunrise Orchards', Capacity: '650 kg', Deliverytime: '3 days', Contact: '+8801XXXXXXXXX', disabled: false },
    { id: 10, Vendor: 'Mango Delight Farms', Capacity: '700 kg', Deliverytime: '2 days', Contact: '+8801XXXXXXXXX', disabled: false }
  ];


  return (
    <div>
      <Header></Header>
      <div className=" py-2" style={{backgroundColor:'blue', color:'#fff'}}><h1 className="container mb-0">{data.name}</h1></div>
      <Slider key={data.id}  data={data }></Slider>
   
      {/* <Content></Content> */}
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
           
           <h3>Description Title</h3>
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
    {initialData.map((row, index) => (
        <tr key={row.id} className={index > 2 ? 'blur' : ''}>
        <th scope="row">{row.id}</th>
        <td>{row.Vendor}</td>
        <td>{row.Capacity}</td>
        <td>{row.Deliverytime}</td>
        <td className='blur'>{row.Contact}</td>
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