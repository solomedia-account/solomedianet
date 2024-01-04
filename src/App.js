import logo from './logo.jpg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactPlayer from 'react-player';
import './components/nav.css';
import video from './assets/homevid.mp4';


function App() {
  return (

     <>


      <div className="navbar">
          <a href="solomedia-africa.business.site"><img src={logo} height="50px" width="50px"/></a>


          <ul>
            <li>Subscribe</li>
            <li>Login</li>
          </ul>

      </div>
      <div className="blur"></div>
      
       <video width="100%" height="620px" autoPlay muted replay>
      <source src={video} type="video/mp4" />
      Sorry, your browser doesnt support embedded videos.
    </video>
      <div className="section1"></div>
    
</>

   );
}

export default App;
