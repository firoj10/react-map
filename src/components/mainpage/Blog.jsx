
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
          <div className="row justify-content-between">
            {blogs && blogs.slice(0, 4).map((item, index) => (
              <div key={index} className="col-md-6 item px-4">
                <div>
                  <img className="rounded" src={item.image} style={{ width: '100%', height: '250px' }} alt="" />
                </div>
                <div className="">
                  <h4>{item.title}</h4>
                  <div className="seperator"></div>
                  <p style={{ textAlign: "justify" }}>{item.content}</p>

                  <Link style={{ fontWeight: 'bold', color: "black" }} to={`/blogpage/${item.id}`}>
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
