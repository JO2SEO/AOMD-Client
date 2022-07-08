import { useNavigate } from 'react-router-dom';
import upArrow from '../Image/upArrow.svg';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const MoveTopBtn = styled.button`
	display: ${({ active }) => {
		if (active) {
			return 'block';
		}
		return 'hidden';
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
	const [MoveToTopBtnStatus, setMoveToTopBtnStatus] = useState(false); // 버튼 상태

	const moveToTop = () => {
		document.documentElement.scrollTop = 0;
		console.log('moveToTopBtn Click');
		setScrollValueOfY(0); // ScrollY 의 값을 초기화
		setMoveToTopBtnStatus(false); // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
	};

	const handleScrollValueOfY = () => {
		setScrollValueOfY(window.pageYOffset);
		console.log('window 스크롤 값을 <ScrollValueOfY> state에 저장');
		console.log(
			` \n Scroll Event - 5
		      \n window.pageYOffset = ${window.pageYOffset}
		      \n ScrollValueOfY = ${ScrollValueOfY}`
		);

		if (ScrollValueOfY > 50) {
			// 100 이상이면 버튼이 보이게
			setMoveToTopBtnStatus(true);
		} else {
			// 100 이하면 버튼이 사라지게
			setMoveToTopBtnStatus(false);
		}
	};

	useEffect(() => {
		// 그냥 state 조건 없이 바로 실행?
		const currentScrollState = () => {
			// console.log("\n Scroll Event - 3, \n state 조건 없이 웹 로드 되면 바로 이 함수 호출, ")
			// console.log("\n Scroll Event - 4, \n 현재 scroll 값을 저장하는 이벤트 리스너 함수 호출 ")

			window.addEventListener('scroll', handleScrollValueOfY);
		};

		console.log('\n Scroll Event - 1 , \n state 조건 없이 웹 로드 되면 바로 실행, ');
		console.log('\n Scroll Event - 2 , \n addEventListener 함수를 실행 ');
		currentScrollState(); // addEventListener 함수를 실행
		console.log('@@@@@@@@@@@@@');

		return () => {
			window.removeEventListener('scroll', handleScrollValueOfY);
			// addEventListener 함수를 삭제
			// 지금 같이 스크롤을 사용하는 경우 처럼 한 번 실행하는 것이 아닌 여러번
			// addEventListener를 사용할 때에는 removeEventListener를 꼭 해준다.
			// 그렇지 않으면 여러번 호출 되고, 메모리에 gabarge collect
		};
	});
	useEffect(() => {
		console.log('스크롤되면 제일 처음, 스크롤 이벤트 발생 \n ScrollY is ', ScrollValueOfY);
		console.log(`스크롤되면 제일 처음, 스크롤 이벤트 발생 \n ScrollY is ${ScrollValueOfY}`);
		// ScrollY가 변화할때마다 값을 콘솔에 출력
	}, [ScrollValueOfY]);

	return (
		<MainPageDiv>
			<a name="moveToTop"></a>

			<div>
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
				{/* <MoveTopBtn active={MoveToTopBtnStatus} onClick={moveToTop} href="moveToTop"> */}
			</div>
			<MoveTopBtn onClick={moveToTop} href="moveToTop">
				<img src={upArrow} alt="upArrow" style={{ width: '20px' }}></img>
			</MoveTopBtn>
		</MainPageDiv>
	);
}

export default MainPage;
