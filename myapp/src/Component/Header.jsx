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
	height: 95px;
	padding-botton: 100px;
	display: flex;
	flex-direction: row;
	// border: black 5px solid;
`;
const MoveHomeBtn = styled.div`
	width: 50%;
	background: white;
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;
	&: hover {
		cursor: pointer;
	}
`;
const ToggleMenuBox = styled.div`
	width: 40px;
	padding: 20px 0px 0px 0px;
	height: 250px;
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
	position: absolute;
	flex-direction: row;
	left: 0;
	top: 100px;
	z-index: 2;
	padding: 10px;
	width: 100vw;
	height: 200px;
	background-color: white;
	border-bottom: black 3px solid;
	justify-content: space-around;

	& div {
		width: 100px;
	}
	& div h1 {
		margin-top: 10px;
		margin-bottom: 20px;
		font-size: 20px;
		font-weight: bolder;
	}
	& div li {
		margin-top: 10px;
		font-size: 15px;
	}
`;
const HBGToggleBtn = styled.button`
	width: 50px;
	height: 50px;

	display: flex;
	align-items: center;
	justify-content: center;

	border-radius: 10px;
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
					width: '30%',
					// border: 'black solid 3px',
				}}
			></div>
			<div
				style={{
					display: 'flex',
					width: '40%',
					justifyContent: 'center',
					alignItems: 'center',
					// border: 'black solid 3px',
				}}
			>
				<MoveHomeBtn onClick={onClickMoveHome}>
					<img src={logoImg} alt="logoImg" style={{ width: '50%' }} />
				</MoveHomeBtn>
			</div>
			<div
				style={{
					display: 'flex',
					width: '30%',
					// paddingRight: '10px',
					justifyContent: 'flex-start',
					// border: 'black solid 3px',
				}}
			>
				{loginState ? (
					<>
						<button
							style={{
								width: '80px',
								height: '30px',
								// marginRight: '30px',
								marginTop: '10px',
							}}
							onClick={onClickLogout}
						>
							로그아웃
						</button>
						<ToggleMenuBox>
							<HBGToggleBtn onClick={onClickToggleMenu}>햄버거</HBGToggleBtn>
							<OnToggleList active={menuToggle}>
								<div>토글 1</div>
								<div>토글 2</div>
								<div>토글 3</div>
								<div>토글 4</div>
								<div>토글 5</div>
							</OnToggleList>
						</ToggleMenuBox>
					</>
				) : (
					<>
						<div
							style={{
								width: '110px',
								height: '40px',
								background: 'white',
								cursor: 'pointer',
								display: 'flex',
								borderRadius: '10px',
								// padding: '2px',
								backgroundColor: 'white',
								marginTop: '25px',
								// justifyContent: 'center',
								// alignItems: 'center',
								// alignContent: 'center',
							}}
						>
							<button
								onClick={onClickMoveLogin}
								style={{
									display: 'flex',
									background: 'white',
									border: 'none',
									cursor: 'pointer',
									alignItems: 'center',
								}}
							>
								<img
									src={loginIcon}
									alt="loginIcon"
									style={{
										display: 'flex',
										width: '30px',
										height: '30px',
									}}
								/>
							</button>
							<p
								style={{
									display: 'flex',
									alignItems: 'center',
									fontSize: '15px',
									// border: 'black solid 3px',
								}}
							>
								로그인
							</p>
						</div>

						<ToggleMenuBox>
							<HBGToggleBtn onClick={onClickToggleMenu}>
								{/* <HBGToggleBtn
								onMouseEnter={() => setMenuToggle(true)}
								onMouseLeave={() => setMenuToggle(false)}
							> */}
								O
							</HBGToggleBtn>

							<OnToggleList
								active={menuToggle}
								// onMouseEnter={() => setMenuToggle(true)}
								onMouseLeave={() => setMenuToggle(false)}
							>
								<div>
									<h1>애국가</h1>
									<ul>
										<li>동해물과</li>
										<li>백두산이</li>
										<li>마르고</li>
										<li>닳도록</li>
									</ul>
								</div>
								<div>
									<h1>애국가</h1>
									<ul>
										<li>동해물과</li>
										<li>백두산이</li>
										<li>마르고</li>
										<li>닳도록</li>
									</ul>
								</div>
								<div>
									<h1>애국가</h1>
									<ul>
										<li>동해물과</li>
										<li>백두산이</li>
										<li>마르고</li>
										<li>닳도록</li>
									</ul>
								</div>
								<div>
									<h1>애국가</h1>
									<ul>
										<li>동해물과</li>
										<li>백두산이</li>
										<li>마르고</li>
										<li>닳도록</li>
									</ul>
								</div>
							</OnToggleList>
						</ToggleMenuBox>
						{/* <HBG_JS /> */}
					</>
				)}
			</div>
		</HeaderContainer>
	);
}

export default Header;
