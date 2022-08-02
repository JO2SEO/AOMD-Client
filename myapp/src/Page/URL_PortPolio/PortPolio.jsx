import React from 'react';
import './PortPolio.css';

function PortPolio() {
	const onContextMenuFunc = e => {
		e.preventDefault();
	};
	const onClickFunc = e => {
		e.preventDefault();
	};

	return (
		<div className="PortPolioDiv" onContextMenu={onContextMenuFunc} onClick={onClickFunc}>
			<h1>1111111111111111111111</h1>
			<h1>1111111111111111111111</h1>
			<h1>1111111111111111111111</h1>
			<h1>1111111111111111111111</h1>
			<h1>1111111111111111111111</h1>
			<h1>1111111111111111111111</h1>
			<h1>1111111111111111111111</h1>
			<h1>1111111111111111111111</h1>
			<h1>1111111111111111111111</h1>
			<h1>1111111111111111111111</h1>
		</div>
	);
}

export default PortPolio;
