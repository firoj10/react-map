
import { NavLink, } from 'react-router-dom';
import img_1 from './../../../public/slider/gi-bg.jpg'
import img_2 from './../../../public/slider/gi-bg1.jpg'
import img_4 from './../../../public/slider/gi-bg4.jpg'
import img_3 from './../../../public/slider/gi-bg3.jpg'

import Header from '../../components/Header';

import Footer from '../../components/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Home.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';

function Home() {
    const [locations, setlocations] = useState(null);

    useEffect(() => {
        fetch('./location.json')
            .then((res) => res.json())
            .then((data) => {
                setlocations(data);
            });
    }, []);

    return (
        <div>
            <Header></Header>
           
            <div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}

                    modules={[Autoplay, Pagination, Navigation]}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}

                    className="mySwiper"
                >
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                    
                    <SwiperSlide data-hash="slide2" className=''><img src={img_2 ? img_2 : ''} alt="" /></SwiperSlide>
                    <SwiperSlide data-hash="slide1" className=''><img src={img_1 ? img_1 : ''} alt="" /></SwiperSlide>
                    <SwiperSlide data-hash="slide3" className=''><img src={img_3 ? img_3 : ''} alt="" /></SwiperSlide>
                    <SwiperSlide data-hash="slide2" className=''><img src={img_4 ? img_4 : ''} alt="" /></SwiperSlide>
                  


                </Swiper>
            </div>
            <div className='container py-5'>
            <div className="gi-content">
                <h4>What Is Gi Products</h4>
                <p>A geographical indication (GI) is a name or sign used on products which corresponds to a specific geographical location or origin (e.g., a town or region) The use of a geographical indication, as an indication of the product's source, is intended as a certification that the product possesses certain qualities, is made according to traditional methods, or enjoys a good reputation due to its geographical origin.Article 22.1 of the TRIPS Agreement defines geographical indications as ndications which identify a good as originating in the territory of a Member [of the World Trade Organization], or a region or locality in that territory, where a given quality, reputation or other characteristic of the good is essentially attributable to its geographical origin. contrôlée (Appellation of origin) is a sub-type of geographical indication where quality, method, and reputation of a product originate from a strictly defined area specified in its intellectual property right registration.</p>
                    <h4>History</h4>
                    <p>Governments have protected trade names and trademarks of food products identified with a particular region since at least the end of the 19th century, using laws against false trade descriptions or passing off, which generally protects against suggestions that a product has a certain origin, quality, or association when it does not. In such cases, the limitation on competitive freedoms which results from the grant of a monopoly of use over a geographical indication is justified by governments either by consumer protection benefits or by producer protection benefits.One of the first GI systems is the one used in France from the early part of the 20th century known as appellation . Items that meet geographical origin and quality standards may be endorsed with a government-issued stamp which acts as official certification of the origins and standards of the product. Examples of products that have such appellations of origin include Gruyère cheese (from Switzerland) and many French wines. Champagnerparagraph  of the 1919 Treaty of Versailles, Germany was forbidden from using allied geographical indications on products, which in particular affected the German cognac and champagne industries, as the French considered the terms misleading references to places in France. Since then, the terms Weinbrand and Sekt have been used instead.[4]Geographical indications have long been associated with the concept of terroir and with Europe as an entity, where there is a tradition of associating certain food products with particular regions. Under European Union Law, the protected designation of origin framework which came into effect in 1992 regulates the following systems of geographical indications: Protected designation of origin (PDO), protected geographical indication (PGI), and Traditional Specialities Guaranteed Since 2006, European Union has required provisions in geographical indications in free trade agreements have required provisions</p>
           
            </div>
            <h4 className='py-3'>Gi Products List</h4>





           
                <table className="table table-striped table-hover border">
                    <thead className=''>
                        <tr>
                            <th className='table-top-title fs-6'>Geographical Features</th>
                            <th className='table-top-title fs-6'>District/Region</th>
                            <th className='table-top-title fs-6 text-end'>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {locations?.map((location, index) => (
                            <tr key={index}>
                                <td style={{ paddingLeft: '8px', textAlign: 'left' }}>
                                    <span className='table-title'>{location.name}</span>
                                </td>

                                <td style={{ paddingLeft: '8px', textAlign: 'left' }}>
                                    <span className='table-title'>{location.district}</span>
                                </td>
                                <td style={{ paddingRight: '8px', textAlign: 'right' }}>
                                    <span className='table-title'>

                                        <img src={location.img} style={{ width: "50px", height: '50px' }} alt="" />

                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


            <div className="container">
                <div style={{ overflowX: 'auto' }}>

                </div>
            </div>
            <div>
                <div className='text-center py-5'>
                    <NavLink to="/lefletmap" target="_blank" rel="noopener noreferrer">
                        <button type="button" className="btn btn-primary btn-lg">Map View</button>
                    </NavLink>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
}

export default Home;