
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Aboutus from "../../components/mainpage/Aboutus";
import Blog from "../../components/mainpage/Blog";
import MapSection from "../../components/mainpage/MapSection";
import ProductBox from "../../components/mainpage/ProductBox";
import Service from "../../components/mainpage/Service";
import Slider from "../../components/mainpage/Slider";

const Main = () => {
  return (
    <div className="shadow mx-auto " >
      <Header></Header>
      <Slider></Slider>
      <Aboutus></Aboutus>
      <Service></Service>
      <ProductBox></ProductBox>
      <Blog></Blog>
      <MapSection></MapSection>
      <Footer></Footer>
    </div>
  );
}

export default Main;
