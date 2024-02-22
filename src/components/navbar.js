import React from 'react';
import ReactDOM from 'react-dom'
import './nav.css'
import logo from '../logo.jpg';
import {Router, Route, Switch} from 'react-router-dom'
import { Links } from 'react-router-dom';

import '../App.css';




function Navbar (){
	return (<>
				<div className="navbar">
					<div className="left-side">
					<p>SOLOMEDIA NETWORK</p>
					<ul>
					<li>Music</li>
					<li>Film</li>
					<li>Entrepreneurship</li>
					<li>Media</li>
					<li>Partners</li>

					</ul>
					</div>
					<div className="right-side">

					<input placeholder="search" id="search-bar" />
					</div>

				</div>










		</>)
}


export default Navbar;