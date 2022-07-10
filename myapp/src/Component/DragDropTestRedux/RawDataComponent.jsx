import React, { Fragment } from 'react';
import TaskCardTest from './TaskCardTestRedux';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

export const DataBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding: 10px;
	margin-top: 10px;
	border-radius: 5px;
	background-color: white;
	border: 2px solid black;
	box-sizing: border-box;
`;
export const ColumnTitle = styled.h1`
	font-size: larger;
	font-weight: bolder;
	margin-bottom: 10px;
	text-align: center;
`;
export const ProvidedPlaceholder = styled.span`
	display: 'none';
`;
export const DataBoxh1 = styled.p`
	font-weight: bolder;
	color: black;
`;
const RawDataComponent = props => {
	const { originData } = props;

	function returnTaskCard(column) {
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
				item.map((innerItem, index) => {
					info0.push([innerItem, index]);
				});
			}
			if (index === 1) {
				item.map((innerItem, index) => {
					info1.push([innerItem, index]);
				});
			}
			if (index === 2) {
				item.map((innerItem, index) => {
					info2.push([innerItem, index]);
				});
			}
		});

		return (
			<Fragment>
				<DataBox>
					<DataBoxh1> 자격증 </DataBoxh1>
					{info0.map(items => {
						return (
							<TaskCardTest
								key={items[0].id}
								item={items[0]}
								index={items[1]}
								datatype="origin"
							/>
						);
					})}
				</DataBox>
				<DataBox>
					<DataBoxh1> 학력 </DataBoxh1>
					{info1.map(items => {
						return (
							<TaskCardTest
								key={items[0].id}
								item={items[0]}
								index={items[1]}
								datatype="origin"
							/>
						);
					})}
				</DataBox>

				<DataBox>
					<DataBoxh1> 수상내역 </DataBoxh1>
					{info2.map(items => {
						return (
							<TaskCardTest
								key={items[0].id}
								item={items[0]}
								index={items[1]}
								datatype="origin"
							/>
						);
					})}
				</DataBox>
			</Fragment>
		);
	}

	return (
		<Fragment>
			{/* {console.log(originData.origin)} */}
			<Droppable key={originData.origin.title} droppableId={originData.origin.title}>
				{(provided, snapshot) => (
					<div ref={provided.innerRef} {...provided.droppableProps}>
						<ColumnTitle>{originData.origin.title}</ColumnTitle>
						{returnTaskCard(originData.origin.items)}
						<ProvidedPlaceholder>{provided.placeholder}</ProvidedPlaceholder>
					</div>
				)}
			</Droppable>
			{/* {console.log(' originData => ', originData)}
			{
					return (
						<Droppable
							key={Object.entries(originData)[0][0]}
							droppableId={Object.entries(originData)[0][0]}
						>
							{(provided, snapshot) => (
								<div ref={provided.innerRef} {...provided.droppableProps}>
									<ColumnTitle>{Object.entries(originData)[0][1].title}</ColumnTitle>
									{returnTaskCard(Content)}
									<ProvidedPlaceholder>{provided.placeholder}</ProvidedPlaceholder>
								</div>
							)}
						</Droppable>
					);
			} */}
			{/* <Droppable key={originData.title} droppableId={originData.title}>
				{(provided, snapshot) => (
					<div ref={provided.innerRef} {...provided.droppableProps}>
						<ColumnTitle>{originData.title}</ColumnTitle>
						{returnTaskCard(originData.items)}
						<ProvidedPlaceholder>{provided.placeholder}</ProvidedPlaceholder>
					</div>
				)}
			</Droppable> */}
			{/* {console.log('B => ', Object.entries(originData[1][1]))} */}

			{/* {Object.entries(Object.entries(originData)).map(([title, items]) => {
				console.log('originData => ', originData);

				return (
					<Droppable
						key={Object.entries(originData)[0][0]}
						droppableId={Object.entries(originData)[0][0]}
					>
						{(provided, snapshot) => (
							<div ref={provided.innerRef} {...provided.droppableProps}>
								<ColumnTitle>{Object.entries(originData)[0][1].title}</ColumnTitle>
								{returnTaskCard(Content)}
								<ProvidedPlaceholder>{provided.placeholder}</ProvidedPlaceholder>
							</div>
						)}
					</Droppable>
				);
			})} */}
			{/* {Object.entries(originData).map(([columnId, column]) => {
				console.log('originData => ', originData);
				console.log('columnId => ', columnId);
				// origin
				console.log('column => ', column);
				// {title: '나의 데이터', items: Array(7)}
				return (
					<Droppable key={columnId} droppableId={columnId}>
						{(provided, snapshot) => (
							<div ref={provided.innerRef} {...provided.droppableProps}>
								<ColumnTitle>{column.title}</ColumnTitle>
								{returnTaskCard(column)}
								<ProvidedPlaceholder>{provided.placeholder}</ProvidedPlaceholder>
							</div>
						)}
					</Droppable>
				);
			})} */}
		</Fragment>
	);
};

export default RawDataComponent;
