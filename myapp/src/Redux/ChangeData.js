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

	// console.log('originData = ', originData);
	// originData =  origin: {title: '나의 데이터', items: Array(3)}

	// console.log('portData = ', portData1);
	// portData =  {port1: {…}}port1: {title: '포트폴리오1', items: Array(1)}

	const onDragEnd = result => {
		// console.log(result);

		if (!result.destination) return;
		// 다른 곳에 놔뒀을 때 바로 리턴

		const { source, destination } = result;
		// console.log('source = ', source);
		// source =  {index: 0, droppableId: 'origin'}
		// console.log('destination = ', destination);
		// destination =  {droppableId: 'port1', index: 1}

		if (source.droppableId !== destination.droppableId) {
			const sourceColumn = originData[source.droppableId];
			// console.log('sourceColumn = ', sourceColumn);

			const destColumn = portData1[destination.droppableId];
			// console.log('destColumn = ', destColumn);

			const sourceItems = [...sourceColumn.items];
			const destItems = [...destColumn.items];

			// console.log('sourceItems = ', sourceItems);
			// console.log('destItems = ', destItems);

			const [removed] = sourceItems.splice(source.index, 1);
			// console.log('removed = ', removed);

			// sourceItems.splice(source.index, 0, removed);
			// 옮겼는거 다시 오리지날에다가 복구

			destItems.splice(destination.index, 0, removed);
			// 새로 추가

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
						// console.log('originData = ', originData);
						// // origin: {title: '나의 데이터', items: Array(3)}
						// console.log('originData columnId= ', columnId);
						// // columnId = origin
						// console.log('originData column= ', column);
						// // column=  {title: '나의 데이터', items: Array(3)}
						// console.log('originData index = ', originData.index);

						return (
							<Droppable key={columnId} droppableId={columnId}>
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
													key={item.id}
													item={item}
													index={index}
													datatype="origin"
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
								{Object.entries(portData1).map(([columnId, column], index) => {
									// console.log('portData1 = ', portData1);
									// // origin: {title: '나의 데이터', items: Array(3)}
									// console.log('portData1 columnId= ', columnId);
									// // columnId = origin
									// console.log('portData1 column= ', column);
									// // column=  {title: '나의 데이터', items: Array(3)}
									// console.log('portData1 index = ', portData1.index);
									return (
										<Droppable key={columnId} droppableId={columnId}>
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
																key={item.id}
																item={item}
																index={index}
																datatype=""
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

				{/* </div> */}
				{/* <div>
				<h1>Hello</h1>
				<button onClick={() => dispatch(typeChange())}>Type Change - Rowdata</button>
				<button onClick={() => dispatch(typeChangePort1())}>Type Change - Port1</button>

				<div>
					<h1>originData - Title (using selectData) :</h1>
					{originData.title}
				</div>
				<div>
					<h1>originData - itmes (using selectData) :</h1>
					{originData.origin.items.map(item => (
						<div key={item.id}>{item.id}</div>
					))}
				</div>
				<div>
					<h1>portData - Title (using selectData) :</h1>
					{portData.title}
				</div>
				<div>
					<h1>portData - itmes (using selectData) :</h1>
					{/* {portData.port1.items.map(item => (
						<div key={item.id}>{item.id}</div>
					))} */}
				{/* </div> */}
				{/* </div>  */}
			</DragDropContext>
		</div>
	);
}
