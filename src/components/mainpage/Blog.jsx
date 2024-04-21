
import { useEffect, useState } from "react";
import "./Blog.css";
import { Link } from "react-router-dom";

function Blog() {

  const [blogs, setblogs] = useState(null);
 

  useEffect(() => {
      fetch('./blog.json')
          .then((res) => res.json())
          .then((data) => {
              setblogs(data);
          });
  }, []);
  return (
    <>
      <div>
        <section className="title container py-4">
          <div className="row">
            <div className="col-md-12">
           
              <h1 className=" text-center heading">Blog </h1>
            </div>
          </div>
        </section>
        <div className="container">
        <div className="row">
          {blogs && blogs.slice(0, 2).map((item, index) => (
            <div key={index} className="col-md-6 item ">
              <div>
                <img className="rounded" src={item.image} style={{width:'90%', height: '250px'}} alt="" />
              </div>
              <div className="item-in">
                <h4>{item.title}</h4>
                <div className="seperator"></div>
                <p style={{ textAlign: "justify"}}>{item.content}</p>
               
                <Link   style={{fontWeight:'bold', color:"blue"}}  to={`/blogpage/${item.id}`}>
                                            View Details
               </Link>
              </div>
             
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
}
export default Blog;
