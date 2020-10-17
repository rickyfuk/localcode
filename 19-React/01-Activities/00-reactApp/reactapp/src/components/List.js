import React from 'react';

function List(props) {
	console.log(props);
	return (
		<ul className='list-group'>
			Using the map method, render one li element displaying the text property
			of each grocery object.
			{/* what is the key use for and where are they showing in the element? */}
			{props.groceries.map((item) => (
				<li className='list-group-item' key={item.id}>
					{item.name}
				</li>
			))}
		</ul>
	);
}

export default List;
