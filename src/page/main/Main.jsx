
import Aboutus from "../../components/mainpage/Aboutus";
import Blog from "../../components/mainpage/Blog";
import MapSection from "../../components/mainpage/MapSection";
import ProductBox from "../../components/mainpage/ProductBox";
import Service from "../../components/mainpage/Service";
import Slider from "../../components/mainpage/Slider";

const Main = () => {
  return (
    <div className="shadow mx-auto py-5" >
      
      <Slider></Slider>
      <Aboutus></Aboutus>
      <Service></Service>
      <MapSection></MapSection>
      <ProductBox></ProductBox>
      <Blog></Blog>
    </div>
  );
}

export default Main;
