import React from 'react';
import queryString from 'query-string';
import Axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { SuccessLogin } from 'Redux/LoginCheck';
import './OauthPage.css';

// import { TestURL } from 'domainBox';
import { KakaoRedirectURL } from 'domainBox';
// import { ServerURL } from 'domainBox';

function OauthPage() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const location = useLocation();
	console.log('location in Oauth page = ', location);

	const params = new URLSearchParams(window.location.search);
	// console.log('params = ', params);
	let qs = queryString.parse(window.location.search);
	// console.log('인가코드 = ', qs.code);
	// qs = qs.code;

	// axios.post('/user', {
	// 	firstName: 'Fred',
	// 	lastName: 'Flintstone',
	// });

	Axios.post(KakaoRedirectURL, {
		code: qs.code,

		// 카카오 콜백 UrL 아직 완벽하게 이해하지 못해서 그런지...
		// OauthPage로 리다이렉트가 바로 안되는거 같다.
		// 쿠키가 있을 때는 됐다가 또 안됐다가 한다.
		// 서버가 닫혀있을 때 토큰을 보낼 수가 없어서 그런거 같다.

		callbackUrl: 'http://15.164.231.60:3000/oauth',
		// callbackUrl: 'http://localhost:3000/oauth',
	})
		.then(response => {
			// console.log('response = ', response);
			dispatch(SuccessLogin(true));
			// console.log('성공적으로 로그인되었습니다');
			navigate('/');
		})
		// .then(response =>   {
		// 	console.log("response = ", response);
		// 	dispatch(SuccessLogin(true));
		// 	console.log("성공적으로 로그인되었습니다.")
		// 	navigate('/');
		// })
		.catch(error => {
			console.log('error = ', error);
		});

	return (
		<div
			style={{
				backgroundColor: 'blue',
			}}
		>
			-- Oauth Page --
			<div> 로딩 중 ...</div>
		</div>
	);
}

export default OauthPage;
