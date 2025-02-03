import React from 'react'

function Card({ plant, handleAddItem, disabled }) {
	return (
		<div className="card">
			<span className="sale">SALE</span>
			<p className="name">{plant.name}</p>
			<img src={plant.image} />
			<p className="cost">${plant.cost}</p>
			<p className="description">{plant.description}</p>
			<button
				disabled={disabled}
				onClick={() => handleAddItem(plant)}
				className="cta"
			>
				{
					disabled ? "Added to cart" : "Add to cart"
				}
			</button>
		</div>
	);
}

export default Card