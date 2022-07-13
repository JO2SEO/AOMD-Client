import FirstPageImage from '../Image/FirstPageImg.png';
import upArrow from '../Image/upArrow.svg';
import { useState } from 'react';
import styled from 'styled-components';

const FirstPageDiv = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	overflow-y: scroll;
`;

const FristPageBox = styled.div`
	display: flex;
	flex-direction: row;
`;
const LeftBox = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
`;

const TextBox = styled.div`
	display: flex;
	flex-direction: column;
	padding: 100px 0px 0px 100px;

	& h1 {
		font-weight: bold;
		font-size: 60px;
		margin-top: 20px;
	}
	& p {
		width: 85%;
		font-size: 20px;
		margin-top: 30px;
	}
`;

const RightBox = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
`;

export const MoveTopBtn = styled.button`
	display: ${({ active }) => {
		if (active) {
			return 'block';
		}
		return 'none';
	}};
	color: black;
	position: fixed;
	right: 100px;
	bottom: 30px;
	background-color: rgb(180, 180, 180);
	border-radius: 10px;
	width: 70px;
	height: 50px;
	cursor: pointer;
`;

function FirstPage() {
	const [ScrollValueOfY, setScrollValueOfY] = useState(0);
	// 스크롤값을 저장하기 위한 state

	const [MoveToTopBtnStatus, setMoveToTopBtnStatus] = useState(false);
	// 버튼 상태

	const moveToTop = () => {
		let div = document.querySelector('#FirstPageDiv');
		// console.log('moveToTopBtn Click');
		div.scrollTop = 0;
		setScrollValueOfY(0); // ScrollY 의 값을 초기화
		setMoveToTopBtnStatus(false); // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
	};

	const onScroll = e => {
		// setScrollValueOfY(window.pageYOffset);
		let div = document.querySelector('#FirstPageDiv');
		// console.log('div = ', div.scrollTop);
		setScrollValueOfY(div.scrollTop);

		if (ScrollValueOfY > 150) {
			// 100 이상이면 버튼이 보이게
			setMoveToTopBtnStatus(true);
		} else {
			// 100 이하면 버튼이 사라지게
			setMoveToTopBtnStatus(false);
		}
	};

	return (
		<FirstPageDiv id="FirstPageDiv" onScroll={onScroll}>
			<FristPageBox style={{ marginTop: '50px' }}>
				<LeftBox>
					<TextBox>
						<h1> Archive Of My Data </h1>
						<h1> 포트폴리오 관리 플랫폼 </h1>
						<p>
							AOMD는 단순한 학습 이력 관리 플랫폼이 아닙니다. 블록체인 네트워크를 통해
							당신의 데이터를 안전하게 보관해드립니다.
						</p>
					</TextBox>
				</LeftBox>
				<RightBox>
					<div style={{ padding: '40px 0px 0px 40px' }}>
						<img
							src={FirstPageImage}
							alt="kakao login"
							style={{ width: '550px', height: '350px' }}
						/>
					</div>
				</RightBox>
			</FristPageBox>
			<FristPageBox style={{ margin: '100px 0px 300px 0px' }}>
				<LeftBox style={{ padding: '50px' }}>
					<p style={{ fontSize: '50px', fontWeight: 'bold' }}> 포트폴리오란? </p>
					<p style={{ marginTop: '50px', fontSize: '20px' }}>
						AOMD는 단순한 학습 이력 관리 플랫폼이 아닙니다. 블록체인 네트워크를 통해
						당신의 데이터를 안전하게 보관해드립니다.
					</p>
				</LeftBox>
				<RightBox style={{ padding: '50px' }}>
					<p style={{ fontSize: '50px', fontWeight: 'bold' }}>
						포트폴리오 관리 플랫폼이란?
					</p>
					<p style={{ marginTop: '50px', fontSize: '20px' }}>
						AOMD는 단순한 학습 이력 관리 플랫폼이 아닙니다. 블록체인 네트워크를 통해
						당신의 데이터를 안전하게 보관해드립니다.
					</p>
				</RightBox>
			</FristPageBox>
			<div style={{ padding: '50px' }}>
				<img alt="move to top" src={upArrow}></img>
				<img alt="move to top" src={upArrow}></img>
				<img alt="move to top" src={upArrow}></img>
			</div>
			<MoveTopBtn active={MoveToTopBtnStatus} onClick={moveToTop}>
				<img src={upArrow} alt="upArrow" style={{ width: '20px' }}></img>
			</MoveTopBtn>
		</FirstPageDiv>
	);
}

export default FirstPage;
