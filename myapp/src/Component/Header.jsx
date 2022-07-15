import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { selectLoginData, SuccessLogout } from '../Redux/LoginCheck';
import { useSelector, useDispatch } from 'react-redux';
import logoImg from '../Image/logoImg.png';
import loginIcon from '../Image/loginIcon.png';

const HeaderContainer = styled.div`
	width: 100%;
	height: 70px;
	display: flex;
	flex-direction: row;
`;
const MoveHomeBtn = styled.div`
	width: 50%;
	background: white;
	border: none;

	&: hover {
		cursor: pointer;
	}
`;

function Header() {
	const [loginState, setLoginState] = useState(false);
	const currentLogin = useSelector(selectLoginData);

	const navigate = useNavigate();

	const onClickMoveHome = () => {
		navigate('/AOMD-Client');
	};

	const onClickMoveLogin = () => {
		navigate('/loginpage');
	};

	const dispatch = useDispatch();

	const onClickLogout = () => {
		dispatch(SuccessLogout(true));
		navigate('/AOMD-Client');
	};

	useEffect(() => {
		if (currentLogin.loginState) {
			setLoginState(true);
		} else {
			setLoginState(false);
		}
	}, [currentLogin.loginState]);

	return (
		<HeaderContainer>
			<div
				style={{
					display: 'flex',
					width: '40%',
					paddingLeft: '100px',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<h1> 다양한 포트폴리오를 검색해보세요</h1>
			</div>

			<div
				style={{
					display: 'flex',
					width: '20%',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<MoveHomeBtn onClick={onClickMoveHome}>
					<img src={logoImg} alt="logoImg" style={{ width: '100%' }} />
				</MoveHomeBtn>
			</div>

			<div
				style={{
					display: 'flex',
					width: '40%',
					paddingRight: '100px',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				{loginState ? (
					<>
						<button> 햄버거 버튼 </button>
						<button onClick={onClickLogout}>로그아웃</button>
					</>
				) : (
					<>
						<button
							onClick={onClickMoveLogin}
							style={{
								display: 'flex',
								width: '50px',
								background: 'white',
								border: 'none',
							}}
						>
							<img
								src={loginIcon}
								alt="loginIcon"
								style={{
									width: '100%',
								}}
							/>
						</button>
					</>
				)}
			</div>
		</HeaderContainer>
	);
}

export default Header;
