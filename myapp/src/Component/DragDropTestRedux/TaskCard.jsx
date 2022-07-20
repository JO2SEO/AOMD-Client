import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useSelector, useDispatch } from 'react-redux';
import { DeletedataChangePort, selectPortData } from '../../Redux/PortdataSlice';
import styled from 'styled-components';

const OriginDataBox = styled.div`
	box-sizing: border-box;
	width: 100%;
	padding-top: 10px;
`;
const OriginDataContent = styled.div`
	display: flex;
	border-radius: 10px;

	& p {
		display: flex;
		justify-content: center;
		align-items: center;
		background: #d2d8e2;
		margin: 0px 10px 0px 10px;
		width: 100%;
		height: 30px;
		border: none;
		border-radius: 10px;
		font-size: 13px;
		font-weight: 900;
	}
	& p:hover {
		color: white;
		background: #203864;
	}
`;
const PortItem = styled.div`
	width: 30%;
	height: 70px;
	padding: 5px;
	margin: 10px;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	background: #ebeff4;
	border-radius: 20px;

	& button {
		cursor: pointer;
		border: none;
	}
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
						<p style={{ fontSize: '18px', fontWeight: '900', margin: '5px' }}>
							{item.Content}
						</p>
						<p style={{ fontSize: '13px', margin: '5px' }}>{item.Date}</p>
					</div>
					<div>
						<button onClick={e => onClickDelete(item.id)}>x</button>
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
