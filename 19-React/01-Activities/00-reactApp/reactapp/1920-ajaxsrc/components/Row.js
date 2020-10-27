import React from 'react';

function Row(props) {
	console.log('row Props');
	console.log(props);
	return (
		<div className={`row${props.fluid ? '-fluid' : ''}`}>{props.children}</div>
	);
}

export default Row;
