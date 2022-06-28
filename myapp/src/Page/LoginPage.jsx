import { useState } from 'react';
import { useNavigate, useHistory } from 'react-router-dom';
import kakaoBtn from '../Image/kakaoBtn.png';
import '../Style/Page/LoginPage.css';

function LoginPage() {
	const { Kakao } = window;
	const navigate = useNavigate();
	// const [isLogin, setIsLogin] = useState(false);
	const kakaoLoginClickHandler = () => {
		try {
			return new Promise((resolve, reject) => {
				if (!Kakao) {
					reject('카카오 인스턴스가 없다');
				}
				Kakao.Auth.login({
					success: auth => {
						console.log('정상 로그인', auth);
						alert('정상 로그인');
						// setIsLogin(true);
						navigate('/main');
					},
					fail: err => {
						console.error(err);
					},
				});
			});
		} catch (err) {
			console.error(err);
		}
	};

	const [onSign, setOnSign] = useState(false);
	const onClickSign = () => {
		setOnSign(!onSign);
	};

	return (
		<div id="login-page">
			<div className="form">
				{onSign ? (
					<form className="register-form">
						<input type="text" placeholder="name" />
						<input type="password" placeholder="password" />
						<input type="text" placeholder="email address" />
						<button>create</button>
						<p className="message">
							Already registered?
							<button onClick={onClickSign}>Sign In</button>
						</p>
					</form>
				) : (
					<div>
						<form className="login-form">
							<input type="text" placeholder="username" />
							<input type="password" placeholder="password" />
							<button>login</button>
							<p className="message">
								Not registered?
								<button onClick={onClickSign}>Create an account</button>
							</p>
						</form>
						<div>
							<br />
							<p> 소셜 로그인 </p>
							<br />
							<button id="Btn-kakao">
								<img src={kakaoBtn} onClick={kakaoLoginClickHandler} />
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default LoginPage;
