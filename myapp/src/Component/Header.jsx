import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
	z-index: 2;
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
	}
	& div h1 {
		margin-bottom: 10px;
		font-size: 17px;
		font-weight: bolder;
	}
	& div ul {
		display: flex;
		flex-direction: column;
	}
	& div li {
		width: 100px;
		text-align: left;
		margin-top: 10px;
		font-size: 15px;
		cursor: pointer;
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
	z-index: 2;

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
function Header() {
	const [loginState, setLoginState] = useState(false);
	const [menuToggle, setMenuToggle] = useState(false);

	const currentLogin = useSelector(selectLoginData);
	const dispatch = useDispatch();
	const navigate = useNavigate();

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
		navigate('/AOMD-Client');
	};

	const onClickMoveLogin = () => {
		navigate('/loginpage');
	};

	const onClickLogout = () => {
		dispatch(SuccessLogout(true));
		navigate('/AOMD-Client');
	};

	const onClickMoveIntroducePage = () => {
		navigate('/introducepage');
	};

	const onClickMovePortPolioPage = () => {
		if (loginState) {
			navigate('/dragdroppage');
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
		navigate('/enterprisepage');
	};
	const onClickMovePractice = () => {
		navigate('/practicepage');
	};

	return (
		<HeaderContainer>
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
					{/* <img src={AOMD_logo_light} alt="logoImg" style={{ width: '50%' }} /> */}
				</MoveHomeBtn>
				<button style={{ width: '80px', height: '20px' }} onClick={onClickMovePractice}>
					CSS 연습
				</button>
			</div>

			<div
				style={{
					display: 'flex',
					width: '30%',
					justifyContent: 'flex-start',
				}}
			>
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
										<li onClick={onClickMoveIntroducePage}>블록체인 </li>
										{/* <li onClick={onClickMoveIntroducePage}>포트폴리오 </li> */}
									</ul>
								</div>
								<div>
									<h1>포트폴리오</h1>
									<ul>
										<li onClick={onClickMovePortPolioPage}>포트폴리오 목록</li>
										<li onClick={onClickMovePortPolioPage}>포트폴리오 작성</li>
										<li onClick={onClickMovePortPolioPage}>포트폴리오 관리</li>
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
										<li onClick={onClickMoveIntroducePage}>블록체인 </li>
										{/* <li onClick={onClickMoveIntroducePage}>포트폴리오 </li> */}
									</ul>
								</div>
								<div>
									<h1>포트폴리오</h1>
									<ul>
										<li onClick={onClickMovePortPolioPage}>포트폴리오 목록</li>
										<li onClick={onClickMovePortPolioPage}>포트폴리오 작성</li>
										<li onClick={onClickMovePortPolioPage}>포트폴리오 관리</li>
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
			</div>
		</HeaderContainer>
	);
}

export default Header;
