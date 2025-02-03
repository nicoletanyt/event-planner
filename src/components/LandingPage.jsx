import React from 'react'
import "../App.css"

function LandingPage() {
	return (
		<div id="landing-page">
			<div className="left">
				<h1 className="heading">Welcome To Paradise Nursery </h1>
				<hr className="divider" />
				<h3>Where Green Meets Serenity</h3>
				<a href="#product-list-page" className="get-started-btn">
					Get started
				</a>
			</div>
			<div className="right">
				<p>Welcome to Paradise Nursery, where green meets serenity! </p>
				<p>
					At Paradise Nursery, we are passionate about bringing nature closer to
					you. Our mission is to provide a wide range of high-quality plants
					that not only enhance the beauty of your surroundings but also
					contribute to a healthier and more sustainable lifestyle. From air-
					puritying plants to aromatic fragrant ones, we have something tor
					every plant enthuslast.
				</p>
				<p>
					Our team of experts is dedicated to ensuring that each plant meets our
					strict standards of quality and care. Whether youre a seasoned
					gardener or just starting your green joumey. we're here to support you
					every step of the way. Feel free to explore our collection, ask
					questions, and let us help you find the perfect plant for your home or
					office.
				</p>
				<p>
					Join us in our mission to create a greener, healthier world. Visit
					Paradise Nursery today and experlence the beauty of nature night at
					your doorstep.
				</p>
			</div>
		</div>
	);
}

export default LandingPage