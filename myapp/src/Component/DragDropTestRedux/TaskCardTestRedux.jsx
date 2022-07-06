import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import '../../Style/Component/KanbanTestRedux.css';

import { useSelector, useDispatch } from 'react-redux';
import { DeletedataChange, selectData } from '../../Redux/RawdataSlice';
import { DeletedataChangePort1, selectDataPort1 } from '../../Redux/Port1dataSlice';

const TaskCardTestRedux = props => {
	const { item, index, datatype } = props;
	const dispatch = useDispatch();

	const originData = useSelector(selectData);
	const portData1 = useSelector(selectDataPort1);

	const onClickDelete = itemID => {
		const originColumn = originData['origin'];
		const sourceColumn = portData1['port1'];
		const originItems = [...originColumn.items];
		const sourceItems = [...sourceColumn.items];
		const lengthOrigin = originItems.length;

		for (let i = 0; i < sourceItems.length; i++) {
			if (sourceItems[i].id === itemID) {
				const [removed] = sourceItems.splice(i, 1);
				originItems.splice(lengthOrigin, 0, removed);
				break;
			}
		}

		dispatch(DeletedataChange(originItems));
		dispatch(DeletedataChangePort1(sourceItems));
	};

	return (
		<div className="oneItemContentBox">
			{datatype === 'origin' ? (
				<Draggable key={item.id} draggableId={item.id.toString()} index={index}>
					{provided => (
						<div
							className="oneItemContent fromLeft"
							ref={provided.innerRef}
							{...provided.draggableProps}
							{...provided.dragHandleProps}
						>
							<p className="oneItemContentP">{item.Content}</p>
						</div>
					)}
				</Draggable>
			) : (
				<Draggable key={item.id} draggableId={item.id.toString()} index={index}>
					{provided => (
						<div
							className="portItem"
							ref={provided.innerRef}
							{...provided.draggableProps}
							{...provided.dragHandleProps}
						>
							<h1>{item.Type}</h1>
							<p>{item.Content}</p>
							<button onClick={e => onClickDelete(item.id)}>삭제</button>
						</div>
					)}
				</Draggable>
			)}
		</div>
	);
};

export default TaskCardTestRedux;
