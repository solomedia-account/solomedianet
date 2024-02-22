import React from 'react'
import ReactDOM from 'react-dom'
import './about-slide.css'
import Pic1 from '../assets/infopic1.jpg'
import Pic2 from '../assets/infopic2.jpg'
import Pic3 from '../assets/infopic3.jpg'







function aboutSlide(){

	return (<>
			<div className="about-slide">
				<div className="info-tag">
				<p>ABOUT SOLOMEDIA NETWORK </p> <p>READ MORE ... </p>
				</div>
				<div className="content-tag">
					<div className="info">
					<img src={Pic1} /><div className="blur-content"></div>
					<div className="info-text">
							<p>MUSIC</p><p>WATCH NOW</p>
					</div></div>
					<div className="info">
					<img src={Pic2} /><div className="blur-content"></div>
					<div className="info-text">
							<p>FILM</p><p>Read More</p>
					</div></div>
					<div className="info">
					<img src={Pic3} /><div className="blur-content"></div>
					<div className="info-text">
							<p id="left-infotext">DOCUMENTARY</p><p id="right-infotext">SELECT</p>
					</div></div>
				</div>


			</div>


		</>)


}



export default aboutSlide;