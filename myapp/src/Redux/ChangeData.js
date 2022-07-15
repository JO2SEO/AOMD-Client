import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragdataChange, selectRawData } from './RawdataSlice';
import { DragdataChangePort, selectPortData } from './PortdataSlice';
import { selectLoginData, SuccessLogout } from './LoginCheck';
import { useNavigate } from 'react-router-dom';
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
	const originData = useSelector(selectRawData);
	const portData = useSelector(selectPortData);
	const navigate = useNavigate();

	const onDragEnd = result => {
		if (!result.destination) return;

		const { source, destination } = result;

		if (source.droppableId !== destination.droppableId) {
			const sourceColumn = originData['origin'];
			const destColumn = portData['port1'];

			const sourceItems = [...sourceColumn.items];
			const destItems = [...destColumn.items];

			let removed;
			let findindex_1 = 0;
			let findindex_2 = 0;

			sourceItems.map((Data, index_1) => {
				Data.map((data, index_2) => {
					if (data.id === result.draggableId) {
						removed = data;
						findindex_1 = index_1;
						findindex_2 = index_2;
					}
				});
			});

			const removedData = sourceItems[findindex_1][findindex_2];
			findindex_1 = 0;

			destItems.map((Data, index_1) => {
				if (Data[0].Type === removedData.Type) {
					findindex_1 = index_1;
				}
			});

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

	const onClickMoveHome = () => {
		navigate('/AOMD-Client');
	};

	const onClickLogout = () => {
		dispatch(SuccessLogout(true));
		navigate('/AOMD-Client');
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
						포트폴리오 3 - X
					</button>
					<button style={{ margin: '10px' }} onClick={onClickAddPort}>
						포트폴리오 추가 - X
					</button>

					<button style={{ margin: '10px' }} onClick={onClickMoveHome}>
						홈으로
					</button>

					<button style={{ margin: '10px' }} onClick={onClickLogout}>
						로그아웃
					</button>
				</DragDropBtnBox>
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
