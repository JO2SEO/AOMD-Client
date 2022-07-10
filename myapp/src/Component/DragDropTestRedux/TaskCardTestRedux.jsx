import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useSelector, useDispatch } from 'react-redux';
import { DeletedataChange, selectData } from '../../Redux/RawdataSlice';
import { DeletedataChangePort, selectDataPort } from '../../Redux/PortdataSlice';
import styled from 'styled-components';

export const OneItemContentBox = styled.div`
	box-sizing: border-box;
	width: 100%;
	padding-top: 10px;
`;
export const OneItemContent = styled.div`
	color: #000;
	display: inline-block;
	margin: 0;
	text-transform: uppercase;

	&:after {
		display: block;
		content: '';
		border-bottom: solid 3px #613a3a;
		transform: scaleX(0);
		transition: transform 150ms ease-in-out;
		transform-origin: 0% 50%;
	}
	&:hover:after {
		transform: scaleX(1);
	}
`;
export const PortItem = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;
const TaskCardTestRedux = props => {
	const { item, index, datatype } = props;
	const dispatch = useDispatch();

	const originData = useSelector(selectData);
	const portData = useSelector(selectDataPort);

	const onClickDelete = itemID => {
		// const originColumn = originData['origin'];
		const sourceColumn = portData['port1'];
		// console.log('originColumn = ', originColumn);
		console.log('sourceColumn = ', sourceColumn);
		// const originItems = [...originColumn.items];
		const sourceItems = [...sourceColumn.items];
		console.log('sourceItems = ', sourceItems);
		// const lengthOrigin = originItems.length;

		// for (let i = 0; i < sourceItems.length; i++) {
		// 	if (sourceItems[i].id === itemID) {
		// 		const [removed] = sourceItems.splice(i, 1);
		// 		sourceItems.splice(lengthOrigin, 0, removed);
		// 		break;
		// 	}
		// }

		// dispatch(DeletedataChange(originItems));
		dispatch(DeletedataChangePort(sourceItems));
	};

	return (
		<OneItemContentBox>
			{datatype === 'origin' ? (
				<Draggable key={item.id} draggableId={item.id} index={index}>
					{provided => (
						<OneItemContent
							ref={provided.innerRef}
							{...provided.draggableProps}
							{...provided.dragHandleProps}
						>
							<p>{item.Content}</p>
						</OneItemContent>
					)}
				</Draggable>
			) : (
				<Draggable key={item.id} draggableId={item.id} index={index}>
					{provided => (
						<PortItem
							ref={provided.innerRef}
							{...provided.draggableProps}
							{...provided.dragHandleProps}
						>
							<h1>{item.Type}</h1>
							<p>{item.Content}</p>
							<button onClick={e => onClickDelete(item.id)}>삭제</button>
						</PortItem>
					)}
				</Draggable>
			)}
		</OneItemContentBox>
	);
};

export default TaskCardTestRedux;
