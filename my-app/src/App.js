import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Logo from './Xia_Logo.jpg';

function App() {


  // Function to open the selected tab
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  // Hide all tab content
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  // Deactivate all tab links
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the selected tab content and mark the button as active
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";

  // Load content from external JavaScript file
  if (tabName === 't_Home') {
      loadTabContent('App.js');
  } else if (tabName === 't_Service') {
      loadTabContent('Service.js');
  }
}

function loadTabContent(fileName) {
  var script = document.createElement('script');
  script.src = fileName;
  document.head.appendChild(script);
}





  return (
    <div className="App">


      {/* This container will be the logo+contact+location */}
      <div className ="container_Home_Info">
    

     {/* The Logo of the store */}
      <div className = "row">
      <div className = "col-s">
        <img className="Xia_Logo" src={Logo} style={{ width: '50px', height: '50px' }} alt="logo" />
        </div>
      </div>

      {/* This will be the name of the store */}
      <div className = "row">
      <div className = "col-s">
         <h1>Xia's Massage</h1>
        </div>
      </div>

      {/* The contact/phone number */}
      <div className = "row">
      <div className = "col-s">
        <h6> 281-302-5114</h6>
        </div>
      </div>


       {/* The Address*/}
       <div className = "row">
      <div className = "col-s">
        <p>1914 Wescott Ave suit 130, Sugar Land, TX 77479</p>
        </div>
      </div>
      </div>

      {/* Below is tab to other pages */}
      <div classNAme = "container_tab">
      <div class="tab">
        <button class="tablinks" onclick="openTab(event, 't_Home')">Home</button>
        <button class="tablinks" onclick="openTab(event, 't_Service')">Service</button>
        <button class="tablinks" onclick="openTab(event, 't_book')">Book Online</button>
        <button class="tablinks" onclick="openTab(event, 't_contact')">Contact Us</button>

    </div>
    </div>

    <div id="t_Home" class="tabcontent"></div>
    <div id="t_Service" class="tabcontent"></div>


   
    </div>
  );
}

export default App;
