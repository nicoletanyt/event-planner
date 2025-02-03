import React from "react";
import { FaShoppingCart } from "react-icons/fa";

function Nav() {
	return (
		<nav>
			<div className="logo-wrapper">
				<img
					className="logo"
					src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
				/>
				<div className="logo-text">
					<h1>Paradise Nursery</h1>
					<p>Where Green Meets Serenity</p>
				</div>
			</div>
			<h1 className="heading">Plants</h1>
			<button className="cart-button">
				<p className="item-count">1</p>
				<FaShoppingCart className="icon" />
			</button>
		</nav>
	);
}

export default Nav;
