import './Home.css';
import React, { useState, useEffect } from 'react';
import img1 from './img1_massage.jpg';
import img2 from './img2_massage.jpg';
import img3 from './image3_massage.jpg';
import google from './google_2.jpg';
import yelp from './yelp.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import aroma from './aromatherapy_massage.jpg';
import hot from './hostone_massage.jpg';
import thai from './thai_massage.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Home() {
    const [activeSlide, setActiveSlide] = useState(0);
    const images = [img1, img2, img3];

    const goToPreviousSlide = () => {
        setActiveSlide(activeSlide === 0 ? images.length - 1 : activeSlide - 1);
    };

    const goToNextSlide = () => {
        setActiveSlide(activeSlide === images.length - 1 ? 0 : activeSlide + 1);
    };

    useEffect(() => {
        const interval = setInterval(goToNextSlide, 3000);
        return () => clearInterval(interval);
    }, [activeSlide]);

    const handleGoogleReviewClick = () => {
        const googleReviewURL = "https://www.google.com/search?q=xia%27s+massage&oq=xia%27s+massage&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyEAgBEC4YrwEYxwEYgAQYjgUyBggCEEUYQDIGCAMQRRg7MgcIBBAAGIAEMggIBRAAGBYYHjIGCAYQRRg8MgYIBxBFGDzSAQgyMjU3ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x8640e169dbe097b3:0x7f41080021e7a752,1,,,,";
        window.open(googleReviewURL, '_blank');
    };

    const handleYelpReviewClick = () => {
        const yelpReviewURL = "https://www.yelp.com/writeareview/biz/EydqqeA0Ics9zP8p7tjIug?return_url=%2Fbiz%2FEydqqeA0Ics9zP8p7tjIug&review_origin=biz-details-war-button";
        window.open(yelpReviewURL, '_blank');
    }

    return (
        <div className="home-container">
            {/* The Section Title */}
            <h2 className="section-title">Home Page</h2>

            <div id="carouselExampleControls1" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    {images.map((image, index) => (
                        <div className={`carousel-item ${index === activeSlide ? 'active' : ''}`} key={index}>
                            <img className="d-block w-100" src={image} alt={`Slide ${index}`} style={{ maxWidth: '100%', maxHeight: '260px' }} />
                        </div>
                    ))}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls1" role="button" data-slide="prev" onClick={goToPreviousSlide}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls1" role="button" data-slide="next" onClick={goToNextSlide}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </a>
            </div>

            {/* Explain the service */}
            <div className="row align-items-center">
                <h2 className="service">Our Service</h2>
                <div className="col">
                <img src={thai} alt="Thai massage pic" class="massage-pic" />
                    <p className = "text">Thai Massage</p>

                </div>

                <div className="col">
                <img src={aroma} alt="Aroma Therapy pic" class="massage-pic" />
                    <p className = "text">Aromatherapy Massage</p>

                </div>

                <div className="col">
                <img src = {hot} alt = "Hotstone massage pic" class = "massage-pic" />
                    <p className = "text">Hotstone Massage</p>

                </div>


            </div>


            {/* The locations and Hours */}
            <div className="row">
                <div className="col">
                    <div className="row">
                        <h2>Locations & Hours</h2>
                    </div>
                    <div className="row">
                        <div className="col">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3469.5975541976813!2d-95.64857542436097!3d29.586310740131516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640e169dbe097b3%3A0x7f41080021e7a752!2sXia&#39;s%20Massage!5e0!3m2!1sen!2sus!4v1716662551352!5m2!1sen!2sus"
                                width="100%"
                                height="300"
                                frameBorder="0"
                                allowFullScreen
                                style={{ border: 0 }} // Use an object for inline styles
                            ></iframe>

                            <p>1914 Wescott Ave suit 130, Sugar Land, TX 77479<br />Contact: 281-302-5114</p>
                        </div>

                    </div>
                </div>
                {/* The table align to the center and output the open day and hours */}
                <div className="col d-flex justify-content-center">

                    <table className="table">
                        <thead>
                            <tr>
                                <th>Day</th>
                                <th>Opening Time</th>
                                <th>Closing Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Monday</td>
                                <td>9:00 AM</td>
                                <td>10:00 PM</td>
                            </tr>
                            <tr>
                                <td>Tuesday</td>
                                <td>9:00 AM</td>
                                <td>10:00 PM</td>
                            </tr>
                            <tr>
                                <td>Wednesday</td>
                                <td>9:00 AM</td>
                                <td>10:00 PM</td>
                            </tr>
                            <tr>
                                <td>Thursday</td>
                                <td>9:00 AM</td>
                                <td>10:00 PM</td>
                            </tr>
                            <tr>
                                <td>Friday</td>
                                <td>9:00 AM</td>
                                <td>10:00 PM</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>




            <div className="review-section">
                {/* This section is where the user clicks the button and is able to see the user review */}
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <img src={google} alt="Google icon" className="review-icon" />
                    </div>
                    <div className="col review-content">
                        <h2 className="Reviews"> Google Reviews</h2>
                        <a href="#" onClick={handleGoogleReviewClick} target="_blank" rel="noopener noreferrer">
                            <button className="review-button">
                                Reviews
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            <div className="review-section">
                {/* This section is where the user clicks the Yelp button and is able to comment on Yelp */}
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <img src={yelp} alt="Yelp icon" className="review-icon" />
                    </div>
                    <div className="col review-content">
                        <h2 className="Reviews"> Yelp Reviews</h2>
                        <a href="#" onClick={handleYelpReviewClick} target="_blank" rel="noopener noreferrer">
                            <button className="review-button">
                                Reviews
                            </button>
                        </a>
                    </div>
                </div>
            </div>










        </div>
    );
}

export default Home;



