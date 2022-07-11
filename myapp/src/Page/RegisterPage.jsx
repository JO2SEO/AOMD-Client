import { useNavigate } from 'react-router-dom';
import { LoginPageDiv, LoginPageForm, LoginFormInput, FormButton } from './LoginPage';

function RegisterPage() {
	const navigate = useNavigate();

	const onClickSign = () => {
		navigate('/login');
	};
	return (
		<LoginPageDiv>
			<LoginPageForm>
				<form>
					<LoginFormInput type="text" placeholder="name" />
					<LoginFormInput type="password" placeholder="password" autoComplete="off" />
					<LoginFormInput type="text" placeholder="email address" />
					<FormButton> 아이디 생성 </FormButton>
					<div style={{ color: '#757575', fontSize: '12px' }}>
						<p style={{ padding: '15px' }}>이미 회원이신가요 ? </p>
						<FormButton onClick={onClickSign}>로그인하러 가기</FormButton>
					</div>
				</form>
			</LoginPageForm>
		</LoginPageDiv>
	);
}

export default RegisterPage;
