import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Footer from 'Component/Footer';

import contentImage from 'Image/contentImg.png';
import contentBack from 'Image/contentBack.svg';
import contentChar from 'Image/contentChar.svg';
import contentFolder from 'Image/contentFolder.svg';
import upArrow from 'Image/upArrow.svg';
import down_arrow_icon1 from 'Image/down-arrow_icon1.svg';

import './FirstPage.css';

const FirstPageContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	overflow-y: scroll;
`;
const ContentBox1 = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;

	padding: 15% 15% 0% 15%;
	box-sizing: border-box;
`;
const TextBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	color: black;
	width: 70%;
	height: 100%;
	z-index: 6;

	& h1 {
		font-size: 60px;
		font-weight: 900;
		margin-bottom: 15px;
	}

	& p {
		font-size: 20px;
		margin-bottom: 10px;
		font-weight: bolder;
	}

	& button {
		background: #203864;
		color: white;
		width: 300px;
		height: 40px;
		margin-top: 20px;
		border-radius: 20px;
	}
`;
const MoveTopBtn = styled.button`
	display: ${({ active }) => {
		if (active) {
			return 'block';
		}
		return 'none';
	}};
	border: none;
	position: fixed;
	right: 80px;
	bottom: 30px;
	background-color: #203864;
	border-radius: 50px;
	width: 50px;
	height: 50px;
	cursor: pointer;

	& img {
		filter: invert(95%) sepia(100%) saturate(0%) hue-rotate(62deg) brightness(103%)
			contrast(105%);
		width: 19px;
	}
`;
const MovePortPolioBtn = styled.button`
	cursor: pointer;
	font-weight: bold;
	&: hover {
		background: #dfdfdf;
		color: black;
	}
