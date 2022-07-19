import React from 'react';
// import styled from 'styled-components';
import queryString from 'query-string';

function OauthPage() {
	const params = new URLSearchParams(window.location.search);
	console.log('params = ', params);
	let qs = queryString.parse(window.location.search);
	console.log('인가코드 = ', qs);
	return (
		<div>
			-- Oauth Page --
			<div> 로딩 중 ...</div>
			{/* <div>{params}</div> */}
		</div>
	);
}

export default OauthPage;
