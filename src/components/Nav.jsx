import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "./CartSlice";

function Nav() {

	const dispatch = useDispatch()
	const cartItems = useSelector((state) => state.cart.cartItems)
	const itemCount = cartItems.reduce(
		(total, item) => total + item.quantity,
		0
	);

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
			<button className="cart-button" onClick={() => dispatch(toggleCart())}>
				<p className="item-count">{itemCount}</p>
				<FaShoppingCart className="icon" />
			</button>
		</nav>
	);
}

export default Nav;
