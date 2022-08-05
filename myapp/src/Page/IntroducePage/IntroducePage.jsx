import { useState, useEffect } from 'react';

import TeamInfo from 'Image/TeamInfo.png';
import Interview1 from 'Image/Interview1.png';
import Interview2 from 'Image/Interview2.png';
import Interview3 from 'Image/Interview3.png';
import scenario1 from 'Image/scenario1.png';
import scenario2 from 'Image/scenario2.png';
import BlockChain1 from 'Image/BlockChain1.svg';
import upArrow from 'Image/upArrow.svg';

import { MoveTopBtn } from 'Page/FirstPage/FirstPage';

import './IntroducePage.css';

function IntroducePage() {
	const [ScrollValueOfY, setScrollValueOfY] = useState(0);
	// const [MoveToTopBtnStatus, setMoveToTopBtnStatus] = useState(false);
	const [MoveToTopBtnStatus, setMoveToTopBtnStatus] = useState(false);

	const moveToTopFunc = () => {
		setMoveToTopBtnStatus(false); // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
		setScrollValueOfY(0); // ScrollY 의 값을 초기화

		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};
	const scrollCheckFunc = () => {
		// console.log('window.pageYOffset = ', window.pageYOffset);
		setScrollValueOfY(window.pageYOffset);
		if (ScrollValueOfY > 150) {
			setMoveToTopBtnStatus(true);
		} else {
			setMoveToTopBtnStatus(false);
		}
	};

	useEffect(() => {
		// console.log(123);
		const watch = () => {
			window.addEventListener('scroll', scrollCheckFunc);
		};
		watch();
		return () => {
			window.removeEventListener('scroll', scrollCheckFunc);
		};
	});

	return (
		<div className="IntroducePageDiv">
			<MoveTopBtn active={MoveToTopBtnStatus} onClick={moveToTopFunc}>
				<img src={upArrow} alt="upArrow"></img>
			</MoveTopBtn>

			<div className="IntroducePageDivContent1">
				<h1> 기획 의도 </h1>
				<p>
					개인정보 위, 변조 문제를 해결하기 위해 자기 정보 통제 및 데이터 무결성 측면에서
					장점을 가지는 블록체인을 활용하고 블록체인 네트워크는 프라 이빗 네트워크의
					구현체인 하이퍼레저 패브릭을 기반으로 동작한다.
				</p>
			</div>
			<div className="IntroducePageDivContent2">
				<h1> 팀 소개 </h1>
				<img src={TeamInfo} alt="Team info" />
			</div>
			<div className="IntroducePageDivContent3">
				<h1> 사용자 시나리오 </h1>
				<img className="Interview1" src={Interview1} alt="Interview1" />
				<img className="Interview2" src={Interview2} alt="Interview2" />
				<img className="Interview3" src={Interview3} alt="Interview3" />
				<img className="IntroducePage_scenario1" src={scenario1} alt="scenario1" />
				<img className="IntroducePage_scenario2" src={scenario2} alt="scenario2" />
				<img className="BlockChain1" src={BlockChain1} alt="BlockChain1" />
			</div>
		</div>
	);
}

export default IntroducePage;
