import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Logo from './Xia_Logo.jpg';
import img1 from './img1_massage.jpg';
import img2 from './img2_massage.jpg';
import img3 from './image3_massage.jpg';
import Service from './Service';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  const [activeTab, setActiveTab] = useState('t_Home');

  //Active the openTab
  const openTab = (evt, tabName) => {
    setActiveTab(tabName);
  };

  //The slide show of the picture for the home page
  const [activeSlide, setActiveSlide] = useState(0);
  const images = [img1, img2, img3]; // Assuming img1, img2, img3 are imported images

  const goToPreviousSlide = () => {
    setActiveSlide(activeSlide === 0 ? images.length - 1 : activeSlide - 1);
  };

  const goToNextSlide = () => {
    setActiveSlide(activeSlide === images.length - 1 ? 0 : activeSlide + 1);
  };

  return (
    <div className="App">

      {/* This is the Home page Info with Logo/Name/Address */}
      <div className="container_Home_Info">
        <div className="row">
          <div className="col-s">
            <img className="Xia_Logo" src={Logo} style={{ width: '50px', height: '50px' }} alt="logo" />
          </div>
        </div>
        <div className="row">
          <div className="col-s">
            <h1>Xia's Massage</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-s">
            <h6>281-302-5114</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-s">
            <p>1914 Wescott Ave suit 130, Sugar Land, TX 77479</p>
          </div>
        </div>
      </div>
 

     {/* This is where the user click the tap Home/Service/Book/Contact */}
      <div className="col-m">
        <div className="tab">
          <button className={`tablinks ${activeTab === 't_Home' ? 'active' : ''}`} onClick={(event) => openTab(event, 't_Home')}>Home</button>
          <button className={`tablinks ${activeTab === 't_Service' ? 'active' : ''}`} onClick={(event) => openTab(event, 't_Service')}>Service</button>
          <button className={`tablinks ${activeTab === 't_book' ? 'active' : ''}`} onClick={(event) => openTab(event, 't_book')}>Book Online</button>
          <button className={`tablinks ${activeTab === 't_contact' ? 'active' : ''}`} onClick={(event) => openTab(event, 't_contact')}>Contact Us</button>
        </div>
      </div>

      <div id="t_Home" className="tabcontent" style={{ display: activeTab === 't_Home' ? 'block' : 'none' }}>
        {/* This will be how home page looks like */}
        {/* Perphas make a individual js file later */}
        <h2>Home Page</h2>
        <p>Welcome to Xia's Massage Home Page.</p>

       {/* This is where doing the slide of images */}
        <div id="carouselExampleControls1" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            {/* Maps the index with images */}
            {images.map((image, index) => (
              <div className={`carousel-item ${index === activeSlide ? 'active' : ''}`} key={index}>
                <img className="d-block w-100" src={image} alt={`Slide ${index}`} />
              </div>
            ))}
            <a className="carousel-control-prev" href="#carouselExampleControls1" role="button" data-slide="prev" onClick={goToPreviousSlide}>
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls1" role="button" data-slide="next" onClick={goToNextSlide}>
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              {/* The user click Next then go to the next images  */}
              <span className="sr-only">Next</span>
            </a>
          </div>

        </div>




      </div>
      <div id="t_Service" className="tabcontent" style={{ display: activeTab === 't_Service' ? 'block' : 'none' }}>
        {/* This direct the user to the Service.js */}
        <Service />
      </div>
      <div id="t_book" className="tabcontent" style={{ display: activeTab === 't_book' ? 'block' : 'none' }}>
      {/* This is the booking page, NEED TO do it in individual js file */}
        <h2>Book Online</h2>
        <p>Here you can book your appointment online.</p>
      </div>
      <div id="t_contact" className="tabcontent" style={{ display: activeTab === 't_contact' ? 'block' : 'none' }}>
        {/* This is the Contact Page, this page is done */}
        <h2>Contact Us</h2>
        {/* Below code will output the direction of the google map to the store */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3469.5975541976813!2d-95.64857542436097!3d29.586310740131516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640e169dbe097b3%3A0x7f41080021e7a752!2sXia&#39;s%20Massage!5e0!3m2!1sen!2sus!4v1716662551352!5m2!1sen!2sus"
          width="100%"
          height="450"
          frameBorder="0"
          allowFullScreen
          style={{ border: 0 }} // Use an object for inline styles
        ></iframe>
        {/* The Contact Information */}
        <p>Contact us at 281-302-5114 or visit us at 1914 Wescott Ave suit 130, Sugar Land, TX 77479.</p>
      </div>
    </div>
  );
}

export default App;
