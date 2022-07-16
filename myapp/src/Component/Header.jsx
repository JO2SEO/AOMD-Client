import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { selectLoginData, SuccessLogout } from '../Redux/LoginCheck';
import { useSelector, useDispatch } from 'react-redux';
import logoImg from '../Image/logoImg.png';
import loginIcon from '../Image/loginIcon.png';
import HBG_JS from './HambergerToggle/HBG_JS';

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
const ToggleMenuBox = styled.div`
	width: 50px;
	height: 200px;
	display: flex;
	z-index: 2;
	flex-direction: column;
	box-sizing: content-box;
`;
const OnToggleList = styled.div`
	display: ${({ active }) => {
		if (active) {
			return 'flex';
		}
		return 'none';
	}};
	z-index: 2;
	background: white;
	padding-top: 10px;

	& li {
		padding-top: 10px;
	}
`;
const HBGToggleBtn = styled.button`
	width: 50px;
	height: 50px;

	border: none;
	background: gray;
	z-index: 2;

	&: hover {
		cursor: pointer;
	}
`;

function Header() {
	const [loginState, setLoginState] = useState(false);
	const currentLogin = useSelector(selectLoginData);

	const [menuToggle, setMenuToggle] = useState(false);

	const onClickToggleMenu = () => {
		setMenuToggle(!menuToggle);
	};

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
					justifyContent: 'center',
					paddingTop: '10px',
				}}
			>
				{loginState ? (
					<>
						<button
							style={{
								width: '80px',
								height: '30px',
								marginRight: '30px',
								marginTop: '10px',
							}}
							onClick={onClickLogout}
						>
							로그아웃
						</button>
						<ToggleMenuBox>
							<HBGToggleBtn onClick={onClickToggleMenu}>햄버거</HBGToggleBtn>
							<OnToggleList active={menuToggle}>
								<ul>
									<li>토글 1</li>
									<li>토글 2</li>
									<li>토글 3</li>
									<li>토글 4</li>
									<li>토글 5</li>
								</ul>
							</OnToggleList>
						</ToggleMenuBox>
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
								cursor: 'pointer',
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
						<div>
							<HBG_JS />
						</div>
					</>
				)}
			</div>
		</HeaderContainer>
	);
}

export default Header;
