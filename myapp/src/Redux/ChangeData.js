import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';

import { selectRawData } from './RawdataSlice';
import { DragdataChangePort, selectPortData } from './PortdataSlice';
import PortPolioComponent from 'Component/DragDropTestRedux/PortPolioComponent';
import RawDataComponent from 'Component/DragDropTestRedux/RawDataComponent';

import './ChangeData.css';

const PortBtn = styled.div`
	background: ${({ active }) => {
		if (active) {
			return '#203864';
		}
		return '#9fa9bc';
	}};
`;

function ChangeData() {
	const dispatch = useDispatch();
	const originData = useSelector(selectRawData);
	const portData = useSelector(selectPortData);
	const [portState, setPortState] = useState([true, false, false]);

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
	const onClickShowPort1 = () => {
		setPortState([true, false, false]);
	};
	const onClickShowPort2 = () => {
		alert('아직 개발중인 기능입니다');

		// setPortState([false, true, false]);
	};
	const onClickShowPort3 = () => {
		alert('아직 개발중인 기능입니다');

		// setPortState([false, false, true]);
	};
	const onClickAddPort = () => {
		alert('아직 개발중인 기능입니다');
	};

	return (
		<div className="Container">
			<div className="DragDropBtnBox">
				<PortBtn className="PortBtn" active={portState[0]} onClick={onClickShowPort1}>
					포트폴리오 1
				</PortBtn>
				<PortBtn className="PortBtn" active={portState[1]} onClick={onClickShowPort2}>
					포트폴리오 2
				</PortBtn>
				<PortBtn className="PortBtn" active={portState[2]} onClick={onClickShowPort3}>
					포트폴리오 3
				</PortBtn>
				<button className="PlusBtn" onClick={onClickAddPort}>
					+
				</button>
			</div>
			<DragDropContext onDragEnd={result => onDragEnd(result)}>
				<div className="DragDropContentBox">
					<div className="RawDataBox">
						<RawDataComponent originData={originData} />
					</div>
					<div className="PortPolioBox">
						<PortPolioComponent showState={portState} portData={portData} />
					</div>
				</div>
			</DragDropContext>
		</div>
	);
}

export default ChangeData;
