import { useLoaderData } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import './BlogPage.css'

function BlogPage() {
   
    const data = useLoaderData();
    return (
      <div>
      
        <Header></Header>
      <div className=" py-3 text-center" style={{backgroundColor:'white', color:'Black'}}><h1 className="container mb-0">{data.name}</h1></div>
      <div className='container pt-4'>
      <h3 className="text-center py-2"> {data.title}</h3>
      <img src={data.image} alt="" className='details-img' style={{  borderRadius: '10px' }} />
      <div className="py-4">
      <h3>{data?.content? data.content: '' }</h3>
      
      <p className='pt-2'>{data?.sortContent? data.sortContent: '' }</p>
      </div>
      </div>
    
      <div className="container">
        <div className="row py-2">
          <div className="col-12 ">
            <img src={data.thumbnail} alt="" className='details-img' style={{  borderRadius: '10px' }} />
          </div>
          <div className="col-12  py-2">
           
          <h3>{data.title}</h3>
       
            <p className="fs-6">{data.longContent? data.longContent : '' }</p>
          </div>
        </div>
      </div>
     
      <div>

 

      </div>
      <Footer></Footer>
    </div>
      
    );
}

export default BlogPage;