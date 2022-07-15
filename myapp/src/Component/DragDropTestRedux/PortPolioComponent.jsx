import React, { Fragment } from 'react';
import TaskCard from './TaskCard';
import { Droppable } from 'react-beautiful-dnd';
import { ColumnTitle, ProvidedPlaceholder, DataBox, DataBoxh1 } from './RawDataComponent';
import styled from 'styled-components';
import { useState } from 'react';

export const Portpolio = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	padding: 15px 15px;
	box-sizing: border-box;
	justify-content: space-between;
	overflow-y: scroll;
`;
const DataBoxContent = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
`;
export const IntroduceBox = styled.textarea`
	width: 100%;
	height: 200px;
	padding: 10px;
	box-sizing: border-box;
	border: solid 3px black;
	border-radius: 5px;
	font-size: 16px;
	resize: none;
`;
export const SubmitBox = styled.div`
	width: 100%;
	height: 30px;
	display: flex;
	justify-content: center;
	margin-top: 50px;
`;
export const SubmitBoxBtn = styled.button`
	cursor: pointer;
	margin-right: 20px;
`;
export const SubmitBoxBtnFront = styled.span`
	width: 150px;
	height: 30px;
	display: block;
	border-radius: 15px;
	font-size: 17px;
	font-weight: bold;
`;

const PortPolioComponent = props => {
	const { showState, portData } = props;
	// console.log(portData.port1);
	const Swal = require('sweetalert2');

	const onClickStore = () => {
		Swal.fire({
			position: 'center',
			icon: 'success',
			title: 'Saved',
			showConfirmButton: false,
			timer: 1500,
			heightAuto: false,
		});
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
				<DataBox>
					<DataBoxh1> 자격증 </DataBoxh1>
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
				</DataBox>
				<DataBox>
					<DataBoxh1> 학력 </DataBoxh1>
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
				</DataBox>
				<DataBox>
					<DataBoxh1> 수상내역 </DataBoxh1>
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
				</DataBox>
			</Fragment>
		);
	}

	const [storingState, setStoringState] = useState(false);
	const [question, setQuestion] = useState('');
	const [content, setContent] = useState('');

	const Storing = styled.div`
		display: ${({ active }) => {
			if (active) {
				return 'flex';
			}
			return 'none';
		}};
		padding-left: 30px;
		margin: 0px;
		align-items: center;

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

	const questionChangeFunc = e => {
		setQuestion(e.target.value);
		setStoringState(true);
		setTimeout(function () {
			setStoringState(false);
		}, 5000);
	};

	const contentChangeFunc = e => {
		setContent(e.target.value);
		setStoringState(true);
		setTimeout(function () {
			setStoringState(false);
		}, 5000);
	};

	return (
		<Fragment>
			{showState[0] ? (
				<Fragment>
					<Droppable key={portData.port1.title} droppableId={portData.port1.title}>
						{(provided, snapshot) => (
							<Portpolio ref={provided.innerRef} {...provided.droppableProps}>
								<div ref={provided.innerRef} {...provided.droppableProps}>
									<ColumnTitle>{portData.port1.title}</ColumnTitle>
									{returnTaskCard(portData.port1.items)}
								</div>
								<div style={{ marginTop: '50px' }}>
									<div
										style={{
											display: 'flex',
											alignContent: 'center',
											marginBottom: '30px',
										}}
									>
										<h1
											style={{
												fontWeight: 'bold',
												fontSize: '20px',
											}}
										>
											자기소개서
										</h1>
										<Storing active={storingState}>
											<span></span>
											<span></span>
											<span></span>
											<p style={{ marginLeft: '10px' }}>저장 중...</p>
										</Storing>
									</div>
									<div
										style={{
											display: 'flex',
											marginBottom: '20px',
											justifyContent: 'center',
										}}
									>
										<p
											style={{
												marginRight: '20px',
												marginTop: '10px',
												fontWeight: 'bold',
											}}
										>
											질문 1
										</p>

										<input
											style={{
												width: '300px',
												height: '30px',
											}}
											value={question}
											type="text"
											onChange={questionChangeFunc}
											placeholder="자기소개서 문항"
										/>
									</div>

									<IntroduceBox
										value={content}
										type="text"
										onChange={contentChangeFunc}
										placeholder="..."
									></IntroduceBox>
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
			{showState[1] ? (
				<Fragment>
					<Droppable key={portData.port2.title} droppableId={portData.port2.title}>
						{(provided, snapshot) => (
							<Portpolio ref={provided.innerRef} {...provided.droppableProps}>
								<div ref={provided.innerRef} {...provided.droppableProps}>
									<ColumnTitle>{portData.port2.title}</ColumnTitle>
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
