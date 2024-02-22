import logo from './logo.jpg';
import './App.css';
import './components/nav.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactPlayer from 'react-player';
import './components/nav.css';
import video from './assets/homevid.mp4';
import Button from 'react-bootstrap/Button';
import Navbar from './components/navbar.js';
import Footer from './components/footer.js';
import ContactUs from './components/contact-us.js';
import AboutSlide from './components/about-slide.js';
import Ourshows from './components/our-shows.js'

function App() {
  return (

     <>

      <Navbar />
       <div className="intro">
          
          <div className="intro-slide"></div>
        </div>
      <div className="blur">
       

      </div>
      
       <video width="100%" height="620px" autoPlay muted replay>
      <source src={video} type="video/mp4" />
      Sorry, your browser doesnt support embedded videos.
    </video>
      <div className='section1'>

      <AboutSlide />

      </div>
   <div className="section2"></div>
      <Ourshows />

       
       <ContactUs />
      
      <Footer />

</>

   );
}

export default App;
