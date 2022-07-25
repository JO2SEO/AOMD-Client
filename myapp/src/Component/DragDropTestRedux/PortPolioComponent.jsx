import React, { Fragment } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { useState } from 'react';

import TaskCard from './TaskCard';
import { ProvidedPlaceholder } from './RawDataComponent';

const Portpolio = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	padding: 15px 15px;
	box-sizing: border-box;
	justify-content: space-between;
	overflow-y: scroll;
`;
const ColumnTitle2 = styled.h1`
	font-size: 25px;
	font-weight: 900;
	padding: 20px;
	margin-bottom: 10px;
`;
const DataBoxContent = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
`;
const IntroduceBox = styled.textarea`
	width: 80%;
	height: 180px;
	margin: 0px 50px 0px 50px;
	padding: 20px;
	box-sizing: border-box;
	border: solid 1px gray;
	border-radius: 5px;
	font-size: 14px;
	resize: none;
`;
const SubmitBox = styled.div`
	display: flex;
	justify-content: center;
	margin: 80px 0px 30px 0px;
	border: red 3px solid;
`;
const SubmitBoxBtn = styled.button`
	cursor: pointer;
	margin-right: 20px;
	border: none;
	background: #203864;
	border-radius: 15px;
	width: 100px;
	height: 30px;

	&:hover {
		color: black;
		background: #d8dce4;
	}
	&:hover span {
		color: black;
		background: #d8dce4;
	}
`;
const SubmitBoxBtnFront = styled.span`
	font-size: 15px;
	font-weight: 500;
	color: white;
`;
const SubmitBoxBtn2 = styled.button`
	cursor: pointer;
	margin-right: 20px;
	border: none;
	background: #d8dce4;
	border-radius: 15px;
	width: 100px;
	height: 30px;
	margin-left: 50px;

	&:hover {
		background: #203864;
	}
	&:hover span {
		color: white;
		background: #203864;
	}
`;
const SubmitBoxBtnFront2 = styled.span`
	font-size: 12px;
	font-weight: 500;
	color: black;
`;
const DataBox2 = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding: 0px 20px 20px 30px;
`;
const DataBoxh2 = styled.p`
	font-size: 18px;
	font-weight: 900;
	padding: 10px;
