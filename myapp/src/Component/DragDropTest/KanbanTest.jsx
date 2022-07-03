import React, { useState } from 'react';
// import styled from '@emotion/styled';
import '../../Style/Component/KanbanTest.css';

import { columnsFromBackend, port1, port2, port3 } from './KanbanDataTest';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import TaskCardTest from './TaskCardTest';

const KanbanTest = () => {
	const [port1State, setPort1State] = useState(true);
	const [port2State, setPort2State] = useState(false);
	const [port3State, setPort3State] = useState(false);

	const [columns, setColumns] = useState(columnsFromBackend);
	const [columnsPort1, setColumnsPort1] = useState(port1);
	const [columnsPort2, setColumnsPort2] = useState(port2);
	const [columnsPort3, setColumnsPort3] = useState(port3);

	const onDragEnd = (result, columns, setColumns, columnsPort1, setColumnsPort1) => {
		console.log(result);
		if (!result.destination) return;
		const { source, destination } = result;
		if (source.droppableId !== destination.droppableId) {
			const sourceColumn = columns[origin];
			// 내 데이터 정보 -> row data

			const destColumn = columns[2];
			// 자기소개서에 데이터 정보 -> 새로 추가할 내용

			const sourceItems = [...sourceColumn.items];
			const destItems = [...destColumn.items];
			const [removed] = sourceItems.splice(source.index, 1);

			sourceItems.splice(destination.index, 0, removed);
			// 옮겼는거 다시 오리지날에다가 복구

			destItems.splice(destination.index, 0, removed);
			// 새로 추가

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
		}
	};

	const onClickShowPort1 = () => {
		setPort1State(true);
		setPort2State(false);
		setPort3State(false);
	};
	const onClickShowPort2 = () => {
		setPort1State(false);
		setPort2State(true);
		setPort3State(false);
	};
	const onClickShowPort3 = () => {
		setPort1State(false);
		setPort2State(false);
		setPort3State(true);
	};

	return (
		<DragDropContext
			onDragEnd={result =>
				onDragEnd(result, columns, setColumns, columnsPort1, setColumnsPort1)
			}
		>
			<div className="ContainerT">
				<div className="DragDropBtnBoxT">
					<button onClick={onClickShowPort1}> port 1 </button>
					<button onClick={onClickShowPort2}> port 2 </button>
					<button onClick={onClickShowPort3}> port 3 </button>
				</div>

				<div className="TaskColumnStylesT">
					{Object.entries(columns).map(([columnId, column], index) => {
						return (
							<Droppable key={column.title} droppableId={columnId}>
								{(provided, snapshot) => (
									<div
										className="TaskListT"
										ref={provided.innerRef}
										{...provided.droppableProps}
									>
										<div>
											<span className="TitleT">{column.title}</span>
											{column.items.map((item, index) => (
												<TaskCardTest
													key={index}
													item={item}
													index={index}
													datatype="origin"
													columns={columns}
													setColumns={setColumns}
												/>
											))}
										</div>

										{provided.placeholder}
									</div>
								)}
							</Droppable>
						);
					})}

					<div className="portpolioBoxT">
						{port1State ? (
							<>
								{Object.entries(columnsPort1).map(([columnId, column], index) => {
									return (
										<Droppable key={column.title} droppableId={columnId}>
											{(provided, snapshot) => (
												<div
													className="portpolioListT"
													ref={provided.innerRef}
													{...provided.droppableProps}
												>
													<div>
														<span className="TitleT">
															{column.title}
														</span>
														{column.items.map((item, index) => (
															<TaskCardTest
																key={index}
																item={item}
																index={index}
																datatype=""
																columns={columnsPort1}
																setColumns={setColumnsPort1}
															/>
														))}
													</div>

													{provided.placeholder}
												</div>
											)}
										</Droppable>
									);
								})}
							</>
						) : (
							<></>
						)}
						{port2State ? (
							<>
								{Object.entries(columnsPort2).map(([columnId, column], index) => {
									return (
										<Droppable key={column.title} droppableId={columnId}>
											{(provided, snapshot) => (
												<div
													className="portpolioListT"
													ref={provided.innerRef}
													{...provided.droppableProps}
												>
													<div>
														<span className="TitleT">
															{column.title}
														</span>
														{column.items.map((item, index) => (
															<TaskCardTest
																key={index}
																item={item}
																index={index}
																datatype="origin"
																columns={columnsPort2}
																setColumns={setColumnsPort2}
															/>
														))}
													</div>

													{provided.placeholder}
												</div>
											)}
										</Droppable>
									);
								})}
							</>
						) : (
							<></>
						)}
						{port3State ? (
							<>
								{Object.entries(columnsPort3).map(([columnId, column], index) => {
									return (
										<Droppable key={column.title} droppableId={columnId}>
											{(provided, snapshot) => (
												<div
													className="portpolioListT"
													ref={provided.innerRef}
													{...provided.droppableProps}
												>
													<div>
														<span className="TitleT">
															{column.title}
														</span>
														{column.items.map((item, index) => (
															<TaskCardTest
																key={index}
																item={item}
																index={index}
																datatype="origin"
																columns={columnsPort3}
																setColumns={setColumnsPort3}
															/>
														))}
													</div>

													{provided.placeholder}
												</div>
											)}
										</Droppable>
									);
								})}
							</>
						) : (
							<></>
						)}
					</div>
				</div>
			</div>
		</DragDropContext>
	);
};

export default KanbanTest;
