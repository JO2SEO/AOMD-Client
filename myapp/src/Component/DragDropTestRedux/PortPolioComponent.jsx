import React, { useState } from 'react';

// import { useSelector, useDispatch } from 'react-redux';
// import { DragdataChange, selectData } from './RawdataSlice';
// import { DragdataChangePort1, selectDataPort1 } from './Port1dataSlice';

import TaskCardTest from './TaskCardTestRedux';
import '../../Style/Component/KanbanTestRedux.css';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const PortPolioComponent = props => {
	const { showState, portData } = props;
	const Swal = require('sweetalert2');

	const onClickStore = () => {
		Swal.fire({
			position: 'center',
			icon: 'success',
			title: 'Saved',
			showConfirmButton: false,
			timer: 1500,
			heightAuto: false,
		});
	};
	const onClickMakeURL = () => {
		Swal.fire({
			title: '생성된 URL',
			showDenyButton: true,
			text: 'www.naver.com',
			icon: 'success',
			confirmButtonText: 'OK',
			denyButtonText: `Copy`,
			heightAuto: false,
		}).then(result => {
			if (result.isDenied) {
				console.log(result);
			}
		});
	};
	return (
		<>
			{showState ? (
				<>
					{Object.entries(portData).map(([columnId, column], index) => {
						return (
							<Droppable key={columnId} droppableId={columnId}>
								{(provided, snapshot) => (
									<div
										className="portpolioListT"
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
													datatype=""
												/>
											))}
										</div>
										<div className="introduceBox">
											<h1>자기소개서</h1>
											<textarea></textarea>
										</div>
										<div className="submitBox">
											<button
												className="btn"
												onClick={onClickStore}
												type="button"
											>
												<span className="shadow"></span>
												<span className="edge"></span>
												<span className="front">저장하기</span>
											</button>
											<button
												className="btn"
												onClick={onClickMakeURL}
												type="button"
											>
												<span className="shadow"></span>
												<span className="edge"></span>
												<span className="front">URL 생성하기</span>
											</button>
										</div>
										<span style={{ display: 'none' }}>
											{provided.placeholder}
										</span>
									</div>
								)}
							</Droppable>
						);
					})}
				</>
			) : (
				<></>
			)}
		</>
	);
};

export default PortPolioComponent;
