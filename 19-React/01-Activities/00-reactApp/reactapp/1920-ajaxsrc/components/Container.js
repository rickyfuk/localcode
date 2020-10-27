import React from 'react';

function Container(props) {
	console.log('container Props');
	console.log(props);
	return (
		<div className={`container${props.fluid ? '-fluid' : ''}`}>
			{props.children}
		</div>
	);
}

export default Container;
