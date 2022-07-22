import React from 'react';
import queryString from 'query-string';
import Axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { SuccessLogin } from 'Redux/LoginCheck';
import './OauthPage.css';

function OauthPage() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const location = useLocation();
	console.log('location in Oauth page = ', location);

	const params = new URLSearchParams(window.location.search);
	console.log('params = ', params);
	let qs = queryString.parse(window.location.search);
	console.log('인가코드 = ', qs.code);
	qs = qs.code;

	Axios.post('http://aomd.kro.kr:8080/api/v1/auth/kakao', {
		// http://aomd.kro.kr:8080/api/v1/auth/kakao?code=
		params: {
			code: qs,
			callbackUrl: 'https://jo2seo.github.io/oauth',
		},
	})
		.then(response => {
			console.log('response = ', response);
			dispatch(SuccessLogin(true));
			navigate('/');
		})
		.catch(error => {
			console.log('error = ', error);
		});

	return (
		<div>
			-- Oauth Page --
			<div> 로딩 중 ...</div>
			{/* <div class="loading-container">
				<div class="loading"></div>
				<div id="loading-text">loading</div>
			</div> */}
		</div>
	);
}

export default OauthPage;
