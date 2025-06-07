import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Logo from './Xia_Logo.jpg';
import Service from './Service';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  const [activeTab, setActiveTab] = useState('t_Home');

  //Active the openTab
  const openTab = (evt, tabName) => {
    setActiveTab(tabName);
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
            <h1>Golden 1 Thai Massage</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-s">
            <h6>###-###-#####</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-s">
            <p>1834 Wirt Road, Houston , Texas 77055</p>
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
        {/* Directed to the Home Page */}
        <Home />
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
          src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3462.075486732359!2d-95.48690422423881!3d29.804363475045328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c42f6f5eb1c5%3A0xdc618075b222bb4f!2s1834%20Wirt%20Rd%2C%20Houston%2C%20TX%2077055!5e0!3m2!1sen!2sus!4v1746315219883!5m2!1sen!2sus"
          width="100%"
          height="450"
          frameBorder="0"
          allowFullScreen
          style={{ border: 0 }} // Use an object for inline styles
        ></iframe>
        {/* The Contact Information */}
        <p>Contact us at 281-302-5114 or visit us at 1834 Wirt Rd, Houston, TX 77055.</p>
      </div>
    </div>
  );
}

export default App;
