import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
		<div id="loginPage">
			<div className="loginPageForm">
				{onSign ? (
					<form className="registerForm">
						<input type="text" placeholder="name" />
						<input type="password" placeholder="password" />
						<input type="text" placeholder="email address" />
						<button> 아이디 생성 </button>
						<div className="formMessage">
							<p className="formMessageP">이미 회원이신가요 ? </p>
							<button onClick={onClickSign}>로그인</button>
						</div>
					</form>
				) : (
					<div>
						<form className="loginForm">
							<input type="text" placeholder="username" />
							<input type="password" placeholder="password" />
							<button>로그인</button>
							<div className="formMessage">
								<p className="formMessageP">아이디가 없으신가요 ?</p>
								<button onClick={onClickSign}> 회원가입 </button>
							</div>
						</form>
						<div>
							<br />
							<p className="formMessageP"> 소셜 로그인을 통한 간편 회원가입 </p>
							<br />
							<button id="Btn-kakao">
								<img
									src={kakaoBtn}
									alt="kakao login"
									onClick={kakaoLoginClickHandler}
								/>
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default LoginPage;
