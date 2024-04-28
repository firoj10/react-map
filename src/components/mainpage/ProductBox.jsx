import React, { useState, useEffect } from 'react';
import { BiStar } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import "./ProductBox.css";

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
            <section className="wrapper pt-5 ">
                <div className="container-fostrap">
                    <div className='container'>
                        <div className="row pb-0">
                            <div className="col-md-12">
                                <h1 className="text-center heading mb-2">ALL PRODUCTS</h1>
                                <p className='text-center'>Discover Bangladesh's Finest: Shop Authentic GI Products Online</p>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="container">
                            <div className="row">

                                {locations && locations.slice(0, showAll ? locations.length : visibleProducts).map((location, index) => (
                                    <div key={index} className="col-12 col-md-4 col-lg-3 my-4">
                                        <div className="card p-2 card card__one card__three">
                                            <a className="img-card" href="#">
                                                <Link to={`/mapDetails/${location.id}`}> <img className='img-fluid rounded' style={{ height: '250px', width: '100%' }} src={location.img} alt={location.name} /></Link>
                                            </a>
                                            <div className="card-content py-3">
                                                <h4 className='mb-1'>{location.name}</h4>
                                                <div>
                                                    <p className="text-primary mb-0" style={{ fontSize: '20px', }}>
                                                        <span style={{ color: "orange" }}><BiStar /></span>
                                                        <span style={{ color: "orange" }}><BiStar /></span>
                                                        <span style={{ color: "orange" }}><BiStar /></span>

                                                    </p>
                                                </div>
                                                <div className="card-read-more  mt-3">

                                                    <Link className='px-3 py-2  rounded' style={{ color: "white", background: "#0b5ed7", textDecoration: "none" }} to={`/mapDetails/${location.id}`}>View Details</Link>
                                            </div>
                                            </div>

                                        </div>
                                    </div>
                                ))}

                            </div>
                            {!showAll && locations && locations.length > visibleProducts && (
                                <div className="text-center pb-2 fw-bold">
                                    <button className="btn btn-primary" onClick={handleViewAll}>
                                        View All  Products
                                    </button>
                                </div>
                            )}
                            {showAll && (
                                <div className="text-center pb-2">
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
