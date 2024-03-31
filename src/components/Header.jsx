import logo from './../../public/logo11.png'

import "./map.css";
function Header() {
  return (
    <div className="header " style={{ backgroundColor: "#fff", }}  >
      <div className="card" style={{ backgroundColor: "#fff", border: 'none', borderRadius: '0px' }}>
        <div className="" style={{ alignItems: 'center' }}>
          <div className="" style={{ alignItems: 'center' }}>
            <img src={logo} className='logo' alt=""  />
          </div>
          {/* <div className="col-12 col-md-9 " style={{ alignItems: 'center', textAlign: 'right', color: 'blue' }}>

              <h5 className='pe-2'>List of all directed geographical indicators in Bangladesh</h5>

            </div> */}
        </div>
      </div>
    </div>
  );
}

export default Header;