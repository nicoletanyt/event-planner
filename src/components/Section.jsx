import React from 'react'
import Card from "./Card";

function Section({category, plants}) {
  return (
		<section>
			<h2 className="category-heading">{category}</h2>
			<div className="plants-wrapper">
				{plants.map((plant, id) => (
					<Card id={id} plant={plant} />
				))}
			</div>
		</section>
	);
}

export default Section