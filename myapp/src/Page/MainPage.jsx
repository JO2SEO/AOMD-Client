import { useNavigate } from 'react-router-dom';
import upArrow from '../Image/upArrow.svg';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const MoveTopBtn = styled.button`
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

export const MainPageDiv = styled.div`
	width: 100%;
	height: 100%;
	border: 5px solid black;
	overflow-y: scroll;
`;

function MainPage() {
	const navigator = useNavigate();

	const onClickMoveDragDrop = () => {
		navigator('/dragdrop');
	};

	const onClickMoveDragDrop2 = () => {
		navigator('/dragdroptest');
	};

	const onClickMoveDragDrop3 = () => {
		navigator('/dragdroptestredux');
	};

	const [ScrollValueOfY, setScrollValueOfY] = useState(0);
	// 스크롤값을 저장하기 위한 state

	const [MoveToTopBtnStatus, setMoveToTopBtnStatus] = useState(false);
	// 버튼 상태

	const moveToTop = () => {
		let div = document.querySelector('#MainPageDiv');
		// console.log('moveToTopBtn Click');
		div.scrollTop = 0;
		setScrollValueOfY(0); // ScrollY 의 값을 초기화
		setMoveToTopBtnStatus(false); // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
	};

	const onScroll = e => {
		// setScrollValueOfY(window.pageYOffset);
		let div = document.querySelector('#MainPageDiv');
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
		<MainPageDiv id="MainPageDiv" onScroll={onScroll}>
			<div style={{ margin: '100px' }}>
				<h1> 드래그 앤 드랍 구현 - origin</h1>
				<button onClick={onClickMoveDragDrop}>move to DragDrop </button>
			</div>
			<div style={{ margin: '100px' }}>
				<h1> 드래그 앤 드랍 구현 - test</h1>
				<button onClick={onClickMoveDragDrop2}>move to DragDrop - test </button>
			</div>
			<div style={{ margin: '100px' }}>
				<h1> 드래그 앤 드랍 구현 - using Redux </h1>
				<button onClick={onClickMoveDragDrop3}>move to DragDrop Redux- test </button>
			</div>
			<img className="moveTopBtn" src={upArrow}></img>
			<img className="moveTopBtn" src={upArrow}></img>
			<img className="moveTopBtn" src={upArrow}></img>

			{/* <MoveTopBtn active={MoveToTopBtnStatus} onClick={moveToTop} href="moveToTop"> */}
			<MoveTopBtn active={MoveToTopBtnStatus} onClick={moveToTop}>
				<img src={upArrow} alt="upArrow" style={{ width: '20px' }}></img>
			</MoveTopBtn>
		</MainPageDiv>
	);
}

export default MainPage;
