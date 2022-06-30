import React from 'react';
import error_img from '../Image/error_img.jpeg';
import '../Style/ErrorPage.css';

function ErrorPage() {
	return (
		<div className="errorpage">
			<img src={error_img} alt="Error Img"></img>
			{/* <h1>Hello</h1> */}
		</div>
	);
}

export default ErrorPage;
