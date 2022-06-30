import React from 'react';
// import { Link } from 'react-router-dom';
import '../Style/Component/Header.css';
import { useNavigate } from 'react-router-dom';

function Header() {
	const navigate = useNavigate();
	const Swal = require('sweetalert2');

	const onClickMoveHome = () => {
		Swal.fire({
			title: 'Move to Home',
			text: '홈페이지로 이동합니다',
			icon: 'success',
			confirmButtonText: 'OK',
		});
		navigate('/');
	};
	const onClickMoveError = () => {
		Swal.fire({
			title: 'Error',
			text: '찾을 수 없는 페이지입니다',
			icon: 'error',
			confirmButtonText: 'OK',
		});
		navigate('/errorpage');
	};
	return (
		<div id="Header-div">
			<div className="HeaderBox">
				<button className="HeaderMoveHomeBtn" onClick={onClickMoveHome}>
					Home
				</button>
			</div>
			<div className="HeaderBox">
				{' '}
				<h1> AOMD </h1>{' '}
			</div>
			<div className="HeaderBox">
				<div>
					<button className="HeaderMoveErrorBtn" onClick={onClickMoveError}>
						Error
					</button>
				</div>
			</div>
		</div>
	);
}

export default Header;
