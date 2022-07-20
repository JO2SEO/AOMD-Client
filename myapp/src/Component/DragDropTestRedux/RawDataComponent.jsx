import React, { Fragment } from 'react';
import TaskCard from './TaskCard';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

export const DataBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding: 10px;
	margin-top: 10px;
	border-radius: 10px;
	background-color: #eceff5;
	box-sizing: border-box;
`;
export const ColumnTitle1 = styled.h1`
	font-size: 25px;
	font-weight: 900;
	margin-bottom: 20px;
`;
export const ProvidedPlaceholder = styled.span`
	display: 'none';
`;
export const DataBoxh1 = styled.p`
	font-size: 18px;
	font-weight: 900;
	padding: 10px;
`;
const RawDataComponent = props => {
	const { originData } = props;

	function returnTaskCard(column) {
		const info0 = []; // 자격증
		const info1 = []; // 학력
		const info2 = []; // 수상내역

		column.map((item, index) => {
			// console.log('index => ', index);
			// console.log('item => ', item);

			if (index === 0) {
				item.map((innerItem, innerindex) => {
					info0.push([innerItem, 1 + index + innerindex]);
					// info0.push([innerItem, innerindex]);
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
					{/* {console.log('자격증')} */}
					{info0.map(items => {
						// console.log('items = ', items);
						return (
							<TaskCard
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
					{/* {console.log('학력')} */}

					{info1.map(items => {
						// console.log('items = ', items);

						return (
							<TaskCard
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
					{/* {console.log('수상내역')} */}

					{info2.map(items => {
						// console.log('items = ', items);

						return (
							<TaskCard
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
			<Droppable key={originData.origin.title} droppableId={originData.origin.title}>
				{(provided, snapshot) => (
					<div ref={provided.innerRef} {...provided.droppableProps}>
						<ColumnTitle1>{originData.origin.title}</ColumnTitle1>
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
