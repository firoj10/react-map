import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from './../../public/logo11.png'

const Footer = () => {
  return (
    <div className="shadow mx-auto py-5" >
      <div className='container'>
      <div className="d-flex justify-content-between flex-wrap">
        <div>
          <a href="/" className="d-flex align-items-center p-0 text-dark">
            <img alt="logo" src={logo} width="80px" />
            {/* <span className="ms-3 h5 font-weight-bold">Devwares</span> */}
          </a>
          
          <div className="mt-4">
            <button className="btn btn-dark me-3">
              <FaFacebookF />
            </button>
            <button className="btn btn-dark me-3">
              <FaTwitter />
            </button>
            <button className="btn btn-dark">
              <FaInstagram />
            </button>
          </div>
        </div>
        <div>
       



          <p className="h5 mb-4" style={{ fontWeight: '600' }}>
         
          Contact
          </p>
          <div style={{ cursor: 'pointer', padding: '0' }}>
            <divLink href="/">Resources</divLink>
            <divLink href="/">About Us</divLink>
            <divLink href="/">Contact</divLink>
            <divLink href="/">Blog</divLink>
          </div>
        </div>
        <div>
          <p className="h5 mb-4" style={{ fontWeight: '600' }}>
          Privacy Policy
          </p>
          <div style={{ cursor: 'pointer', padding: '0' }}>
            <divLink href="/">Support</divLink>
            <divLink href="/">Sign Up</divLink>
            <divLink href="/">Sign In</divLink>
          </div>
        </div>
        <div>
          <p className="h5 mb-4" style={{ fontWeight: '600' }}>
          Licensing
          </p>
          <div style={{ cursor: 'pointer', padding: '0' }}>
            <divLink href="/">Windframe</divLink>
            <divLink href="/">Loop</divLink>
            <divLink href="/">Contrast</divLink>
          </div>
        </div>
      </div>
      <small className="text-center mt-5">&copy; Devwares, 2020. All rights reserved.</small>
      </div>
    </div>
  );
}

export default Footer;
