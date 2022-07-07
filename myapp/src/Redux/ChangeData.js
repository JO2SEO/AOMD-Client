import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { DragdataChange, selectData } from './RawdataSlice';
import { DragdataChangePort1, selectDataPort1 } from './Port1dataSlice';

import '../Style/Component/KanbanTestRedux.css';
import { DragDropContext } from 'react-beautiful-dnd';

import PortPolioComponent from '../Component/DragDropTestRedux/PortPolioComponent';
import RawDataComponent from '../Component/DragDropTestRedux/RawDataComponent';

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

	return (
		<div className="ContainerT">
			<DragDropContext onDragEnd={result => onDragEnd(result)}>
				<div className="DragDropBtnBoxT">
					<button onClick={onClickShowPort1}> 포트폴리오 1 </button>
					<button onClick={onClickShowPort2}> 포트폴리오 2 </button>
					<button onClick={onClickShowPort3}> 포트폴리오 3 </button>
				</div>
				<div className="TaskColumnStylesT">
					<div className="TaskListT">
						<RawDataComponent originData={originData} />
					</div>
					<div className="portpolioBoxT">
						<PortPolioComponent showState={port1State} portData={portData1} />
					</div>
				</div>
			</DragDropContext>
		</div>
	);
}
