import { useState } from 'react';
import '../Style/Page/LoginPage.css';

function LoginPage() {
	const [onSign, setOnSign] = useState(false);

	function onClickSign() {
		setOnSign(!onSign);
	}

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
					<form className="login-form">
						<input type="text" placeholder="username" />
						<input type="password" placeholder="password" />
						<button>login</button>
						<p className="message">
							Not registered?
							<button onClick={onClickSign}>Create an account</button>
						</p>
					</form>
				)}
			</div>
		</div>
	);
}

export default LoginPage;
