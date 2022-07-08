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
		const info1 = []; // 자격증
		const info2 = []; // 수상내역
		const info3 = []; // 학점
		const info4 = []; // 학력

		column.items.map((item, index) => {
			if (item.Type === '자격증') {
				info1.push(item);
			}
			if (item.Type === '수상내역') {
				info2.push(item);
			}
			if (item.Type === '학점') {
				info3.push(item);
			}
			if (item.Type === '학력') {
				info4.push(item);
			}
		});

		return (
			<Fragment>
				<DataBox>
					<DataBoxh1> 수상내역 </DataBoxh1>

					{info1.map((item, index) => {
						return (
							<TaskCardTest
								key={item.id}
								item={item}
								index={index}
								datatype="origin"
							/>
						);
					})}
				</DataBox>
				<DataBox>
					<DataBoxh1> 수상내역 </DataBoxh1>
					{info2.map((item, index) => {
						return (
							<TaskCardTest
								key={item.id}
								item={item}
								index={index}
								datatype="origin"
							/>
						);
					})}
				</DataBox>
				<DataBox>
					<DataBoxh1>학점 </DataBoxh1>
					{info3.map((item, index) => {
						return (
							<TaskCardTest
								key={item.id}
								item={item}
								index={index}
								datatype="origin"
							/>
						);
					})}
				</DataBox>
				<DataBox>
					<DataBoxh1> 학력 </DataBoxh1>
					{info4.map((item, index) => {
						return (
							<TaskCardTest
								key={item.id}
								item={item}
								index={index}
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
			{Object.entries(originData).map(([columnId, column], index) => {
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
			})}
		</Fragment>
	);
};

export default RawDataComponent;
