
import logo from './../../public/logo11.png'
import "./map.css";
const Footer = () => {
  return (
    <div className="shadow mx-auto py-5" >
      <div className='container'>
      <div className="row justify-content-between text-center">
        <div className='col-12 col-md-3 col-lg-3 pt-4'>
          <div className='text-center'>
        
          <a href="/" className="">
            <img alt="logo" src={logo} width="80px" />
            {/* <span className="ms-3 h5 font-weight-bold">Devwares</span> */}
          </a>
          <div><p> Discover Earths treasures with our Geographic Navigator, guiding you through diverse landscapes, cultures, and wonders.   </p></div>
          </div>
          </div>
        <div className='col-12 col-md-3 col-lg-3 pt-4'>
        <p className="h5 " style={{ fontWeight: '600' }}>
         
          Contact
          </p>
          <div style={{ cursor: 'pointer', padding: '0' }}>
            <div><a href=""> Resources  </a></div>
            <div><a href=""> About Us  </a></div>
            <div><a href=""> Contact  </a></div>
            <div><a href=""> Blog  </a></div>
          </div>
        </div>
        <div className='col-12 col-md-3 col-lg-3 pt-4'>
          <p className="h5 " style={{ fontWeight: '600' }}>
          Privacy Policy
          </p>
          <div style={{ cursor: 'pointer', padding: '0' }}>
            <div> <a href="">Support</a></div>
            <div> <a href="">Customers</a></div>
            <div> <a href="">Careers</a> </div>
          </div>
        </div>
        <div className='col-12 col-md-3 col-lg-3 pt-4'>
          <p className="h5 " style={{ fontWeight: '600' }}>
          Licensing
          </p>
          <div style={{ cursor: 'pointer', padding: '0' }}>
        
            <div><a href="">Windframe</a></div>
            <div><a href="">Loop</a></div>
            <div><a href="">Contrast</a></div>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">&copy; BengalGI , 2024. All rights reserved.</div>
      </div>
    </div>
  );
}

export default Footer;
