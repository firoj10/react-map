
import logo from './../../public/logo11.png'
import "./map.css";
const Footer = () => {
  return (
    <div className=" mx-auto py-5" >
      <div className='container'>
      <div className="row footers justify-content-between text-center">
        <div className='col-12 col-md-4  pt-4'>
          <div className='text-center'>
        
          <a href="/" className="">
            <img alt="logo" src={logo} width="80px" />
            {/* <span className="ms-3 h5 font-weight-bold">Devwares</span> */}
          </a>
          <div><p> Discover Earths treasures with our Geographic Navigator, guiding you through diverse landscapes, cultures, and wonders.   </p></div>
          </div>
          </div>
        <div className='col-12 col-md-4  pt-4'>
        <p className="h5 " style={{ fontWeight: '600' }}>
         
          Contact
          </p>
          <div style={{ cursor: 'pointer', padding: '0' }}>
         
            <div><a href="">+8801521464646</a></div>
            <div><a href=""> support@bengalgi.com  </a></div>
          </div>
        </div>
        <div className='col-12 col-md-4  pt-4'>
          <p className="h5 " style={{ fontWeight: '600' }}>
         Others
          </p>
          <div style={{ cursor: 'pointer', padding: '0' }}>
            <div> <a href="">About Us</a></div>
            <div> <a href=""> Privacy Policy</a></div>
            <div> <a href="">Terms & Condition</a></div>
           
          </div>
        </div>
       
      </div>
      <div className="text-center mt-5">&copy; BengalGI , 2024. All rights reserved.</div>
      </div>
    </div>
  );
}

export default Footer;
