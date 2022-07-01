import React, { useState } from 'react';
// import styled from '@emotion/styled';
import '../../Style/Component/Kanban.css';

import { columnsFromBackend } from './KanbanData';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import TaskCard from './TaskCard';

const Kanban = () => {
	const [columns, setColumns] = useState(columnsFromBackend);

	const onDragEnd = (result, columns, setColumns) => {
		if (!result.destination) return;
		const { source, destination } = result;
		if (source.droppableId !== destination.droppableId) {
			const sourceColumn = columns[source.droppableId];
			const destColumn = columns[destination.droppableId];
			const sourceItems = [...sourceColumn.items];
			const destItems = [...destColumn.items];
			const [removed] = sourceItems.splice(source.index, 1);
			destItems.splice(destination.index, 0, removed);
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
		} else {
			const column = columns[source.droppableId];
			const copiedItems = [...column.items];
			const [removed] = copiedItems.splice(source.index, 1);
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
		<DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns)}>
			<div className="Container">
				<div className="TaskColumnStyles">
					{Object.entries(columns).map(([columnId, column], index) => {
						return (
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
													datatype="left"
												/>
											))}
										</div>

										{provided.placeholder}
									</div>
								)}
							</Droppable>
						);
					})}
				</div>
			</div>
		</DragDropContext>
	);
};

export default Kanban;
