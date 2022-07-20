import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import styled from 'styled-components';
import { selectLoginData, SuccessLogout } from '../Redux/LoginCheck';
import { useSelector, useDispatch } from 'react-redux';
// import logoImg from '../Image/logoImg.png';
import AOMD_logo from '../Image/AOMD_logo.svg';
// import AOMD_logo_light from '../Image/AOMD_logo_light.svg';
// import HbgToggle from '../Image/HbgIcon.svg';
// import HbgToggle from '../Image/HbgIcon.svg';
import HBGIcon from '../Image/HBGIcon.svg';
import loginIcon from '../Image/loginIcon.svg';

export const HeaderContainer = styled.div`
	width: 100%;
	height: 95px;
	padding-botton: 100px;
	display: flex;
	flex-direction: row;
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
	top: 110px;
	z-index: 7;
	padding: 10px;
	width: 100vw;
	height: 170px;
	background-color: white;
	border-bottom: black 3px solid;
	border: black 3px solid;

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
	justify-content: flex-end;

	& p {
		display: flex;
		font-size: 15px;
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
		navigate('/AOMD-Client');
	};
	const onClickMoveLogin = () => {
		setMenuToggle(false);
		navigate('/loginpage');
	};
	const onClickLogout = () => {
		setMenuToggle(false);
		dispatch(SuccessLogout(true));
		navigate('/AOMD-Client');
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
			// Swal.fire({
			// 	title: 'Login',
			// 	text: '로그인을 먼저 하셔야 합니다',
			// 	icon: 'success',
			// 	confirmButtonText: 'OK',
			// 	heightAuto: false,
			// });
			navigate('/loginpage');
		}
	};
	const onClickMoveEnterprise = () => {
		setMenuToggle(false);
		navigate('/enterprisepage');
	};
	const onClickMovePractice = () => {
		setMenuToggle(false);
		navigate('/practicepage');
	};

	return (
		<>
			{infoLocation === '/AOMD-Client' ? (
				<>
					<HeaderContainer style={{ background: 'white' }}>
						<LeftBox
							style={{
								width: '30%',
							}}
							onClick={onClickMoveEnterprise}
						>
							<p>영업팀에 문의하기</p>
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
							<button
								style={{ width: '80px', height: '20px' }}
								onClick={onClickMovePractice}
							>
								CSS 연습
							</button>
						</div>

						<RightBox>
							<div
								style={{
									width: '110px',
									height: '40px',
									background: 'white',
									cursor: 'pointer',
									display: 'flex',
									borderRadius: '10px',
									backgroundColor: 'white',
									marginTop: '25px',
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
											<p
												style={{
													display: 'flex',
													alignItems: 'center',
													fontSize: '15px',
													marginLeft: '10px',
												}}
											>
												로그인
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
											<p
												style={{
													display: 'flex',
													alignItems: 'center',
													fontSize: '15px',
													marginLeft: '10px',
												}}
											>
												로그아웃
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
										<h1>소개</h1>
										<ul>
											<li onClick={onClickMoveIntroducePage}>블록체인 </li>
											<li onClick={onClickMoveIntroducePage}>체인코드 </li>
										</ul>
									</div>
									<div>
										<h1>포트폴리오</h1>
										<ul>
											<li onClick={onClickMovePortPolioPage}>
												포트폴리오 목록
											</li>
											<li onClick={onClickMovePortPolioPage}>
												포트폴리오 작성
											</li>
											<li onClick={onClickMovePortPolioPage}>
												포트폴리오 관리
											</li>
										</ul>
									</div>
									<div>
										<h1>커뮤니티</h1>
										<ul>
											<li>커뮤니티</li>
											<li>만들 수 있겠나</li>
										</ul>
									</div>
									<div>
										<h1>설정</h1>
										<ul>
											<li>마이페이지</li>
											<li>관리자 페이지</li>
										</ul>
									</div>
									<div>
										<h1>고객센터</h1>
										<ul>
											<li>공지사항</li>
											<li>1:1 문의</li>
											<li>이메일 문의</li>
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
								width: '30%',
							}}
						>
							<MoveHomeBtn onClick={onClickMoveHome}>
								<img src={AOMD_logo} alt="logoImg" style={{ width: '50%' }} />
							</MoveHomeBtn>
						</LeftBox>

						<div
							style={{
								display: 'flex',
								width: '40%',
							}}
						></div>

						<RightBox>
							{!loginState ? (
								<>
									<div
										style={{
											width: '110px',
											height: '40px',
											background: 'white',
											cursor: 'pointer',
											display: 'flex',
											borderRadius: '10px',
											backgroundColor: 'white',
											marginTop: '25px',
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
											}}
										>
											로그인
										</p>
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
												<h1>소개</h1>
												<ul>
													<li onClick={onClickMoveIntroducePage}>
														블록체인{' '}
													</li>
													{/* <li onClick={onClickMoveIntroducePage}>포트폴리오 </li> */}
												</ul>
											</div>
											<div>
												<h1>포트폴리오</h1>
												<ul>
													<li onClick={onClickMovePortPolioPage}>
														포트폴리오 목록
													</li>
													<li onClick={onClickMovePortPolioPage}>
														포트폴리오 작성
													</li>
													<li onClick={onClickMovePortPolioPage}>
														포트폴리오 관리
													</li>
												</ul>
											</div>
											<div>
												<h1>커뮤니티</h1>
												<ul>
													<li>커뮤니티</li>
													<li>만들 수 있겠나</li>
												</ul>
											</div>
											<div>
												<h1>설정</h1>
												<ul>
													<li>마이페이지</li>
													<li>관리자 페이지</li>
												</ul>
											</div>
											<div>
												<h1>고객센터</h1>
												<ul>
													<li>공지사항</li>
													<li>1:1 문의</li>
													<li>이메일 문의</li>
												</ul>
											</div>
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
											backgroundColor: 'white',
											marginTop: '25px',
										}}
									>
										<button
											onClick={onClickLogout}
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
											}}
										>
											로그아웃
										</p>
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
												<h1>소개</h1>
												<ul>
													<li onClick={onClickMoveIntroducePage}>
														블록체인{' '}
													</li>
													{/* <li onClick={onClickMoveIntroducePage}>포트폴리오 </li> */}
												</ul>
											</div>
											<div>
												<h1>포트폴리오</h1>
												<ul>
													<li onClick={onClickMovePortPolioPage}>
														포트폴리오 목록
													</li>
													<li onClick={onClickMovePortPolioPage}>
														포트폴리오 작성
													</li>
													<li onClick={onClickMovePortPolioPage}>
														포트폴리오 관리
													</li>
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
								</>
							)}
						</RightBox>
					</HeaderContainer>
				</>
			)}
		</>
	);
}

export default Header;
