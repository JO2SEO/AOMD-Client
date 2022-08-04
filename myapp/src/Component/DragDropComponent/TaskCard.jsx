import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useSelector, useDispatch } from 'react-redux';

import { DeletedataChangePort, selectPortData } from 'Redux/PortdataSlice';
import './DragDropComponent.css';

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
				<div className="OriginDataBox">
					<Draggable key={item.id} draggableId={item.id} index={index}>
						{provided => (
							<div
								className="OriginDataContent"
								ref={provided.innerRef}
								{...provided.draggableProps}
								{...provided.dragHandleProps}
							>
								<p>{item.Content}</p>
							</div>
						)}
					</Draggable>
				</div>
			) : (
				<div className="PortItem">
					<div>
						<p style={{ fontSize: '18px', fontWeight: '900', margin: '5px' }}>
							{item.Content}
						</p>
						<p style={{ fontSize: '13px', margin: '5px' }}>{item.Date}</p>
					</div>
					<div>
						<button onClick={e => onClickDelete(item.id)}>x</button>
					</div>
				</div>
			)}
		</>
	);
};

export default TaskCard;
