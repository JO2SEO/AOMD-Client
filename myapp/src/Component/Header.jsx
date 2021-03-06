import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { selectLoginData, SuccessLogout } from 'Redux/LoginCheck';
// import logoImg from '../Image/logoImg.png';
import AOMD_logo from 'Image/AOMD_logo.svg';
// import AOMD_logo_light from '../Image/AOMD_logo_light.svg';
// import HbgToggle from '../Image/HbgIcon.svg';
// import HbgToggle from '../Image/HbgIcon.svg';
// import HBGIcon from '../Image/HBGIcon.svg';
import HBGIcon from 'Image/HBGIcon.svg';
// import loginIcon from '../Image/loginIcon.svg';
import loginIcon from 'Image/loginIcon.svg';

export const HeaderContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	padding-top: 10px;
	position: fixed;
	z-index: 100;
`;
const MoveHomeBtn = styled.div`
	width: 35%;
	background: white;
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;
const ToggleMenuBox = styled.div`
	width: 30px;
	padding: 0px 0px 0px 20px;
	justify-content: center;
	display: flex;
	z-index: 5;
	flex-direction: column;
	box-sizing: content-box;
	// border: red solid 3px;
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
	top: 110px;
	z-index: 7;
	padding: 10px;
	width: 100vw;
	height: 170px;
	background-color: white;
	border-bottom: black 3px solid;
	// border: black 3px solid;

	justify-content: space-around;

	& div {
		display: flex;
		flex-direction: column;
		width: 200px;
		padding-left: 5%;
		z-index: 7;
	}
	& div h1 {
		margin-bottom: 10px;
		font-size: 17px;
		font-weight: bolder;
		z-index: 7;
	}
	& div ul {
		display: flex;
		flex-direction: column;
		z-index: 7;
	}
	& div li {
		width: 100px;
		text-align: left;
		margin-top: 10px;
		font-size: 15px;
		cursor: pointer;
		z-index: 7;
	}
`;
const HBGToggleBtn = styled.button`
	width: 50px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: white;
	border: none;
	z-index: 7;

	&: hover {
		cursor: pointer;
	}
	& img {
		width: 50%;
	}
`;
const LeftBox = styled.div`
	display: flex;
	align-items: center;
	padding-left: 14vw;

	& p {
		display: flex;
		font-size: 16px;
		align-items: center;
		justify-content: center;
		width: 150px;
		height: 30px;
		border-radius: 10px;
		cursor: pointer;
	}
	& p:hover {
		background: #dfdfdf;
	}
`;
const RightBox = styled.div`
	display: flex;
	width: 30%;
	justifycontent: flex-start;
`;

