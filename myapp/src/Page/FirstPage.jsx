import upArrow from '../Image/upArrow.svg';
import { useState } from 'react';
import styled from 'styled-components';
import Header from '../Component/Header';
import Category from '../Component/Category';
import loginIcon from '../Image/logoImg.png';
import Footer from '../Component/Footer';
import { useEffect } from 'react';

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
	height: 400px;
	background-color: #7483a1;
`;
const ArrowBox = styled.div`
	width: 20%;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	font-weight: lighter;
	font-size: 200px;
`;
const TextBox = styled.div`
	color: white;
	width: 60%;
	padding: 30px;
	background: gray;
	& h1 {
		font-size: 35px;
		font-weight: bolder;
		margin-bottom: 15px;
	}

	& p {
		font-size: 15px;
		margin-bottom: 10px;
	}

	& button {
		background: white;
		width: 300px;
		height: 50px;
		margin-top: 20px;
		border-radius: 20px;
	}
`;
const ContentBox2 = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;
const ContentBox2Image = styled.div`
	margin: 50px;
	height: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const ContentBox2Text = styled.div`
	height: 200px;
	width: fit-content;

	display: flex;
	justify-content: center;
	flex-direction: column;

	& h1 {
		font-size: 40px;
		font-weight: bolder;
		margin-bottom: 15px;
	}

	& h2 {
		font-size: 20px;
		font-weight: bold;
		margin-bottom: 10px;
	}
	& h3 {
		font-size: 15px;
	}
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
	const [MoveToTopBtnStatus, setMoveToTopBtnStatus] = useState(false);

	const handleFollow = () => {
		setScrollValueOfY(window.pageYOffset);
		if (ScrollValueOfY > 150) {
			setMoveToTopBtnStatus(true);
		} else {
			setMoveToTopBtnStatus(false);
		}
	};

	const moveToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
		setScrollValueOfY(0); // ScrollY 의 값을 초기화
		setMoveToTopBtnStatus(false); // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
	};

	useEffect(() => {
		const watch = () => {
			window.addEventListener('scroll', handleFollow);
		};
		watch();
		return () => {
			window.removeEventListener('scroll', handleFollow);
		};
	});

	return (
		<FirstPageContainer>
			<MoveTopBtn active={MoveToTopBtnStatus} onClick={moveToTop}>
				<img src={upArrow} alt="upArrow" style={{ width: '20px' }}></img>
			</MoveTopBtn>
			<Header />
			<Category />
			<ContentBox1>
				<ArrowBox> &lt;</ArrowBox>
				<TextBox>
					<h1> 편하게 관리하는 포트폴리오 </h1>
					<p> 자신만의 개성있고 차별성있는 포트폴리오를 작성할 수 있습니다. </p>
					<p> 작성한 포트폴리오를 편하게 관리할 수 있습니다. </p>
					<button> 포트폴리오 작성하러 가기 -------&gt; </button>
				</TextBox>
				<ArrowBox> &gt; </ArrowBox>
			</ContentBox1>
			<ContentBox2>
				<ContentBox2Image>
					<img src={loginIcon} alt="" style={{ width: '300px' }} />
				</ContentBox2Image>
				<ContentBox2Text style={{ alignItems: 'flex-start' }}>
					<h1> 쉽게 관리하는 포트폴리오 </h1>
					<h2> 자신만의 포트폴리오를 작성해보세요 !</h2>
					<h3> 여러가지 포트폴리오를 작성해 한번에 관리할 수 있습니다. </h3>
					<h3> 다양한 활동과 이야기들로 개성있는 포트폴리오를 만들어보세요. </h3>
				</ContentBox2Text>
			</ContentBox2>
			<ContentBox2>
				<ContentBox2Text style={{ alignItems: 'flex-end' }}>
					<h1> 포트폴리오를 한눈에 </h1>
					<h2> 다양한 사람들의 포트폴리오를 한눈에 볼 수 있습니다.</h2>
					<h3> 여러가지 포트폴리오를 작성해 한번에 관리할 수 있습니다. </h3>
					<h3> 다양한 활동과 이야기들로 개성있는 포트폴리오를 만들어보세요. </h3>
				</ContentBox2Text>
				<ContentBox2Image>
					<img src={loginIcon} alt="loginIcon" style={{ width: '300px' }} />
				</ContentBox2Image>
			</ContentBox2>
			<ContentBox2>
				<ContentBox2Image>
					<img src={loginIcon} alt="loginIcon" style={{ width: '300px' }} />
				</ContentBox2Image>
				<ContentBox2Text style={{ alignItems: 'flex-start' }}>
					<h1> 블록체인 기반 관리 시스템</h1>
					<h2> 블록체인을 이용하여 데이터를 관리합니다.</h2>
					<h3> 하이퍼레저 패브릭을 이용하여 데이터의 신뢰성을 보장합니다. </h3>
					<h3> 소중한 당신의 데이터 믿고 맡겨주셔도 됩니다. </h3>
				</ContentBox2Text>
			</ContentBox2>
			<ContentBox2>
				<ContentBox2Text style={{ alignItems: 'flex-end' }}>
					<h1> 포트폴리오를 한눈에 </h1>
					<h2> 다양한 사람들의 포트폴리오를 한눈에 볼 수 있습니다.</h2>
					<h3> 여러가지 포트폴리오를 작성해 한번에 관리할 수 있습니다. </h3>
					<h3> 다양한 활동과 이야기들로 개성있는 포트폴리오를 만들어보세요. </h3>
				</ContentBox2Text>
				<ContentBox2Image>
					<img src={loginIcon} alt="loginIcon" style={{ width: '300px' }} />
				</ContentBox2Image>
			</ContentBox2>
			<ContentBox2>
				<ContentBox2Image>
					<img src={loginIcon} alt="loginIcon" style={{ width: '300px' }} />
				</ContentBox2Image>
				<ContentBox2Text style={{ alignItems: 'flex-start' }}>
					<h1> 블록체인 기반 관리 시스템</h1>
					<h2> 블록체인을 이용하여 데이터를 관리합니다.</h2>
					<h3> 하이퍼레저 패브릭을 이용하여 데이터의 신뢰성을 보장합니다. </h3>
					<h3> 소중한 당신의 데이터 믿고 맡겨주셔도 됩니다. </h3>
				</ContentBox2Text>
			</ContentBox2>

			<Footer />
		</FirstPageContainer>
	);
}

export default FirstPage;
