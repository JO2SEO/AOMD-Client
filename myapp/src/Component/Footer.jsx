import React from 'react';
import styled from 'styled-components';

export const FooterDiv = styled.div`
	display: flex;
	flex-direction: column;
	height: 5%;
	box-sizing: border-box;
`;

function Footer() {
	return (
		<FooterDiv>
			<h1> Footer </h1>
			<p> 부산대학교 졸업 과제 - AOMD : 하이퍼레저 패브릭을 이용한 포트폴리오 관리 플랫폼</p>
		</FooterDiv>
	);
}

export default Footer;
