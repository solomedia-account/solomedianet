import React from 'react'
import './ourshows.css'
import Row1 from "../assets/ourshows/row1.jpg"
import Row2 from "../assets/ourshows/row2.jpg"

import Row3 from "../assets/ourshows/row3.jpg"
import Row4 from "../assets/ourshows/row4.jpg"

import Row5 from "../assets/ourshows/row5.jpg"
import Row6 from "../assets/ourshows/row6.jpg"
const Ourshows = () => {

		return (<>




			<div className="intro-shows">
		<div className="intro-content">

	<p className="show-header">OUR SHOWS</p><div className="show-button"><p>SEE ALL SHOWS</p></div>

			</div></div>
			<div className="our-shows">


<div className="show-row"><img src={Row1} alt="picture description"/><h2>Header</h2> <p>This is the text component for each box of the content. This section basically talks about the entire row, with a link to a content property that it  contains</p> </div>
<div className="show-row"><img src={Row2} alt="picture description"/><h2>Header</h2> <p>This is the text component for each box of the content. This section basically talks about the entire row, with a link to a content property that it  contains</p> </div>
<div className="show-row"><img src={Row3} alt="picture description"/><h2>Header</h2> <p>This is the text component for each box of the content. This section basically talks about the entire row, with a link to a content property that it  contains</p> </div>
<div className="show-row"><img src={Row4} alt="picture description"/><h2>Header</h2> <p>This is the text component for each box of the content. This section basically talks about the entire row, with a link to a content property that it  contains</p> </div>
<div className="show-row"><img src={Row5} alt="picture description"/><h2>Header</h2> <p>This is the text component for each box of the content. This section basically talks about the entire row, with a link to a content property that it  contains</p> </div>
<div className="show-row"><img src={Row6} alt="picture description"/><h2>Header</h2> <p>This is the text component for each box of the content. This section basically talks about the entire row, with a link to a content property that it  contains</p> </div>
			</div>

			</>)


}



export default Ourshows;