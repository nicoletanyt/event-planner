import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartCard from './CartCard';
import { toggleCart } from './CartSlice';

function Cart() {
	const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart.cartItems);
    const displayCart = useSelector((state) => state.cart.cartShown);
    const totalAmount = cartItems.reduce((total, item) => total + item.cost * item.quantity, 0)

  return (
		<div id="cart-page" className={displayCart ? "show" : "hide"}>
			<h3 className="cart-amount">
				Total Cart Amount: ${totalAmount ? totalAmount : "0"}
			</h3>
			<div className="cart-product-list">
				{cartItems.map((item) => (
					<CartCard item={item} />
				))}
			</div>
			<button className="continue-btn" onClick={() => dispatch(toggleCart())}>
				Continue Shopping
			</button>
			<button className="continue-btn" onClick={() => alert("Coming Soon")}>Checkout</button>
		</div>
	);
}

export default Cart