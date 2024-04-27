import { Link } from 'react-router-dom';
import logo from './../../public/logo.jpg'

import "./map.css";
function Header() {
  return (
    <div className="header " style={{ backgroundColor: "#fff", }}  >
      <div className="card" style={{ backgroundColor: "#fff", border: 'none', borderRadius: '0px' }}>
        <div className="" style={{ alignItems: 'center' }}>
          <div className="" style={{ alignItems: 'center' }}>
            
            <Link to='/' >
            <img src={logo} className='logo py-2' alt=""  />
      </Link>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Header;