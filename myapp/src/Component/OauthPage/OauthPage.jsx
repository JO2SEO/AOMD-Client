import React from 'react';
// import styled from 'styled-components';
import queryString from 'query-string';
import './OauthPage.css';
import Axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SuccessLogin } from '../../Redux/LoginCheck';

function OauthPage() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const location = useLocation();
	console.log('location = ', location);

	const params = new URLSearchParams(window.location.search);
	console.log('params = ', params);
	let qs = queryString.parse(window.location.search);
	console.log('인가코드 = ', qs.code);
	qs = qs.code;

	Axios.get('http://aomd.kro.kr:8080/api/v1/auth/kakao', {
		// http://aomd.kro.kr:8080/api/v1/auth/kakao?code=
		params: {
			code: qs,
		},
	})
		.then(response => {
			console.log('response = ', response);
			dispatch(SuccessLogin(true));
			navigate('/AOMD-Client');
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
