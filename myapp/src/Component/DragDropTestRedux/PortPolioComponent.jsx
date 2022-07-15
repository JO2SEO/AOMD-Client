import React, { Fragment } from 'react';
import TaskCard from './TaskCard';
import { Droppable } from 'react-beautiful-dnd';
import { ColumnTitle, ProvidedPlaceholder, DataBox, DataBoxh1 } from './RawDataComponent';
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
		// console.log('column => ', column);
		// RawdataSlice.js -> data
		// data[0] => 자격증
		// data[1] => 학력
		// data[2] => 수상내역

		const info0 = []; // 자격증
		const info1 = []; // 학력
		const info2 = []; // 수상내역

		column.map((item, index) => {
			// console.log('index => ', index);
			// console.log('item => ', item);

			if (index === 0) {
				item.map((innerItem, innerindex) => {
					info0.push([innerItem, 1 + index + innerindex]);
				});
			}
			if (index === 1) {
				item.map((innerItem, innerindex) => {
					info1.push([innerItem, 2 + index + innerindex]);
				});
			}
			if (index === 2) {
				item.map((innerItem, innerindex) => {
					info2.push([innerItem, 3 + index + innerindex]);
				});
			}
		});

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

									<ProvidedPlaceholder>
										{provided.placeholder}
									</ProvidedPlaceholder>
								</div>
								<div style={{ marginTop: '50px' }}>
									<h1
										style={{
											fontWeight: 'bold',
											fontSize: '20px',
											marginBottom: '20px',
										}}
									>
										자기소개서
									</h1>
									<div
										style={{
											display: 'flex',
											marginBottom: '20px',
											// alignContent: 'center',
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
										/>
									</div>

									<IntroduceBox />
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
