import React from 'react';
// import { Link } from 'react-router-dom';
import '../Style/Component/Header.css';
import { useNavigate } from 'react-router-dom';

function Header() {
	const navigate = useNavigate();
	const onClickMoveHome = () => {
		navigate('/');
	};
	return (
		<div id="Header-div">
			<div className="HeaderBox">
				<button className="HeaderMoveHomeBtn" onClick={onClickMoveHome}>
					Home
				</button>
			</div>
			<div className="HeaderBox">
				<div> Header </div>
			</div>
			<div className="HeaderBox">
				<div> Header </div>
			</div>
		</div>
	);
}

export default Header;