`;
function FirstPage() {
	const navigate = useNavigate();

	const [ScrollValueOfY, setScrollValueOfY] = useState(0);
	// const [MoveToTopBtnStatus, setMoveToTopBtnStatus] = useState(false);
	const [MoveToTopBtnStatus, setMoveToTopBtnStatus] = useState(true);

	const moveToTopFunc = () => {
		setMoveToTopBtnStatus(false); // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
		setScrollValueOfY(0); // ScrollY 의 값을 초기화

		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	const onClickMovePortPolioPage = () => {
		navigate('/portpoliopage');
	};
	// 로그인 체크 안하고 바로 이동 => 나중에 로그인 체크하게 해야 함

	const scrollCheckFunc = () => {
		setScrollValueOfY(window.pageYOffset);
		if (ScrollValueOfY > 150) {
			setMoveToTopBtnStatus(true);
		} else {
			setMoveToTopBtnStatus(false);
		}
	};
	const animationToggleFunc = () => {
		var reveals = document.querySelectorAll('.reveal');
		var reveals1 = document.querySelectorAll('.reveal1');
		var reveals2 = document.querySelectorAll('.reveal2');
		var reveals3 = document.querySelectorAll('.reveal3');

		var windowHeight = 0;
		var elementTop = 0;
		var elementVisible = 0;

		for (var i = 0; i < reveals.length; i++) {
			windowHeight = window.innerHeight;
			elementTop = reveals[i].getBoundingClientRect().top;
			elementVisible = 10;

			if (elementTop < windowHeight - elementVisible) {
				reveals[i].classList.add('active');
			}
		}
		for (i = 0; i < reveals1.length; i++) {
			windowHeight = window.innerHeight;
			elementTop = reveals1[i].getBoundingClientRect().top;
			elementVisible = 30;
			if (elementTop < windowHeight - elementVisible) {
				reveals1[i].classList.add('active');
			}
		}
		for (i = 0; i < reveals2.length; i++) {
			windowHeight = window.innerHeight;
			elementTop = reveals2[i].getBoundingClientRect().top;
			elementVisible = 50;
			if (elementTop < windowHeight - elementVisible) {
				reveals2[i].classList.add('active');
			}
		}
		for (i = 0; i < reveals3.length; i++) {
			windowHeight = window.innerHeight;
			elementTop = reveals3[i].getBoundingClientRect().top;
			elementVisible = 70;
			if (elementTop < windowHeight - elementVisible) {
				reveals3[i].classList.add('active');
			}
		}
	};

	useEffect(() => {
		// console.log(123);
		const watch = () => {
			window.addEventListener('scroll', scrollCheckFunc);
			window.addEventListener('scroll', animationToggleFunc);
		};
		watch();
		return () => {
			window.removeEventListener('scroll', scrollCheckFunc);
			window.removeEventListener('scroll', animationToggleFunc);
		};
	});

	return (
		<FirstPageContainer>
			<MoveTopBtn active={MoveToTopBtnStatus} onClick={moveToTopFunc}>
				<img src={upArrow} alt="upArrow"></img>
			</MoveTopBtn>

			<ContentBox1>
				<TextBox>
					<h1> 포트폴리오 관리 플랫폼 </h1>
					<p> 자신만의 개성있고 차별성있는 포트폴리오를 작성할 수 있습니다. </p>
					<p> 작성한 포트폴리오를 편하게 관리할 수 있습니다. </p>
					<MovePortPolioBtn onClick={onClickMovePortPolioPage}>
						포트폴리오 작성하러 가기 -------&gt;{' '}
					</MovePortPolioBtn>
				</TextBox>
				<div className="imageBox">
					<img src={contentBack} alt="contentImage" className="one" />
					<img src={contentChar} alt="contentImage" className="two" />
					<img src={contentFolder} alt="contentImage" className="three" />
				</div>
			</ContentBox1>

			<div className="right_box_down_icon">
				<img className="down_arrow_icon" alt="contentImage" src={down_arrow_icon1}></img>
			</div>
			<div className="contentBox2 ">
				<div className="contentBox2Text">
					<h1 className="reveal"> 포트폴리오를 한눈에 </h1>
					<h2 className="reveal1">다양한 사람들의 포트폴리오를 한눈에 볼 수 있습니다.</h2>
					<h3 className="reveal2">
						여러가지 포트폴리오를 작성해 한번에 관리할 수 있습니다.
					</h3>
					<h3 className="reveal2">
						다양한 활동과 이야기들로 개성있는 포트폴리오를 만들어보세요.
					</h3>
					<div className="reveal3">
						<img src={contentImage} alt="contentImage" style={{ width: '400px' }} />
					</div>
				</div>
			</div>
			<div className="contentBox2" style={{ background: 'white' }}>
				<div className="contentBox2Text">
					<h1 className="reveal"> 포트폴리오를 한눈에 </h1>
					<h2 className="reveal1">다양한 사람들의 포트폴리오를 한눈에 볼 수 있습니다.</h2>
					<h3 className="reveal2">
						여러가지 포트폴리오를 작성해 한번에 관리할 수 있습니다.
					</h3>
					<h3 className="reveal2">
						다양한 활동과 이야기들로 개성있는 포트폴리오를 만들어보세요.
					</h3>
					<div className="reveal3">
						<img src={contentImage} alt="contentImage" style={{ width: '400px' }} />
					</div>
				</div>
			</div>
			<div className="contentBox2 ">
				<div className="contentBox2Text">
					<h1 className="reveal"> 포트폴리오를 한눈에 </h1>
					<h2 className="reveal1">다양한 사람들의 포트폴리오를 한눈에 볼 수 있습니다.</h2>
					<h3 className="reveal2">
						여러가지 포트폴리오를 작성해 한번에 관리할 수 있습니다.
					</h3>
					<h3 className="reveal2">
						다양한 활동과 이야기들로 개성있는 포트폴리오를 만들어보세요
					</h3>
					<div className="reveal3">
						<img src={contentImage} alt="contentImage" style={{ width: '400px' }} />
					</div>
				</div>
			</div>

			<Footer />
		</FirstPageContainer>
	);
}

export default FirstPage;
