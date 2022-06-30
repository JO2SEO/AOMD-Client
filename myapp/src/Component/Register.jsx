import '../Style/Page/LoginPage.css';
import { useNavigate } from 'react-router-dom';

function Register() {
	const navigate = useNavigate();

	const onClickSign = () => {
		navigate('/');
	};
	return (
		<div id="loginPage">
			<div className="loginPageForm">
				<form className="registerForm">
					<input type="text" placeholder="name" />
					<input type="password" placeholder="password" />
					<input type="text" placeholder="email address" />
					<button> 아이디 생성 </button>
					<div className="formMessage">
						<p className="formMessageP">이미 회원이신가요 ? </p>
						<button onClick={onClickSign}>로그인하러 가기</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Register;
