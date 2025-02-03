import React from 'react'

function Card({ plant }) {
  return (
		<div className="card">
            <span className='sale'>SALE</span>
			<p className="name">{plant.name}</p>
			<img src={plant.image}/>
			<p className="cost">{plant.cost}</p>
			<p className='description'>{plant.description}</p>
            <button className='cta'>Add to cart</button>
		</div>
	);
}

export default Card