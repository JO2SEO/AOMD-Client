import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragdataChange, selectData } from './RawdataSlice';
import { DragdataChangePort1, selectDataPort1 } from './Port1dataSlice';
import { DragDropContext } from 'react-beautiful-dnd';
import PortPolioComponent from '../Component/DragDropTestRedux/PortPolioComponent';
import RawDataComponent from '../Component/DragDropTestRedux/RawDataComponent';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	box-sizing: border-box;
`;
export const DragDropBtnBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 10px;
	height: 5%;
	box-sizing: border-box;
`;
export const DragDropContentBox = styled.div`
	margin: 8px;
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 90%;
	max-height: 90%;
	box-sizing: border-box;
`;
export const RawDataBox = styled.div`
	display: flex;
	flex-direction: column;
	width: 15%;
	border-radius: 5px;
	padding: 10px;
	margin-right: 20px;
	box-sizing: border-box;
	border: solid black 3px;
`;
export const PortPolioBox = styled.div`
	width: 82%;
	border: solid black 3px;
	box-sizing: border-box;
`;
export function ChangeData() {
	const dispatch = useDispatch();
	const originData = useSelector(selectData);
	const portData1 = useSelector(selectDataPort1);

	const onDragEnd = result => {
		if (!result.destination) return;

		const { source, destination } = result;
		// console.log('result => ', result);
		// console.log('originData => ', originData);
		// console.log('portData1 => ', portData1);
		if (source.droppableId !== destination.droppableId) {
			const sourceColumn = originData['origin'];
			const destColumn = portData1[destination.droppableId];
			// console.log('sourceColumn => ', sourceColumn);
			// console.log('destColumn => ', destColumn);

			const sourceItems = [...sourceColumn.items];
			const destItems = [...destColumn.items];
			// console.log('sourceItems => ', sourceItems);
			// console.log('destItems => ', destItems);

			// console.log('금마 ID => ', result.draggableId);

			let removed = {};
			let findindex_1 = 0;
			let findindex_2 = 0;

			sourceItems.map((Data, index_1) => {
				Data.map((data, index_2) => {
					if (data.id === result.draggableId) {
						// console.log('data = ', data);
						// 객체 형식 : { id : ~ , Type : ~ ~}
						removed = data;
						// console.log('index_1 = ', index_1);
						// 0 -> 자격증
						// 1 -> 학력
						// 2 -> 수상내역
						findindex_1 = index_1;
						// console.log('index_2 = ', index_2);
						// 데이터 순서 : 0 ~
						findindex_2 = index_2;
					}
				});
			});
			// console.log('removed = ', removed);
			// console.log('findindex_1 = ', findindex_1);
			// console.log('findindex_2 = ', findindex_2);

			const removedData = sourceItems[findindex_1][findindex_2];
			// console.log('removedData = ', removedData);
			destItems.push(removedData);
			// console.log(destItems);
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
	const onClickAddPort = () => {
		console.log('포트폴리오 추가');
	};
	return (
		<Container>
			<DragDropContext onDragEnd={result => onDragEnd(result)}>
				<DragDropBtnBox>
					<button style={{ margin: '10px' }} onClick={onClickShowPort1}>
						포트폴리오 1
					</button>
					<button style={{ margin: '10px' }} onClick={onClickShowPort2}>
						포트폴리오 2
					</button>
					<button style={{ margin: '10px' }} onClick={onClickShowPort3}>
						포트폴리오 3
					</button>
					<button style={{ margin: '10px' }} onClick={onClickAddPort}>
						포트폴리오 추가
					</button>
				</DragDropBtnBox>
				<DragDropContentBox>
					<RawDataBox>
						<RawDataComponent originData={originData} />
					</RawDataBox>
					<PortPolioBox>
						<PortPolioComponent showState={port1State} portData={portData1} />
					</PortPolioBox>
				</DragDropContentBox>
			</DragDropContext>
		</Container>
	);
}
