import React, { Fragment } from 'react';
import TaskCardTest from './TaskCardTestRedux';
import { Droppable } from 'react-beautiful-dnd';
import { ColumnTitle, ProvidedPlaceholder } from './RawDataComponent';
import styled from 'styled-components';

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
	height: 30px;
	display: flex;
	justify-content: center;
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
												<SubmitBoxBtnFront>저장하기</SubmitBoxBtnFront>
											</SubmitBoxBtn>
											<SubmitBoxBtn onClick={onClickMakeURL}>
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
