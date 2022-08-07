import React, { Fragment } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import TaskCard from './TaskCard';
import { ProvidedPlaceholder } from './RawDataComponent';

const Storing = styled.div`
	display: ${({ active }) => {
		if (active) {
			return 'flex';
		}
		return 'none';
	}};

	width: 120px;
	height: 20px;
	padding-top: 10px;

	& span {
		display: inline-block;
		width: 10px;
		height: 10px;
		background-color: gray;
		border-radius: 50%;
		animation: loading 1s 0s linear infinite;
	}

	& span:nth-child(1) {
		animation-delay: 0s;
		background-color: red;
	}

	& span:nth-child(2) {
		animation-delay: 0.2s;
		background-color: orange;
	}

	& span:nth-child(3) {
		animation-delay: 0.4s;
		background-color: yellowgreen;
	}

	@keyframes loading {
		0%,
		100% {
			opacity: 0;
			transform: scale(0.5);
		}
		50% {
			opacity: 1;
			transform: scale(1.2);
		}
	}
`;

function PortPolioComponent(props) {
	const { showState, portData } = props;
	const Swal = require('sweetalert2');
	const navigate = useNavigate();
	const onClickStore = () => {
		setStoringState(true);
		setTimeout(function () {
			setStoringState(false);
		}, 2000);
	};
	const onClickMakeURL = () => {
		Swal.fire({
			title: '생성된 URL',
			showDenyButton: true,
			text: 'www.naver.com',
			icon: 'success',
			confirmButtonText: 'OK',
			denyButtonText: `Copy`,
			heightAuto: false,
		}).then(result => {
			if (result.isDenied) {
				console.log(result);
			}
		});
		navigate('/portpolio');
	};
	const onClickLoad = () => {
		setQuestionData([
			portData.port1.introductions[0].question,
			portData.port1.introductions[0].content,
			portData.port1.introductions[0].content.length,
		]);
	};
	function returnTaskCard(column) {
		const info0 = []; // 자격증
		const info1 = []; // 학력
		const info2 = []; // 수상내역

		for (let i = 0; i < 3; i++) {
			if (i === 0) {
				const arrLength = column[i].length;

				for (let j = 0; j < arrLength; j++) {
					info0.push([column[i][j], 1 + i + j]);
				}
			}
			if (i === 1) {
				const arrLength = column[i].length;

				for (let j = 0; j < arrLength; j++) {
					info1.push([column[i][j], 2 + i + j]);
				}
			}
			if (i === 2) {
				const arrLength = column[i].length;

				for (let j = 0; j < arrLength; j++) {
					info2.push([column[i][j], 3 + i + j]);
				}
			}
		}

		return (
			<Fragment>
				<div className="DataBox2">
					<p className="DataBoxh2"> 자격증 </p>
					<div className="DataBoxContent">
						{info0.map(items => {
							return (
								<TaskCard
									key={items[0].id}
									item={items[0]}
									index={items[1]}
									datatype=""
								/>
							);
						})}
					</div>
				</div>
				<div className="DataBox2">
					<p className="DataBoxh2"> 학력 </p>
					<div className="DataBoxContent">
						{info1.map(items => {
							return (
								<TaskCard
									key={items[0].id}
									item={items[0]}
									index={items[1]}
									datatype=""
								/>
							);
						})}
					</div>
				</div>
				<div className=" DataBox2">
					<p className="DataBoxh2"> 수상내역 </p>
					<div className="DataBoxContent">
						{info2.map(items => {
							return (
								<TaskCard
									key={items[0].id}
									item={items[0]}
									index={items[1]}
									datatype=""
								/>
							);
						})}
					</div>
				</div>
			</Fragment>
		);
	}

	const [storingState, setStoringState] = useState(false);

	// const [question, setQuestion] = useState('');
	// const [content, setContent] = useState('');
	// const [textLength, setTextLength1] = useState(0);

	const [questionData, setQuestionData] = useState(['', '', 0]);

	const questionChangeFunc = e => {
		setQuestionData([e.target.value, questionData[1], questionData[2]]);
	};
	const contentChangeFunc = e => {
		setQuestionData([questionData[0], e.target.value, e.target.value.length]);
	};

	// const onClickAddContent = e => {
	// 	var parentBox = document.getElementById('ContentBoxCanAdd');

	// 	var newDiv = document.createElement('div');
	// 	newDiv.setAttribute('class', 'IntroduceContentBox');

	// 	newDiv.innerHTML +=
	// 		'<p>' +
	// 		'문항 ' +
	// 		'</p>' +
	// 		"<input type='text' placeholder='자기소개서 질문'>" +
	// 		'</input>';

	// 	var newTextarea = document.createElement('textarea');
	// 	newTextarea.setAttribute('class', 'IntroduceText');
	// 	newTextarea.setAttribute('type', 'text');
	// 	newTextarea.setAttribute('placeholder', '...');

	// 	var newP = document.createElement('p');
	// 	newP.setAttribute('class', 'lengthOfContent_P');

	// 	newP.innerHTML += questionData[0][2] + '자';

	// 	parentBox.appendChild(newDiv);
	// 	parentBox.appendChild(newTextarea);
	// 	parentBox.appendChild(newP);
	// };
	return (
		<Fragment>
			{showState[0] ? (
				<Fragment>
					<Droppable key={portData.port1.title} droppableId={portData.port1.title}>
						{(provided, snapshot) => (
							<div
								className="Portpolio"
								ref={provided.innerRef}
								{...provided.droppableProps}
							>
								<div ref={provided.innerRef} {...provided.droppableProps}>
									<h1 className="ColumnTitle2">{portData.port1.title}</h1>
									{returnTaskCard(portData.port1.items)}
								</div>
								<div>
									<div className="TitleBox">
										<h1>자기소개서</h1>
									</div>

									<div id="ContentBoxCanAdd">
										<div className="IntroduceContentBox">
											<p>문항</p>
											<input
												value={questionData[0]}
												type="text"
												onChange={questionChangeFunc}
												placeholder="자기소개서 질문"
											></input>
										</div>

										<textarea
											className="IntroduceText"
											value={questionData[1]}
											type="text"
											onChange={contentChangeFunc}
											placeholder="..."
										></textarea>
										<p className="lengthOfContent_P">{questionData[2]} 자</p>
									</div>
									{/* <button className="AddQuestionBtn" onClick={onClickAddContent}>
										<span>문항 추가하기</span>
									</button> */}
								</div>

								<div className="SubmitBox">
									<button className="SubmitBoxBtn" onClick={onClickLoad}>
										<span>불러오기</span>
									</button>
									<button className="SubmitBoxBtn" onClick={onClickStore}>
										<span className="SubmitBoxBtnFront">저장하기</span>
									</button>
									<button className="SubmitBoxBtn" onClick={onClickMakeURL}>
										<span className="SubmitBoxBtnFront">URL 생성하기</span>
									</button>
									<Storing active={storingState}>
										<span></span>
										<span></span>
										<span></span>
										<p style={{ marginLeft: '10px' }}>저장 중</p>
									</Storing>
								</div>

								<ProvidedPlaceholder>{provided.placeholder}</ProvidedPlaceholder>
							</div>
						)}
					</Droppable>
				</Fragment>
			) : null}
		</Fragment>
	);
}

export default PortPolioComponent;
