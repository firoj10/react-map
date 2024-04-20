
import { useState } from "react";
import "./Blog.css";

function Blog() {
  const blogItems = [
    {
      title: " Bangladeshs First GI Product",
      content: "Amid the rhythm of weaving looms, a piece of Bangladeshs soul is interwoven with every thread of Jamdani sarees. This fine textile,",
      additionalContent:
        ' celebrated for its intricate designs and ethereal quality, marked a milestone as it received the country’s first geographical indication (GI) product certification. The recognition was ceremoniously handed to the Bangladesh Small and Cottage Industries Corporation by Industries Minister Amir Hossain Amu, safeguarding the legacy of this cultural marvel.',
    },
    
    {
      title: "Jamdani's Rich Tapestry of History",
      content: 'Tracing its origins back to the Mughal era, Jamdani is a testament to the artistic excellence of Bangladeshi weavers. Once known as Dhakai Muslin',
      additionalContent:
        ' , this prestigious fabric adorned royalty and nobility, renowned worldwide for its lightness and high-quality craftsmanship. The term Jamdani itself, of Persian descent, alludes to the decorative floral imagery reminiscent of delicate blossoms in a vase.',
    },
    {
      title: " A Contemporary Snapshot",
      content: "Today, the Jamdani saree represents not only Bangladesh's  artistic heritage but also a significant segment of its textile industry.",
      additionalContent:
        " Despite modernization, the market has held fast to its roots, with weavers meticulously crafting each saree as a piece of wearable art. However, the industry faces the dual challenges of preserving traditional techniques while catering to the evolving tastes of the global market.",
    },
    {
      title: " The SME Perspective",
      content: "Small and medium-sized enterprises (SMEs), the backbone of Jamdani production grapple with obstacles ranging from limited access to raw",

      additionalContent:
        " materials to the intricacies of intellectual property rights. Despite these hurdles, the GI certification serves as a beacon of hope, promising to establish the rights of artisans and safeguard the integrity of this age-old art form. ",
    },
  ];


  const [showMore, setShowMore] = useState({});


  const toggleShowMore = (index) => {
    setShowMore((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  return (
    <>
      <div>
        <section className="title container">
          <div className="row">
            <div className="col-md-12">
              {/* <h1>Blog Layout</h1> */}
              <h1 className=" text-center heading">Blog </h1>
            </div>
          </div>
        </section>
        <div className="container">
        <div className="row">
          {blogItems.map((item, index) => (
            <div key={index} className="col-md-6 item">
              <div className="item-in">
                <h3>{item.title}</h3>
                <div className="seperator"></div>
                <p>
                  {item.content}
                  {showMore[index] && <>{item.additionalContent}</>}
                </p>
                <p
                  className="fw-bold"
                  onClick={() => toggleShowMore(index)}
                  style={{ cursor: 'pointer' }}
                >
                  {showMore[index] ? 'See Less' : 'See More'}
                </p>
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
