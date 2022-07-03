import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import '../../Style/Component/KanbanTest.css';

const TaskCardTest = ({ item, index, datatype, columns, setColumns, columnId }) => {
	console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
	console.log('item = ', item);
	console.log('index = ', index);
	console.log('datatype = ', datatype);
	console.log('columns = ', columns);
	const onClickDelete = itemID => {
		// console.log('itemID = ', itemID);
		// console.log('original = ', columns);

		const sourceColumn = columns[1];
		// console.log(sourceColumn);
		// const destColumn = columns[1];

		const sourceItems = [...sourceColumn.items];
		// const destItems = [...destColumn.items];

		// const items = columns["2"].items;
		// console.log('before = ', destItems);
		// console.log('Before : ', columns);

		for (let i = 0; i < sourceItems.length; i++) {
			// console.log('i = ', i);
			// console.log(destItems[i]);

			if (sourceItems[i].id === itemID) {
				// console.log('찾았다');
				sourceItems.splice(i, 1);
				break;
			}
		}
		// console.log('after = ', destItems);

		setColumns({
			...columns,
			1: {
				...sourceColumn,
				items: sourceItems,
			},
		});
		// console.log('After : ', columns);
	};
	return (
		<div>
			{datatype === 'origin' ? (
				<Draggable key={item.id} draggableId={item.id} index={index}>
					{provided => (
						<div
							ref={provided.innerRef}
							{...provided.draggableProps}
							{...provided.dragHandleProps}
						>
							<div className="TaskInformationT">
								<h1>{item.Type}</h1>
								<p>{item.Content}</p>
							</div>
						</div>
					)}
				</Draggable>
			) : (
				<div>
					<Draggable key={item.id} draggableId={item.id} index={index}>
						{provided => (
							<div
								ref={provided.innerRef}
								{...provided.draggableProps}
								{...provided.dragHandleProps}
							>
								<div className="TaskInformationT">
									<h1>{item.Type}</h1>
									<p>{item.Content}</p>
								</div>
								<button onClick={e => onClickDelete(item.id)}>삭제</button>
							</div>
						)}
					</Draggable>
				</div>
			)}
		</div>
	);
};

export default TaskCardTest;
