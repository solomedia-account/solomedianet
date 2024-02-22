import Navbar from './navbar.js'
import './contact-us.css'
import { useState } from 'react';
import ReactDOM from 'react-dom/client';






const FORM_ENDPOINT = "solomonchi96@gmail.com"
function Contactus (){

const [submitted, setSubmitted] = useState(false);


function handleSubmit (e) {
	e.preventDefault();

	const inputs = e.target.elements;
	const data = {};

	for (let i=0; i<inputs.length; i++){
		if (inputs[i].name){
			data[inputs[i].name] = inputs[i].value;

		}
	}

fetch (FORM_ENDPOINT, {
	method: 'POST', 
	header:{
		Accept: 'application/json', 
		'Content-Type': 'application/json',
	},
	body: inputs,
}).then((response)=>{
	if(!response.ok){
		throw new Error('Form response was not okay!')
		alert ('Response was not okay')
	}

	setSubmitted(true);
}).catch((err)=>{
	e.target.submit();
})


}

	return (<>
		<div className="contact_us">
			<div className="user-info">
				<form
					method="POST"
					action={FORM_ENDPOINT}  
					target="blank"
			
				>
					<p>CONTACT</p>
					<label ><input placeholder="Your Name" name="name" type="text" required /></label><br/>
					<label ><input placeholder="Email Address" name="email" type="email" required /></label><br/>
				<label >	<textarea placeholder="Message" name="message" required /></label><br/>
					<button type="submit" onClick={handleSubmit}>SEND</button>
				</form>
			</div>
		</div>

		</>)
}


export default Contactus;