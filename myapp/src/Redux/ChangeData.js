import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';

import { selectRawData } from './RawdataSlice';
import { DragdataChangePort, selectPortData } from './PortdataSlice';
import PortPolioComponent from 'Component/DragDropTestRedux/PortPolioComponent';
import RawDataComponent from 'Component/DragDropTestRedux/RawDataComponent';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0% 5% 0% 5%;
	padding-top: 10px;
	height: 100%;
	box-sizing: border-box;
	border-top: black solid 1px;
`;
const DragDropBtnBox = styled.div`
	display: flex;
	margin-left: 22%;
	justify-content: flex-start;
	align-items: center;
	height: 5%;
	box-sizing: border-box;
`;
const DragDropContentBox = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 80%;
	box-sizing: border-box;
`;
const RawDataBox = styled.div`
	display: flex;
	flex-direction: column;
	width: 20%;
	height: 100%;
	border-radius: 5px;
	box-sizing: border-box;
	margin-top: -25px;
`;
const PortPolioBox = styled.div`
	width: 80%;
	border: solid black 1px;
	box-sizing: content-box;
	margin: 20px;
	border-radius: 10px;
`;
const PortBtn = styled.div`
	background: ${({ active }) => {
		if (active) {
			return '#203864';
		}
		return '#9fa9bc';
	}};
	font-size: 12px;
	margin: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
	width: 130px;
	height: 25px;
	border-radius: 20px;
	color: white;
	font-weight: 700;
	cursor: pointer;
`;
const PlusBtn = styled.div`
	margin: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
	background: #9fa9bc;
	width: 25px;
	height: 25px;
	border-radius: 20px;
	color: white;
	font-weight: 700;
	cursor: pointer;
`;
export function ChangeData() {
	const dispatch = useDispatch();
	const originData = useSelector(selectRawData);
	const portData = useSelector(selectPortData);

	const onDragEnd = result => {
		if (!result.destination) return;

		const { source, destination } = result;
		console.log('result = ', result);

		if (source.droppableId !== destination.droppableId) {
			const sourceColumn = originData['origin'];
			const destColumn = portData['port1'];

			const sourceItems = [...sourceColumn.items];
			const destItems = [...destColumn.items];

			for (var index_11 = 0; index_11 < 3; index_11++) {
				var forLen11 = destItems[index_11].length;
				for (var index_22 = 0; index_22 < forLen11; index_22++) {
					if (destItems[index_11][index_22].id === result.draggableId) {
						alert('이미 추가한 데이터입니다.');
						return;
					}
				}
			}

			var findindex_1 = 0;
			var findindex_2 = 0;

			for (var index_1 = 0; index_1 < 3; index_1++) {
				var forLen = sourceItems[index_1].length;
				for (var index_2 = 0; index_2 < forLen; index_2++) {
					if (sourceItems[index_1][index_2].id === result.draggableId) {
						findindex_1 = index_1;
						findindex_2 = index_2;
					}
				}
			}

			const removedData = sourceItems[findindex_1][findindex_2];
			findindex_1 = 0;

			forLen = destItems.length;

			for (index_1 = 0; index_1 < forLen; index_1++) {
				if (destItems[index_1][0].Type === removedData.Type) {
					findindex_1 = index_1;
				}
			}

			let Before = destItems[findindex_1];
			let After = [...Before, removedData];
			destItems[findindex_1] = After;

			dispatch(DragdataChangePort(destItems));
		} else {
			return;
		}
	};

	const [portState, setPortState] = useState([true, false, false]);

	const onClickShowPort1 = () => {
		setPortState([true, false, false]);
	};
	const onClickShowPort2 = () => {
		setPortState([false, true, false]);
	};
	const onClickShowPort3 = () => {
		setPortState([false, false, true]);
	};

	const onClickAddPort = () => {
		console.log('포트폴리오 추가');
	};

	return (
		<Container>
			<DragDropBtnBox>
				<PortBtn active={portState[0]} onClick={onClickShowPort1}>
					포트폴리오 1
				</PortBtn>
				<PortBtn active={portState[1]} onClick={onClickShowPort2}>
					포트폴리오 2
				</PortBtn>
				<PortBtn active={portState[2]} onClick={onClickShowPort3}>
					포트폴리오 3
				</PortBtn>
				<PlusBtn onClick={onClickAddPort}>+</PlusBtn>
			</DragDropBtnBox>
			<DragDropContext onDragEnd={result => onDragEnd(result)}>
				<DragDropContentBox>
					<RawDataBox>
						<RawDataComponent originData={originData} />
					</RawDataBox>
					<PortPolioBox>
						<PortPolioComponent showState={portState} portData={portData} />
					</PortPolioBox>
				</DragDropContentBox>
			</DragDropContext>
		</Container>
	);
}
