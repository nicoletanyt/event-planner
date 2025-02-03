import React from 'react'
import { useDispatch } from 'react-redux';
import { decreaseItemQuantity, increaseItemQuantity, removeItem } from './CartSlice';

function CartCard({item}) {
    const dispatch = useDispatch()

  return (
		<div className="cart-card">
			<img src={item.image} />
			<div className="right">
				<h3>{item.name}</h3>
				<p>${item.cost}</p>
				<div className="button-wrapper">
					<button
						className="decrement-btn"
						onClick={() => dispatch(decreaseItemQuantity(item.id))}
					>
						-
					</button>
					<p>{item.quantity}</p>
					<button
						className="increment-btn"
						onClick={() => dispatch(increaseItemQuantity(item.id))}
					>
						+
					</button>
				</div>
				<p>Total: ${item.cost * item.quantity}</p>
				<button
					className="delete-btn"
					onClick={() => dispatch(removeItem(item.id))}
				>
					Delete
				</button>
			</div>
		</div>
	);
}

export default CartCard