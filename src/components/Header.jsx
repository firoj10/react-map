import logo from './../../public/b.png'

import "./map.css";
function Header() {
  return (
    <div className="header "  >
        <div className="card" style={{backgroundColor: "#090909",  border: 'none', borderRadius: '0px'}}>
          <div className="" style={{ alignItems: 'center' }}>
            <div className="" style={{ alignItems: 'center' }}>
              <img src={logo} alt="" width={180} height={80} />
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