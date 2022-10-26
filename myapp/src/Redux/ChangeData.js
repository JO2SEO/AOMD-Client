import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';

import RawdataSlice, { LoadRawData } from './RawdataSlice';
import PortdataSlice, { LoadPortData } from './PortdataSlice';

import { selectRawData } from './RawdataSlice';
import { DragdataChangePort, selectPortData } from './PortdataSlice';
import PortPolioComponent from 'Component/DragDropComponent/PortPolioComponent';
import RawDataComponent from 'Component/DragDropComponent/RawDataComponent';

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
	// console.log('<< ChangeData.js  >> \n');

	const [portState, setPortState] = useState([true, false, false]);

	// LoadRawData();
	// LoadPortData();

	const originData = useSelector(selectRawData);
	const [originDataState, setOriginDataState] = useState(originData);

	const portData = useSelector(selectPortData);
	const [portDataState, setPortDataState] = useState(portData);

	useEffect(() => {
		// console.log('originData - Before / In ChangeData = ', originDataState);
		setOriginDataState(originData);
		// console.log('originData - After In ChangeData = ', originDataState);
	}, [originData]);

	useEffect(() => {
		// console.log('portData - Before In ChangeData = ', portDataState);
		setPortDataState(portData);
		// console.log('portData - After In ChangeData = ', portDataState);
	}, [portData]);

	const dispatch = useDispatch();

	const onDragEnd = result => {
		if (!result.destination) return;
		// 드래그 드랍 가능한 범위 밖이면 걍 리턴

		const { source, destination } = result;
		// console.log('result = ', result);

		if (source.droppableId !== destination.droppableId) {
			const sourceColumn = originData.origin;
			const destColumn = portData.port1;

			// console.log('sourceColumn = ', sourceColumn);
			// console.log('before destColumn = ', destColumn);

			const sourceItems1 = [sourceColumn.items];
			const destItems1 = [destColumn.items];

			const sourceItems = sourceItems1[0];
			const destItems = destItems1[0].blockCompositeDto;

			// console.log('@@@@@@@@@@@ sourceItems = ', sourceItems);
			// console.log('@@@@@@@@@@@ destItems = ', destItems);

			const dragItemID = result.draggableId;
			// console.log('dragItemID = ', dragItemID);

			var dragType = '';

			if (dragItemID >= 10 && dragItemID < 20) {
				dragType = 'AWARD';
			}

			if (dragItemID >= 20 && dragItemID < 30) {
				dragType = 'EDUCATION';
			}

			if (dragItemID >= 30 && dragItemID < 40) {
				dragType = 'LICENSE';
			}

			// dragType = dragType[0];
			// console.log('@@@ =>', dragType);
			// 타입이 뭐냐 => AWARD, LICENSE ~~

			// console.log('destItems = ', destItems);

			var awardValue = destItems.awardDtoList;
			// console.log('awardValue = ', awardValue);
			var awardValueLen = destItems.awardDtoList.length;

			var educationValue = destItems.educationDtoList;
			var educationValueLen = destItems.educationDtoList.length;

			var licenseValue = destItems.licenseDtoList;
			var licenseValueLen = destItems.licenseDtoList.length;

			var awardValueSource = sourceItems.awardDtoList;
			// console.log('awardValueSource = ', awardValueSource);
			var awardValueSourceLen = sourceItems.awardDtoList.length;
			// console.log('Length = ', awardValueSourceLen);

			var educationValueSource = sourceItems.educationDtoList;
			var educationValueSourceLen = sourceItems.educationDtoList.length;

			var licenseValueSource = sourceItems.licenseDtoList;
			var licenseValueSourceLen = sourceItems.licenseDtoList.length;

			// 드래그 한 레코드
			var recordToAdd = {};

			// 레코드 뽑아오기
			if (dragType === 'AWARD') {
				// alert('!');
				for (var i = 0; i < awardValueSourceLen; i++) {
					// console.log('1 => ', result.draggableId);
					// console.log('2 => ', awardValueSource[i].onumber);
					if (result.draggableId == awardValueSource[i].onumber) {
						recordToAdd = awardValueSource[i];
						break;
					}
				}
			}
			if (dragType === 'EDUCATION') {
				for (var i = 0; i < educationValueSourceLen; i++) {
					if (result.draggableId == educationValueSource[i].onumber) {
						recordToAdd = educationValueSource[i];
						break;
					}
				}
			}
			if (dragType === 'LICENSE') {
				for (var i = 0; i < licenseValueSourceLen; i++) {
					if (result.draggableId == licenseValueSource[i].onumber) {
						recordToAdd = licenseValueSource[i];
						break;
					}
				}
			}

			// console.log('recordToAdd = ', recordToAdd);

			// 만약에 드랍하려고 하는 곳에 이미 똑같은 데이터가 있으면 ?
			if (dragType === 'AWARD') {
				for (var i = 0; i < awardValueLen; i++) {
					if (result.draggableId == awardValue[i].onumber) {
						alert('이미 추가한 데이터입니다.');
						return;
					}
				}
			}
			if (dragType === 'EDUCATION') {
				for (var i = 0; i < educationValueLen; i++) {
					if (result.draggableId == educationValue[i].onumber) {
						alert('이미 추가한 데이터입니다.');
						return;
					}
				}
			}
			if (dragType === 'LICENSE') {
				for (var i = 0; i < licenseValueLen; i++) {
					if (result.draggableId == licenseValue[i].onumber) {
						alert('이미 추가한 데이터입니다.');
						return;
					}
				}
			}

			// 추가하기
			let Array1 = [];
			let Array = Array1.concat(...awardValue, ...educationValue, ...licenseValue);

			// console.log('Array = ', Array);

			const Array_Award = [...awardValue];
			const Array_Education = [...educationValue];
			const Array_LicenseDto = [...licenseValue];

			// console.log('recordToAdd = ', recordToAdd);

			for (let i = 0; i < Array.length + 1; i++) {
				if (dragType == 'AWARD') {
					Array_Award.push(recordToAdd);
					// console.log('Array_Award = ', Array_Award);
					break;
				}
				if (dragType === 'EDUCATION') {
					Array_Education.push(recordToAdd);
					break;
				}
				if (dragType === 'LICENSE') {
					Array_LicenseDto.push(recordToAdd);
					break;
				}
			}

			const totalSend = {};

			const ResultArrayForSend = {};

			// ResultArrayForSend.awardDtoList = Array_Award;

			// ResultArrayForSend.portfolioDto = destColumn.items.portfolioDto;
			ResultArrayForSend.awardDtoList = Array_Award;
			ResultArrayForSend.educationDtoList = Array_Education;
			ResultArrayForSend.licenseDtoList = Array_LicenseDto;
			// ResultArrayForSend.resumeDtoList = [destColumn.items.portfolioDto];

			totalSend.blockCompositeDto = ResultArrayForSend;

			// console.log('destColumn.portfolioDto = ', destColumn.portfolioDto);
			const newObj = Object.assign({}, destColumn.items.portfolioDto);
			// console.log('newObj = ', newObj);
			totalSend.portfolioDto = newObj;

			const newObj1 = Object.assign({}, destColumn.items.resumeDtoList);
			totalSend.resumeDtoList = newObj1;

			// console.log('After destColumn = ', totalSend);

			// console.log('Result = ', ResultArrayForSend);
			dispatch(DragdataChangePort(totalSend));
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
						<RawDataComponent originData={originDataState} />
					</div>
					<div className="PortPolioBox">
						<PortPolioComponent showState={portState} portData={portDataState} />
					</div>
				</div>
			</DragDropContext>
		</div>
	);
}

export default ChangeData;
