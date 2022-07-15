import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { selectLoginData, SuccessLogout } from '../Redux/LoginCheck';
import { useSelector, useDispatch } from 'react-redux';
import logoImg from '../Image/logoImg.png';
import loginIcon from '../Image/loginIcon.png';
import '../HBG.css';
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
	display: flex;
	flex-direction: column;
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
`;
const HBGToggleBtn = styled.button`
	width: 50px;
	border: none;
	background: gray;
	z-index: 1;
	position: absolute;
	height: 30px;
	top: 0px;

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
						<button onClick={onClickLogout}>로그아웃</button>
						<ToggleMenuBox>
							<HBGToggleBtn onClick={onClickToggleMenu}>햄버거</HBGToggleBtn>

							<OnToggleList active={menuToggle}>
								<ul className="header-category-btn-mypage-ul">
									<li className="header-category-btn-mypage-li">토글 1</li>
									<li className="header-category-btn-mypage-li">토글 2</li>
									<li className="header-category-btn-mypage-li">토글 3</li>
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
