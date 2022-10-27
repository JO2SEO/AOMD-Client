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
	console.log('params = ', params);
	let qs = queryString.parse(window.location.search);
	console.log('인가코드 = ', qs.code);
	// qs = qs.code;

	// axios.post('/user', {
	// 	firstName: 'Fred',
	// 	lastName: 'Flintstone',
	// });

	Axios.post(KakaoRedirectURL, {
		code: qs.code,

		callbackUrl: 'http://15.164.231.60:3000/oauth',
		// callbackUrl: 'http://localhost:3000/oauth',
	})
		.then(response => {
			console.log('response = ', response);
			dispatch(SuccessLogin(true));
			console.log('성공적으로 로그인되었습니다');
			navigate('/');
		})
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
