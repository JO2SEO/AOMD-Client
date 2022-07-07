import React, { Fragment } from 'react';
import TaskCardTest from './TaskCardTestRedux';
import { Droppable } from 'react-beautiful-dnd';
import { ColumnTitle, ProvidedPlaceholder } from './RawDataComponent';
import styled from 'styled-components';

export const Portpolio = styled.div`
	display: flex;
	flex-direction: column;
	background: #f3f3f3;
	width: 100%;
	height: 100%;
	border-radius: 5px;
	padding: 15px 15px;
	box-sizing: border-box;
	justify-content: space-between;
	overflow-y: scroll;
`;

export const IntroduceBox = styled.textarea`
	width: 100%;
	height: 200px;
	padding: 10px;
	box-sizing: border-box;
	border: solid 2px #1e90ff;
	border-radius: 5px;
	font-size: 16px;
	resize: none;
`;
export const SubmitBox = styled.div`
	width: 100%;
	min-height: 30px;
	height: 30px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	box-sizing: content-box;
`;
export const SubmitBoxBtn = styled.button`
	height: 100%;
	border: 0;
	padding: 0;
	border-radius: 15px;
	background-color: hsl(248, 39%, 39.2%);
	cursor: pointer;
	outline-offset: 4px;
	position: relative;
	margin-right: 20px;

	&:hover SubmitBoxBtnFront {
		transform: translateY(-10px);
		transition: transform 0.25s cubic-bezier(0.3, 0.7, 0.4, 1.5);
	}
	&:active SubmitBoxBtnFront {
		transform: translateY(-2px);
		transition: transform 0.2s;
	}
`;
export const SubmitBoxBtnShadow = styled.span`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border-radius: 12px;
	background: hsl(0deg 0% 0% / 0.25);
	transform: translateY(2px);
	filter: blur(4px);
`;
export const SubmitBoxBtnEdge = styled.span`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border-radius: 12px;
	background: rgb(117, 148, 104);
`;
export const SubmitBoxBtnFront = styled.span`
	min-width: 150px;
	height: 30px;
	display: block;
	border-radius: 15px;
	line-height: 30px;
	font-size: 17px;
	font-weight: bold;
	color: rgb(7, 7, 7);
	background-color: rgb(135, 199, 110);
	transform: translateY(-8px);
	transition: transform 0.4s cubic-bezier(0.3, 0.7, 0.4, 1);
`;
const PortPolioComponent = props => {
	const { showState, portData } = props;
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
	return (
		<Fragment>
			{showState ? (
				<Fragment>
					{Object.entries(portData).map(([columnId, column], index) => {
						return (
							<Droppable key={columnId} droppableId={columnId}>
								{(provided, snapshot) => (
									<Portpolio ref={provided.innerRef} {...provided.droppableProps}>
										<div>
											<ColumnTitle>{column.title}</ColumnTitle>
											{column.items.map((item, index) => (
												<TaskCardTest
													key={item.id}
													item={item}
													index={index}
													datatype=""
												/>
											))}
										</div>
										<div>
											<h1>자기소개서</h1>
											<IntroduceBox></IntroduceBox>
										</div>
										<SubmitBox>
											<SubmitBoxBtn onClick={onClickStore}>
												<SubmitBoxBtnShadow></SubmitBoxBtnShadow>
												<SubmitBoxBtnEdge></SubmitBoxBtnEdge>
												<SubmitBoxBtnFront>저장하기</SubmitBoxBtnFront>
											</SubmitBoxBtn>
											<SubmitBoxBtn onClick={onClickMakeURL}>
												<SubmitBoxBtnShadow></SubmitBoxBtnShadow>
												<SubmitBoxBtnEdge></SubmitBoxBtnEdge>
												<SubmitBoxBtnFront>URL 생성하기</SubmitBoxBtnFront>
											</SubmitBoxBtn>
										</SubmitBox>
										<ProvidedPlaceholder>
											{provided.placeholder}
										</ProvidedPlaceholder>
									</Portpolio>
								)}
							</Droppable>
						);
					})}
				</Fragment>
			) : null}
		</Fragment>
	);
};

export default PortPolioComponent;
