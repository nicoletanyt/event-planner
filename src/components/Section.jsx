import React, { useEffect, useState} from 'react'
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

function Section({category, plants}) {
	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.cart.cartItems);
	const [disabledProducts, setDisabledProducts] = useState([]);

	const handleAddItem = (product) => {
		dispatch(addItem(product));
		setDisabledProducts([...disabledProducts, product.id]);
	};

	useEffect(() => {
		let cartIds = []
		for (let i = 0; i< cartItems.length; ++i) {
			cartIds.push(cartItems[i].id);
		}
		setDisabledProducts(cartIds);
	}, [cartItems])

  return (
		<section>
			<h2 className="category-heading">{category}</h2>
			<div className="plants-wrapper">
				{plants.map((plant, i) => (
					<Card
						id={i}
						plant={plant}
						handleAddItem={handleAddItem}
						disabled={disabledProducts.includes(plant.id)}
					/>
				))}
			</div>
		</section>
	);
}

export default Section