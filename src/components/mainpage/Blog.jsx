
import { useEffect, useState } from "react";
import "./Blog.css";
import { Link } from "react-router-dom";

function Blog() {
  const [blogs, setblogs] = useState(null);

//focus page useeffect
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
              <div key={index} className="col-md-6 item px-4  ">
                <div>
                  <img className="rounded blog-img card__one" src={item.image}  alt="" />
                </div>
                <div className="">
                  <h5 className="py-1">{item.title}</h5>
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
