import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderDiv = styled.div`
	width: 100%;
	height: 10%;
	border: 2px black solid;
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
`;
export const HeaderBox = styled.div`
	display: flex;
	width: 33.3%;
	height: 100%;
	border: 2px solid black;
	box-sizing: border-box;
	justify-content: center;
	align-items: center;
	text-align: center;
`;
export const HeaderMoveHomeBtn = styled.button`
	width: 50px;
	height: 50px;
`;
function Header() {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setIsDarkMode(prev => !prev);
	};

	const navigate = useNavigate();
	const Swal = require('sweetalert2');

	const onClickMoveHome = () => {
		Swal.fire({
			title: 'Move to Home',
			text: '홈페이지로 이동합니다',
			icon: 'success',
			confirmButtonText: 'OK',
			heightAuto: false,
		});
		navigate('/');
	};
	const onClickMoveError = () => {
		Swal.fire({
			title: 'Error',
			text: '찾을 수 없는 페이지입니다',
			icon: 'error',
			confirmButtonText: 'OK',
			heightAuto: false,
		});
		navigate('/errorpage');
	};
	return (
		<HeaderDiv>
			<HeaderBox>
				<HeaderMoveHomeBtn onClick={onClickMoveHome}>Home</HeaderMoveHomeBtn>
			</HeaderBox>
			<HeaderBox>
				<h1 style={{ fontSize: '3vw' }}> AOMD </h1>
			</HeaderBox>
			<HeaderBox>
				<HeaderMoveHomeBtn className="HeaderMoveErrorBtn" onClick={onClickMoveError}>
					Error
				</HeaderMoveHomeBtn>
			</HeaderBox>
		</HeaderDiv>
	);
}

export default Header;
