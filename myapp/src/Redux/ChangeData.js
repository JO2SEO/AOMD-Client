import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { DragdataChange, selectData } from './RawdataSlice';
import { DragdataChangePort1, selectDataPort1 } from './Port1dataSlice';

import TaskCardTest from '../Component/DragDropTestRedux/TaskCardTestRedux';
import '../Style/Component/KanbanTestRedux.css';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

export function ChangeData() {
	const dispatch = useDispatch();

	const originData = useSelector(selectData);
	const portData1 = useSelector(selectDataPort1);

	const onDragEnd = result => {
		if (!result.destination) return;

		const { source, destination } = result;

		if (source.droppableId !== destination.droppableId) {
			const sourceColumn = originData[source.droppableId];
			const destColumn = portData1[destination.droppableId];

			const sourceItems = [...sourceColumn.items];
			const destItems = [...destColumn.items];

			const [removed] = sourceItems.splice(source.index, 1);

			destItems.splice(destination.index, 0, removed);

			dispatch(DragdataChange(sourceItems));
			dispatch(DragdataChangePort1(destItems));
		} else {
			return;
		}
	};

	const [port1State, setPort1State] = useState(true);
	const [port2State, setPort2State] = useState(false);
	const [port3State, setPort3State] = useState(false);

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

	function returnTaskCard(column) {
		const info1 = []; // 자격증
		const info2 = []; // 수상내역
		const info3 = []; // 학점
		const info4 = []; // 학력

		column.items.map((item, index) => {
			if (item.Type === '자격증') {
				info1.push(item);
			}
			if (item.Type === '수상내역') {
				info2.push(item);
			}
			if (item.Type === '학점') {
				info3.push(item);
			}
			if (item.Type === '학력') {
				info4.push(item);
			}
		});

		// console.log('info1 = ', info1);
		// console.log('info2 = ', info2);
		// console.log('info3 = ', info3);
		// console.log('info4 = ', info4);

		return (
			<div>
				<div className="TaskCardTestBox">
					<h1> 자격증 </h1>

					{info1.map((item, index) => {
						return (
							<TaskCardTest
								key={item.id}
								item={item}
								index={index}
								datatype="origin"
							/>
						);
					})}
				</div>
				<div className="TaskCardTestBox">
					<h1> 수상내역 </h1>
					{info2.map((item, index) => {
						return (
							<TaskCardTest
								key={item.id}
								item={item}
								index={index}
								datatype="origin"
							/>
						);
					})}
				</div>
				<div className="TaskCardTestBox">
					<h1> 학점 </h1>
					{info3.map((item, index) => {
						return (
							<TaskCardTest
								key={item.id}
								item={item}
								index={index}
								datatype="origin"
							/>
						);
					})}
				</div>
				<div className="TaskCardTestBox">
					<h1> 학력 </h1>
					{info4.map((item, index) => {
						return (
							<TaskCardTest
								key={item.id}
								item={item}
								index={index}
								datatype="origin"
							/>
						);
					})}
				</div>
			</div>
		);
	}

	return (
		<div className="ContainerT">
			<DragDropContext onDragEnd={result => onDragEnd(result)}>
				<div className="DragDropBtnBoxT">
					<button onClick={onClickShowPort1}> 포트폴리오 1 </button>
					<button onClick={onClickShowPort2}> 포트폴리오 2 </button>
					<button onClick={onClickShowPort3}> 포트폴리오 3 </button>
				</div>
				<div className="TaskColumnStylesT">
					{Object.entries(originData).map(([columnId, column], index) => {
						return (
							<Droppable key={columnId} droppableId={columnId}>
								{(provided, snapshot) => (
									<div
										className="TaskListT"
										ref={provided.innerRef}
										{...provided.droppableProps}
									>
										<span className="TitleT">{column.title}</span>
										{returnTaskCard(column)}

										{provided.placeholder}
									</div>
								)}
							</Droppable>
						);
					})}

					<div className="portpolioBoxT">
						{port1State ? (
							<>
								{Object.entries(portData1).map(([columnId, column], index) => {
									return (
										<Droppable key={columnId} droppableId={columnId}>
											{(provided, snapshot) => (
												<div
													className="portpolioListT"
													ref={provided.innerRef}
													{...provided.droppableProps}
												>
													<span className="TitleT">{column.title}</span>
													{column.items.map((item, index) => (
														<TaskCardTest
															key={item.id}
															item={item}
															index={index}
															datatype=""
														/>
													))}

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
			</DragDropContext>
		</div>
	);
}
