import { Link } from 'react-router-dom';
import err from './../../public/err.png'

function ErrorPage() {
    return (
      <div className='text-center'>
<img className='py-5' src={err} alt=""  style={{height:'300px'}}/>
<div>
<Link to='/' className='btn bg-success text-light'>
             Back to homepage
           </Link>
</div>
     </div>
    );
  }
  
  export default ErrorPage;