import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ProductBox() {
    const [locations, setLocations] = useState(null);
    const [showAll, setShowAll] = useState(false); // State to track if all products should be shown
    const [visibleProducts, setVisibleProducts] = useState(8); // State to track number of visible products

    useEffect(() => {
        fetch('./location.json')
            .then((res) => res.json())
            .then((data) => {
                setLocations(data);
            });
    }, []);

    const handleViewAll = () => {
        setShowAll(true); 
    };

    const handleShowLess = () => {
        setShowAll(false); 
    };


    return (
        <div>
            <section  className="wrapper pt-5 ">
                <div className="container-fostrap">
                    <div className='container'>   
                        <div className="row pb-0">
                            <div className="col-md-12">                        
                                <h1 className="text-center heading">ALL PRODUCTS</h1>
                                <p className='text-center'>Discover Bangladesh's Finest: Shop Authentic GI Products Online</p>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="container">
                            <div className="row">
                               
                               {locations && locations.slice(0, showAll ? locations.length : visibleProducts).map((location, index) => (
                                    <div key={index}  className="col-12 col-md-4 col-lg-3 my-4">
                                        <div  className="card p-2 border-0">
                                            <a className="img-card" href="#">
                                                <img className='img-fluid rounded' style={{height: '250px', width:'100%'}} src={location.img} alt={location.name} />
                                            </a>
                                            <div className="card-content text-center">
                                                <h4 className='py-2'>{location.name}</h4>
                                                <div>
                                                    <i className='fa-fa-star'></i>
                                                </div>
                                                <div className="card-read-more">
                                            <Link className=''   style={{fontWeight:'bold', color:" black",  }}  to={`/mapDetails/${location.id}`}>View Details</Link>
                                            </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                ))}
                              
                            </div>
                            {!showAll && locations && locations.length > visibleProducts && (
                                <div className="text-center pb-5 fw-bold">
                                    <button className="btn btn-primary" onClick={handleViewAll}>
                                        View All  Products
                                    </button>
                                </div>
                            )}
                            {showAll && (
                                <div className="text-center pb-5">
                                    <button className="btn btn-primary" onClick={handleShowLess}>
                                        Show Less
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ProductBox;