`;
const Storing = styled.div`
	display: ${({ active }) => {
		if (active) {
			return 'flex';
		}
		return 'flex';
	}};
	border: red solid 3px;
	// padding-left: 30px;
	// padding-left: 30px;
	// margin: 0px;
	// align-items: center;
	width: 150px;

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
const PortPolioComponent = props => {
	const { showState, portData } = props;
	const Swal = require('sweetalert2');

	const onClickStore = () => {
		// Swal.fire({
		// 	position: 'center',
		// 	icon: 'success',
		// 	title: 'Saved',
		// 	showConfirmButton: false,
		// 	timer: 1500,
		// 	heightAuto: false,
		// });
		// setQuestion(e.target.value);
		setStoringState(true);
		// console.log(1);
		setTimeout(function () {
			setStoringState(false);
		}, 2000);
		// console.log(1);
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
	};
	const onClickLoad = () => {
		setQuestion(portData.port1.introductions[0].question);
		setContent(portData.port1.introductions[0].content);
		setTextLength1(portData.port1.introductions[0].content.length);

		setQuestion2(portData.port1.introductions[1].question);
		setContent2(portData.port1.introductions[1].content);
		setTextLength2(portData.port1.introductions[1].content.length);
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
				<DataBox2>
					<DataBoxh2> 자격증 </DataBoxh2>
					<DataBoxContent>
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
					</DataBoxContent>
				</DataBox2>
				<DataBox2>
					<DataBoxh2> 학력 </DataBoxh2>
					<DataBoxContent>
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
					</DataBoxContent>
				</DataBox2>
				<DataBox2>
					<DataBoxh2> 수상내역 </DataBoxh2>
					<DataBoxContent>
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
					</DataBoxContent>
				</DataBox2>
			</Fragment>
		);
	}

	const [storingState, setStoringState] = useState(false);
	const [question, setQuestion] = useState('');
	const [content, setContent] = useState('');
	const [question2, setQuestion2] = useState('');
	const [content2, setContent2] = useState('');
	const [textLength1, setTextLength1] = useState(0);
	const [textLength2, setTextLength2] = useState(0);

	const questionChangeFunc = e => {
		setQuestion(e.target.value);
		// setStoringState(true);
		// console.log(1);
		// setTimeout(function () {
		// 	setStoringState(false);
		// }, 1000);
		// console.log(1);
	};
	const contentChangeFunc = e => {
		setContent(e.target.value);
		setTextLength1(e.target.value.length);
	};
	const questionChangeFunc2 = e => {
		setQuestion2(e.target.value);
		// setStoringState(true);
		// console.log(1);
		// setTimeout(function () {
		// 	setStoringState(false);
		// }, 1000);
		// console.log(1);
	};
	const contentChangeFunc2 = e => {
		setContent2(e.target.value);
		setTextLength2(e.target.value.length);
	};
	const onClickAddContent = e => {
		alert('아직 개발중인 기능입니다');
	};
	return (
		<Fragment>
			{showState[0] ? (
				<Fragment>
					<Droppable key={portData.port1.title} droppableId={portData.port1.title}>
						{(provided, snapshot) => (
							<Portpolio ref={provided.innerRef} {...provided.droppableProps}>
								<div ref={provided.innerRef} {...provided.droppableProps}>
									<ColumnTitle2>{portData.port1.title}</ColumnTitle2>
									{returnTaskCard(portData.port1.items)}
								</div>
								<div style={{ marginTop: '20px' }}>
									<div
										style={{
											display: 'flex',
											alignContent: 'center',
											marginBottom: '20px',
										}}
									>
										<h1
											style={{
												fontWeight: '900',
												marginLeft: '45px',
												fontSize: '18px',
											}}
										>
											자기소개서
										</h1>
									</div>
									<div
										style={{
											display: 'flex',
											margin: '0px 0px 20px 60px',
										}}
									>
										<p
											style={{
												marginRight: '20px',
												marginTop: '5px',
												fontWeight: '700',
												fontSize: '15px',
											}}
										>
											문항 1
										</p>

										<input
											style={{
												width: '250px',
												height: '20px',
												background: '#e9e9e9',
												border: 'none',
												borderRadius: '20px',
												paddingLeft: '15px',
											}}
											// value={portData.port1.introductions.question}

											// value={portData.port1.introductions[0].question}
											value={question}
											type="text"
											onChange={questionChangeFunc}
											placeholder="자기소개서 질문"
										/>
									</div>

									<IntroduceBox
										// value={portData.port1.introductions[0].Content}
										value={content}
										type="text"
										onChange={contentChangeFunc}
										placeholder="..."
									></IntroduceBox>
									<p
										style={{
											display: 'flex',
											justifyContent: 'flex-end',
											alignItems: 'center',
											width: '85%',
											marginTop: '5px',
											textAlign: 'right',
										}}
									>
										{textLength1} 자
									</p>
									<div
										style={{
											display: 'flex',
											margin: '20px 0px 20px 60px',
										}}
									>
										<p
											style={{
												marginRight: '20px',
												marginTop: '5px',
												fontWeight: '700',
												fontSize: '15px',
											}}
										>
											문항 2
										</p>

										<input
											style={{
												width: '250px',
												height: '20px',
												background: '#e9e9e9',
												border: 'none',
												borderRadius: '20px',
												paddingLeft: '15px',
											}}
											// value={portData.port1.introductions.question}

											// value={portData.port1.introductions[0].question}
											value={question2}
											type="text"
											onChange={questionChangeFunc2}
											placeholder="자기소개서 질문"
										/>
									</div>

									<IntroduceBox
										// value={portData.port1.introductions[0].Content}
										value={content2}
										type="text"
										onChange={contentChangeFunc2}
										placeholder="..."
									></IntroduceBox>
									<p
										style={{
											display: 'flex',
											justifyContent: 'flex-end',
											alignItems: 'center',
											width: '85%',
											marginTop: '5px',
											textAlign: 'right',
										}}
									>
										{textLength2} 자
									</p>
								</div>
								<div>
									<SubmitBoxBtn2>
										<SubmitBoxBtnFront2>
											<p onClick={onClickAddContent}>문항 추가하기</p>
										</SubmitBoxBtnFront2>
									</SubmitBoxBtn2>
								</div>
								<div style={{ display: 'flex', width: '100%' }}>
									<SubmitBox>
										<SubmitBoxBtn onClick={onClickLoad}>
											<SubmitBoxBtnFront>불러오기</SubmitBoxBtnFront>
										</SubmitBoxBtn>
										<SubmitBoxBtn onClick={onClickStore}>
											<SubmitBoxBtnFront>저장하기</SubmitBoxBtnFront>
										</SubmitBoxBtn>
										<SubmitBoxBtn onClick={onClickMakeURL}>
											<SubmitBoxBtnFront>URL 생성하기</SubmitBoxBtnFront>
										</SubmitBoxBtn>
									</SubmitBox>
									<Storing active={storingState}>
										<span></span>
										<span></span>
										<span></span>
										<p style={{ marginLeft: '10px' }}>저장 중...</p>
									</Storing>
								</div>

								<ProvidedPlaceholder>{provided.placeholder}</ProvidedPlaceholder>
							</Portpolio>
						)}
					</Droppable>
				</Fragment>
			) : null}
			{showState[1] ? (
				<Fragment>
					<Droppable key={portData.port2.title} droppableId={portData.port2.title}>
						{(provided, snapshot) => (
							<Portpolio ref={provided.innerRef} {...provided.droppableProps}>
								<div ref={provided.innerRef} {...provided.droppableProps}>
									<ColumnTitle2>{portData.port2.title}</ColumnTitle2>
									{returnTaskCard(portData.port2.items)}
									<ProvidedPlaceholder>
										{provided.placeholder}
									</ProvidedPlaceholder>
								</div>
								<div style={{ margin: '50px' }}>
									<h1>자기소개서</h1>

									<IntroduceBox></IntroduceBox>
								</div>
								<SubmitBox>
									<SubmitBoxBtn onClick={onClickStore}>
										<SubmitBoxBtnFront>저장하기</SubmitBoxBtnFront>
									</SubmitBoxBtn>
									<SubmitBoxBtn onClick={onClickMakeURL}>
										<SubmitBoxBtnFront>URL 생성하기</SubmitBoxBtnFront>
									</SubmitBoxBtn>
								</SubmitBox>
								<ProvidedPlaceholder>{provided.placeholder}</ProvidedPlaceholder>
							</Portpolio>
						)}
					</Droppable>
				</Fragment>
			) : null}
		</Fragment>
	);
};

export default PortPolioComponent;