function Header() {
	const [loginState, setLoginState] = useState(false);
	const [menuToggle, setMenuToggle] = useState(false);
	const [infoLocation, setInfoLocation] = useState('');

	const currentLogin = useSelector(selectLoginData);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	// console.log('location = ', location);
	useEffect(() => {
		setInfoLocation(location.pathname);
	}, [location]);

	useEffect(() => {
		if (currentLogin.loginState) {
			setLoginState(true);
		} else {
			setLoginState(false);
		}
	}, [currentLogin.loginState]);

	const onClickToggleMenu = () => {
		setMenuToggle(!menuToggle);
	};
	const onClickMoveHome = () => {
		setMenuToggle(false);
		navigate('/');
	};
	const onClickMoveLogin = () => {
		setMenuToggle(false);
		navigate('/loginpage');
	};
	const onClickLogout = () => {
		setMenuToggle(false);
		dispatch(SuccessLogout(true));
		navigate('/');
	};
	const onClickMoveIntroducePage = () => {
		setMenuToggle(false);
		navigate('/introducepage');
	};
	const onClickMovePortPolioPage = () => {
		setMenuToggle(false);
		if (loginState) {
			navigate('/portpoliopage');
		} else {
			navigate('/loginpage');
		}
	};
	const onClickMoveEnterprise = () => {
		setMenuToggle(false);
		navigate('/enterprisepage');
	};
	// const onClickMovePractice = () => {
	// 	setMenuToggle(false);
	// 	navigate('/practicepage');
	// };

	return (
		<>
			{infoLocation === '/' ? (
				<>
					<HeaderContainer style={{ background: 'white' }}>
						<LeftBox
							style={{
								width: '30%',
							}}
							onClick={onClickMoveEnterprise}
						>
							<p>???????????? ????????????</p>
						</LeftBox>

						<div
							style={{
								display: 'flex',
								width: '40%',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<MoveHomeBtn onClick={onClickMoveHome}>
								<img src={AOMD_logo} alt="logoImg" style={{ width: '50%' }} />
							</MoveHomeBtn>
							{/* <button
								style={{ width: '80px', height: '50px' }}
								onClick={onClickMovePractice}
							>
								????????? ????????? ???????????????
							</button> */}
						</div>

						<RightBox>
							<div
								style={{
									width: '110px',
									// height: '40px',
									background: 'white',
									cursor: 'pointer',
									display: 'flex',
									borderRadius: '10px',
									backgroundColor: 'white',
								}}
							>
								{!loginState ? (
									<button
										onClick={onClickMoveLogin}
										style={{
											display: 'flex',
											background: 'white',
											border: 'none',
											cursor: 'pointer',
											alignItems: 'center',
											paddingLeft: '50px',
										}}
									>
										<img
											src={loginIcon}
											alt="loginIcon"
											style={{
												display: 'flex',
												width: '25px',
												height: '25px',
											}}
										/>
										<p
											style={{
												display: 'flex',
												width: '50px',
												// alignItems: 'center',
												// textAlign: 'center',
												fontSize: '13px',
												marginLeft: '5px',
											}}
										>
											?????????
										</p>
									</button>
								) : (
									<>
										<button
											onClick={onClickLogout}
											style={{
												display: 'flex',
												background: 'white',
												border: 'none',
												cursor: 'pointer',
												alignItems: 'center',
												paddingLeft: '50px',
											}}
										>
											<img
												src={loginIcon}
												alt="loginIcon"
												style={{
													display: 'flex',
													width: '25px',
													height: '25px',
												}}
											/>
											<p
												style={{
													display: 'flex',
													width: '50px',
													// alignItems: 'center',
													// textAlign: 'center',
													fontSize: '13px',
													marginLeft: '5px',
												}}
											>
												????????????
											</p>
										</button>
									</>
								)}
							</div>

							<ToggleMenuBox>
								<HBGToggleBtn onClick={onClickToggleMenu}>
									<img src={HBGIcon} alt="HbgToggle"></img>
								</HBGToggleBtn>

								<OnToggleList
									active={menuToggle}
									onMouseLeave={() => setMenuToggle(false)}
								>
									<div>
										<h1>??????</h1>
										<ul>
											<li onClick={onClickMoveIntroducePage}>???????????? </li>
											<li onClick={onClickMoveIntroducePage}>???????????? </li>
										</ul>
									</div>
									<div>
										<h1>???????????????</h1>
										<ul>
											<li onClick={onClickMovePortPolioPage}>
												??????????????? ??????
											</li>
											<li onClick={onClickMovePortPolioPage}>
												??????????????? ??????
											</li>
											<li onClick={onClickMovePortPolioPage}>
												??????????????? ??????
											</li>
										</ul>
									</div>
									<div>
										<h1>????????????</h1>
										<ul>
											<li>????????????</li>
											<li>?????? ??? ?????????</li>
										</ul>
									</div>
									<div>
										<h1>??????</h1>
										<ul>
											<li>???????????????</li>
											<li>????????? ?????????</li>
										</ul>
									</div>
									<div>
										<h1>????????????</h1>
										<ul>
											<li>????????????</li>
											<li>1:1 ??????</li>
											<li>????????? ??????</li>
										</ul>
									</div>
								</OnToggleList>
							</ToggleMenuBox>
						</RightBox>
					</HeaderContainer>
				</>
			) : (
				<>
					<HeaderContainer style={{ background: 'white' }}>
						<LeftBox
							style={{
								width: '40%',
							}}
						>
							<MoveHomeBtn onClick={onClickMoveHome}>
								<img src={AOMD_logo} alt="logoImg" style={{ width: '80%' }} />
							</MoveHomeBtn>
						</LeftBox>

						<div
							style={{
								display: 'flex',
								width: '30%',
							}}
						/>

						<RightBox>
							<div
								style={{
									width: '110px',
									// height: '40px',
									background: 'white',
									cursor: 'pointer',
									display: 'flex',
									borderRadius: '10px',
									backgroundColor: 'white',
								}}
							>
								{!loginState ? (
									<>
										<button
											onClick={onClickMoveLogin}
											style={{
												display: 'flex',
												background: 'white',
												border: 'none',
												cursor: 'pointer',
												alignItems: 'center',
												paddingLeft: '50px',
											}}
										>
											<img
												src={loginIcon}
												alt="loginIcon"
												style={{
													display: 'flex',
													width: '25px',
													height: '25px',
												}}
											/>
											<p
												style={{
													display: 'flex',
													width: '50px',
													// alignItems: 'center',
													// textAlign: 'center',
													fontSize: '13px',
													marginLeft: '5px',
												}}
											>
												?????????
											</p>
										</button>
									</>
								) : (
									<>
										<button
											onClick={onClickLogout}
											style={{
												display: 'flex',
												background: 'white',
												border: 'none',
												cursor: 'pointer',
												alignItems: 'center',
												paddingLeft: '50px',
											}}
										>
											<img
												src={loginIcon}
												alt="loginIcon"
												style={{
													display: 'flex',
													width: '25px',
													height: '25px',
												}}
											/>
											<p
												style={{
													display: 'flex',
													width: '50px',
													// alignItems: 'center',
													// textAlign: 'center',
													fontSize: '13px',
													marginLeft: '5px',
												}}
											>
												????????????
											</p>
										</button>
									</>
								)}
							</div>

							<ToggleMenuBox>
								<HBGToggleBtn onClick={onClickToggleMenu}>
									<img src={HBGIcon} alt="HbgToggle"></img>
								</HBGToggleBtn>

								<OnToggleList
									active={menuToggle}
									onMouseLeave={() => setMenuToggle(false)}
								>
									<div>
										<h1>??????</h1>
										<ul>
											<li onClick={onClickMoveIntroducePage}>???????????? </li>
											{/* <li onClick={onClickMoveIntroducePage}>??????????????? </li> */}
										</ul>
									</div>
									<div>
										<h1>???????????????</h1>
										<ul>
											<li onClick={onClickMovePortPolioPage}>
												??????????????? ??????
											</li>
											<li onClick={onClickMovePortPolioPage}>
												??????????????? ??????
											</li>
											<li onClick={onClickMovePortPolioPage}>
												??????????????? ??????
											</li>
										</ul>
									</div>
									<div>
										<h1>????????????</h1>
										<ul>
											<li>????????????</li>
											<li>?????? ??? ?????????</li>
										</ul>
									</div>
									<div>
										<h1>??????</h1>
										<ul>
											<li>???????????????</li>
											<li>????????? ?????????</li>
										</ul>
									</div>
									<div>
										<h1>????????????</h1>
										<ul>
											<li>????????????</li>
											<li>1:1 ??????</li>
											<li>????????? ??????</li>
										</ul>
									</div>
								</OnToggleList>
							</ToggleMenuBox>
						</RightBox>
					</HeaderContainer>
				</>
			)}
		</>
	);
}

export default Header;
