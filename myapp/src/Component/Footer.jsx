import React from 'react';
import styled from 'styled-components';

export const FooterDiv = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 200px;
	box-sizing: border-box;
	background-color: #203864;
	color: white;
`;
const FooterMenu = styled.div`
	font-size: 50px;
	margin: 30px 30px 10px 30px;

	box-sizing: content-box;
	border-bottom: gray solid 2px;
`;
function Footer() {
	return (
		<FooterDiv>
			<FooterMenu> Footer </FooterMenu>
			<p style={{ fontSize: '20px', padding: '30px' }}>
				부산대학교 졸업 과제 - AOMD : 하이퍼레저 패브릭을 이용한 포트폴리오 관리 플랫폼
			</p>
		</FooterDiv>
	);
}

export default Footer;
