import React from 'react'
import Helmet from 'react-helmet'
import contactStyles from '../../css/contact.scss'

function Contact({route}) {
	return (
		<div>
			<Helmet title={route.title} />
			<h2>Contact</h2>
			<div className="contact-info">
				<div>
					<div className="map-wrap">
						<iframe 
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.784390924522!2d-73.99211948459401!3d40.74476957932826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a5c3c2a879%3A0x2f86a18d058e4ec4!2s28+W+27th+St%2C+New+York%2C+NY+10001!5e0!3m2!1sen!2sus!4v1486252844376" 
							allowFullScreen
						>
						</iframe>
					</div>
				</div>
				<div className="address">
					<div>
						<div>28 W 27th Street Suite 906</div>
						<div>New York, NY 10001</div>
					</div>
					<div className="lz-padding">
						Call Us: <a href="tel:12127575147">1 (212) 757-5147</a>
					</div>
					<div className="lz-padding">
						<div>Share your story with us: </div>
						<a href="mailto:mobilizehere@gmail.com">
							mobilizehere@gmail.com
						</a>
					</div>
				</div>
			</div>
			{
				// <h2>Donate</h2>
				// <p>Please donate! Texttexttext</p>
				// <div className="donate-form">
				// 	<div>
				// 		{['$5', '$10', '$20'].map(
				// 			(amount, amountIndex) => 
				// 				<div key={'amount' + amountIndex}>
				// 					<div>
				// 						<input type="checkbox" />
				// 						<label>&nbsp;{amount}</label>
				// 					</div>
				// 				</div>
				// 		)}
				// 	</div>
				// 	<div><button className="center-block">Donate</button></div>
				// </div>
			}
		</div>
	);
}

export default Contact