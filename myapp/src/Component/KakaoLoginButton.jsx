import kakaoBtn from '../Image/kakaoBtn.png';
import { useNavigate } from 'react-router-dom';

const KakaoLoginButton = () => {
	const navigate = useNavigate();
	const { Kakao } = window;
	const kakaoLoginClickHandler = () => {
		const Swal = require('sweetalert2');
		try {
			return new Promise((resolve, reject) => {
				if (!Kakao) {
					Swal.fire({
						title: 'Fail',
						text: '카카오 인스턴스가 없습니다',
						icon: 'fail',
						confirmButtonText: 'OK',
						heightAuto: false,
					});
					reject('카카오 인스턴스가 없다');
				}
				Kakao.Auth.login({
					success: auth => {
						console.log('정상 로그인', auth);
						console.log('access token = ', auth['access_token']);
						Swal.fire({
							title: 'Login',
							text: '로그인 성공',
							icon: 'success',
							confirmButtonText: 'OK',
							heightAuto: false,
						});

						// setIsLogin(true);
						// navigate('/main');
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
	return (
		<button
			style={{
				margin: '5px',
				padding: '0',
				border: 'none',
				cursor: 'pointer',
				backgroundColor: 'white',
			}}
		>
			<img
				src={kakaoBtn}
				alt="kakao login"
				onClick={kakaoLoginClickHandler}
				style={{ width: '140px', height: '40px' }}
			/>
		</button>
	);
};
export default KakaoLoginButton;
