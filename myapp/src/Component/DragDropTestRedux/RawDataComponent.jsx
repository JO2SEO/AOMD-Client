import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { DragdataChange, selectData } from '../../Redux/RawdataSlice';
import { DragdataChangePort1, selectDataPort1 } from '../../Redux/Port1dataSlice';
import TaskCardTest from './TaskCardTestRedux';

import '../../Style/Component/KanbanTestRedux.css';
import { Droppable } from 'react-beautiful-dnd';

const RawDataComponent = props => {
	const { originData } = props;
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
			<>
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
			</>
		);
	}
	return (
		<div>
			{Object.entries(originData).map(([columnId, column], index) => {
				return (
					<Droppable key={columnId} droppableId={columnId}>
						{(provided, snapshot) => (
							<div ref={provided.innerRef} {...provided.droppableProps}>
								<span className="TitleT">{column.title}</span>
								{returnTaskCard(column)}
								<span style={{ display: 'none' }}>{provided.placeholder}</span>
							</div>
						)}
					</Droppable>
				);
			})}
		</div>
	);
};

export default RawDataComponent;
