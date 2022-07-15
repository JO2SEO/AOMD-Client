import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useSelector, useDispatch } from 'react-redux';
import { DeletedataChangePort, selectPortData } from '../../Redux/PortdataSlice';
import styled from 'styled-components';

export const OriginDataBox = styled.div`
	box-sizing: border-box;
	width: 100%;
	padding-top: 10px;
`;
export const OriginDataContent = styled.div`
	color: #000;
	display: inline-block;
	margin: 0;
	text-transform: uppercase;

	&:after {
		display: block;
		content: '';
		border-bottom: solid 3px black;
		transform: scaleX(0);
		transition: transform 150ms ease-in-out;
		transform-origin: 0% 50%;
	}
	&:hover:after {
		transform: scaleX(1);
	}
`;
export const PortItem = styled.div`
	width: 30%;
	height: 70px;
	padding: 5px;
	margin: 10px;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	border: 2px dashed black;
`;

const TaskCard = props => {
	const { item, index, datatype } = props;
	const dispatch = useDispatch();
	const portData = useSelector(selectPortData);

	const onClickDelete = itemID => {
		const sourceColumn = portData['port1'];
		const sourceItems = [...sourceColumn.items];

		// 3까지만 돌면 돼, 항목이 3개니까 => 고정
		for (let i = 0; i < 3; i++) {
			let Before = sourceItems[i];
			for (let j = 0; j < Before.length; j++) {
				if (Before[j].id === itemID) {
					let First = Before.slice(0, j);
					let Second = Before.slice(j + 1);
					Before = [...First, ...Second];
					break;
				}
			}
			sourceItems[i] = Before;
		}
		dispatch(DeletedataChangePort(sourceItems));
	};

	return (
		<>
			{datatype === 'origin' ? (
				<OriginDataBox>
					<Draggable key={item.id} draggableId={item.id} index={index}>
						{provided => (
							<OriginDataContent
								ref={provided.innerRef}
								{...provided.draggableProps}
								{...provided.dragHandleProps}
							>
								<p>{item.Content}</p>
							</OriginDataContent>
						)}
					</Draggable>
				</OriginDataBox>
			) : (
				<PortItem>
					<div>
						<p style={{ margin: '5px' }}>{item.Content}</p>
						<p style={{ margin: '5px' }}>{item.Date}</p>
					</div>
					<div>
						<button onClick={e => onClickDelete(item.id)}>삭제</button>
					</div>
				</PortItem>
				// {/* <Draggable key={item.id} draggableId={item.id} index={index}>
				// 	{provided => (
				// 		<PortItem
				// 			ref={provided.innerRef}
				// 			{...provided.draggableProps}
				// 			{...provided.dragHandleProps}
				// 		>
				// 			<h1>{item.Type}</h1>
				// 		<p>{item.Content}</p>
				// 			<div>
				// 				<p>{item.Content}</p>
				// 				<p>{item.Date}</p>
				// 			</div>
				// 			<div>
				// 				<button onClick={e => onClickDelete(item.id)}>삭제</button>
				// 			</div>
				// 		</PortItem>
				// 	)}
				// </Draggable> */}
			)}
		</>
	);
};

export default TaskCard;
