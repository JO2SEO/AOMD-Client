import React, { useState } from 'react';
// import styled from '@emotion/styled';
import '../../Style/Component/Kanban.css';

import { columnsFromBackend1 } from './KanbanData';
import { columnsFromBackend2 } from './KanbanData2';

import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import TaskCard from './TaskCard';

const Kanban = () => {
	const [columns, setColumns] = useState(columnsFromBackend1);
	// 이건 바꾸면 안돼

	const [columns2, setColumns2] = useState(columnsFromBackend2);
	// 이건 바꿔도 돼

	const onDragEnd = (result, columns, columns2, setColumns, setColumns2) => {
		if (!result.destination) return;

		const { source, destination } = result;

		console.log('result = ', result);
		// sourse[index] = 0
		// destinaiton[index] = 1

		if (source.index !== destination.index) {
			const sourceColumn = columns[source.droppableId];
			const destColumn = columns2[destination.droppableId];
			// 바뀌지 않는 데이터 => 로우 데이터
			console.log('sourceColumn = ', sourceColumn);
			console.log('destColumn = ', destColumn);

			const sourceItems = [...sourceColumn.items];
			console.log('sourceItems = ', sourceItems);

			const destItems = [...destColumn.items];
			console.log('destItems = ', destItems);

			const [removed] = sourceItems.splice(source.index, 1);
			// 지울거 -> 드래그 한거

			console.log('removed = ', removed);

			sourceItems.splice(source.index, 0, removed);
			// 원래대로 유지하기

			destItems.splice(destination.index, 0, removed);
			// 도착지 인덱스에 넣기

			setColumns({
				...columns,
				[source.droppableId]: {
					...sourceColumn,
					items: sourceItems,
				},
				[destination.droppableId]: {
					...destColumn,
					items: destItems,
				},
			});

			setColumns2({
				...columns2,
				[source.droppableId]: {
					...sourceColumn,
					items: sourceItems,
				},
				[destination.droppableId]: {
					...destColumn,
					items: destItems,
				},
			});
		} else {
			const column = columns[source.droppableId];
			const copiedItems = [...column.items];

			const [removed] = copiedItems.splice(source.index, 1);
			// 잘라낸거

			copiedItems.splice(destination.index, 0, removed);

			setColumns({
				...columns,
				[source.droppableId]: {
					...column,
					items: copiedItems,
				},
			});
		}
	};
	return (
		<>
			<DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns)}>
				<div className="Container">
					<div className="TaskColumnStyles">
						{Object.entries(columns).map(([columnId, column], index) => {
							return (
								<>
									<Droppable key={columnId} droppableId={columnId}>
										{(provided, snapshot) => (
											<div
												className="TaskList"
												ref={provided.innerRef}
												{...provided.droppableProps}
											>
												<div>
													<span className="Title">{column.title}</span>
													{column.items.map((item, index) => (
														<TaskCard
															key={item}
															item={item}
															index={index}
														/>
													))}
												</div>

												{provided.placeholder}
											</div>
										)}
									</Droppable>
								</>
							);
						})}
						{Object.entries(columns2).map(([column2Id, column2], index2) => {
							return (
								<>
									<Droppable key={column2Id} droppableId={column2Id}>
										{(provided, snapshot) => (
											<div
												className="TaskList"
												ref={provided.innerRef}
												{...provided.droppableProps}
											>
												<div>
													<span className="Title">{column2.title}</span>
													{column2.items.map((item, index) => (
														<TaskCard
															key={item}
															item={item}
															index={index}
														/>
													))}
												</div>

												{provided.placeholder}
											</div>
										)}
									</Droppable>
								</>
							);
						})}
					</div>
				</div>
			</DragDropContext>
		</>
	);
};

export default Kanban;
