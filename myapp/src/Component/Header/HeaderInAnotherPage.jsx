import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { selectLoginData, SuccessLogout } from 'Redux/LoginCheck';
import AOMD_logo from 'Image/AOMD_logo.svg';
import HBGIcon from 'Image/HBGIcon.svg';
import loginIcon from 'Image/loginIcon.svg';

import './Header.css';

import { OnToggleList } from './Header';
import Category from './Category';

const HeaderInAnotherPage = () => {
	const [infoLocation, setInfoLocation] = useState('');
	const [loginState, setLoginState] = useState(false);
	const [menuToggle, setMenuToggle] = useState(false);

	const location = useLocation();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		setInfoLocation(location.pathname);
	}, [location]);

	const currentLogin = useSelector(selectLoginData);

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

	return (
		<>
			{infoLocation === '/portpolio' ? (
				<></>
			) : (
				<div className="HeaderContainer">
					<div
						className="LeftBox"
						style={{
							width: '40%',
						}}
					>
						<div className="MoveHomeBtn" onClick={onClickMoveHome}>
							<img src={AOMD_logo} alt="logoImg" style={{ width: '80%' }} />
						</div>
					</div>

					<div
						style={{
							display: 'flex',
							width: '30%',
						}}
					/>

					<div className="RightBox">
						<div
							style={{
								width: '110px',
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
											로그아웃
										</p>
									</button>
								</>
							)}
						</div>

						<div className="ToggleMenuBox">
							<button className="HBGToggleBtn" onClick={onClickToggleMenu}>
								<img src={HBGIcon} alt="HbgToggle"></img>
							</button>

							<OnToggleList
								className="OnToggleList"
								active={menuToggle}
								onMouseLeave={() => setMenuToggle(false)}
							>
								<Category loginState={loginState} />
							</OnToggleList>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
export default HeaderInAnotherPage;
