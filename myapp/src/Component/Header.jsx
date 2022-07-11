import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Category from './Category';
import { selectLoginData } from '../Redux/LoginCheck';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const HeaderDiv = styled.div`
	width: 100%;
	height: 10%;
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;
export const HeaderLeftBox = styled.div`
	display: flex;
	width: 15%;
	height: 100%;
	border: 2px solid black;
	box-sizing: border-box;
	justify-content: center;
	align-items: center;
	text-align: center;
`;
export const HeaderRightBox = styled.div`
	display: flex;
	width: 15%;
	height: 100%;
	border: 2px solid black;
	box-sizing: border-box;
	justify-content: center;
	align-items: center;
	text-align: center;
`;

export const HeaderMoveHomeBtn = styled.button`
	width: 80px;
	height: 50px;
	background: white;
	border: 3px solid black;

	&:hover {
		cursor: pointer;
		background: gray;
		color: white;
	}
`;
export const HeaderLoginBtn = styled.button`
	width: 70px;
	height: 50px;
	border: 3px solid black;
	margin: 10px;
	background: white;

	&:hover {
		cursor: pointer;
		background: gray;
		color: white;
	}
`;
function Header() {
	const [loginState, setLoginState] = useState(false);
	const currentLogin = useSelector(selectLoginData);

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
	const onClickMoveLogin = () => {
		navigate('/login');
	};
	const onClickMoveRegister = () => {
		navigate('/register');
	};
	useEffect(() => {
		console.log('Load 될 때 리덕스로 불러온 로그인 정보 = ', currentLogin.loginState);
		console.log('이거 가지고 loginState set 할거임');
		if (currentLogin.loginState) {
			setLoginState(true);
		} else {
			setLoginState(false);
		}
	});

	return (
		<HeaderDiv>
			<HeaderLeftBox>
				<HeaderMoveHomeBtn onClick={onClickMoveHome}>AOMD</HeaderMoveHomeBtn>
			</HeaderLeftBox>
			<Category />

			<HeaderRightBox>
				{loginState ? (
					<h1>로그인 성공! 환영합니다 지원 님</h1>
				) : (
					<>
						<HeaderLoginBtn onClick={onClickMoveLogin}>로그인</HeaderLoginBtn>
						<HeaderLoginBtn onClick={onClickMoveRegister}>회원가입</HeaderLoginBtn>{' '}
					</>
				)}
			</HeaderRightBox>
		</HeaderDiv>
	);
}

export default Header;
