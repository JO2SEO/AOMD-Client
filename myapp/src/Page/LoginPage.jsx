import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import GoogleLoginButton from '../Component/GoogleLoginButton';
import KakaoLoginButton from '../Component/KakaoLoginButton';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SuccessLogin } from '../Redux/LoginCheck';

export const LoginPageDiv = styled.div`
	height: 100%;
	width: 100%;
	box-sizing: content-box;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const LoginPageForm = styled.div`
	position: relative;
	z-index: 1;
	max-width: 300px;
	padding: 45px;
	text-align: center;
	box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
	box-sizing: content-box;
`;
export const LoginFormInput = styled.input`
	font-family: 'Roboto', sans-serif;
	outline: 0;
	background: #f2f2f2;
	width: 100%;
	border: 0;
	margin: 0 0 15px;
	padding: 15px;
	box-sizing: border-box;
	font-size: 14px;
`;
export const FormButton = styled.button`
	font-family: 'Roboto', sans-serif;
	text-transform: uppercase;
	outline: 0;
	background: black;

	width: 100%;
	border: 0;
	padding: 15px;
	color: #ffffff;
	font-size: 14px;
	-webkit-transition: all 0.3 ease;
	transition: all 0.3 ease;
	cursor: pointer;

	&:hover {
		// background: #43a047;
		background: gray;
		color: black;
		font-weight: bolder;
	}
	&:focus {
		background: gray;
		color: black;
		font-weight: bolder;
	}
`;

export function LoginPage() {
	const [logintext, setlogintext] = useState({ id: '', pwd: '' });
	// const Swal = require('sweetalert2');
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const onClickLogin = e => {
		if (logintext.id === '1' && logintext.pwd === '1') {
			// Swal.fire({
			// 	title: 'Login',
			// 	text: '로그인 성공',
			// 	icon: 'success',
			// 	confirmButtonText: 'OK',
			// 	heightAuto: false,
			// });
			dispatch(SuccessLogin(true));

			navigate('/AOMD-Client');
		}
	};

	const onClickSign = () => {
		navigate('/registerpage');
	};

	return (
		<LoginPageDiv>
			<LoginPageForm>
				<form>
					<LoginFormInput
						type="text"
						placeholder="id"
						onChange={e => setlogintext({ ...logintext, id: e.target.value })}
					/>
					<LoginFormInput
						type="password"
						placeholder="password"
						autoComplete="off"
						onChange={e => setlogintext({ ...logintext, pwd: e.target.value })}
					/>
					<FormButton onClick={onClickLogin}> 로그인 </FormButton>
					<div style={{ color: '#757575', fontSize: '12px' }}>
						<p style={{ padding: '15px' }}>아이디가 없으신가요 ?</p>
						<FormButton onClick={onClickSign}> 회원가입 </FormButton>
					</div>
				</form>
				<div>
					<div style={{ color: '#757575', fontSize: '12px' }}>
						<p style={{ padding: '15px' }}> 소셜 로그인을 통한 간편 회원가입 </p>
					</div>
					<div style={{ display: 'flex' }}>
						<KakaoLoginButton />
						<GoogleLoginButton />
					</div>
				</div>
			</LoginPageForm>
		</LoginPageDiv>
	);
}

export default LoginPage;
