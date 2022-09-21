import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useSelector, useDispatch } from 'react-redux';

import { DeletedataChangePort, selectPortData } from 'Redux/PortdataSlice';
import './DragDropComponent.css';

const TaskCard = props => {
	const { item, index, datatype } = props;
	const dispatch = useDispatch();
	const portData = useSelector(selectPortData);

	const onClickDelete = itemID => {
		const sourceColumn = portData.port1;
		console.log('sourceColumn = ', sourceColumn);

		console.log('클릭된 거, ItemID = ', itemID);

		const sourceItemsAward = [sourceColumn.items.awardDtoList];
		const sourceItemsEducation = [sourceColumn.items.educationDtoList];
		const sourceItemsLicenseDtoList = [sourceColumn.items.licenseDtoList];

		console.log('sourceItemsAward = ', sourceItemsAward);
		console.log('sourceItemsEducation = ', sourceItemsEducation);
		console.log('sourceItemsLicenseDtoList = ', sourceItemsLicenseDtoList);

		let sourceItems = [];
		let After = [];

		let Array = sourceItems.concat(
			...sourceItemsAward,
			...sourceItemsEducation,
			...sourceItemsLicenseDtoList
		);
		console.log('Array = ', Array);
		// 6개짜리 배열

		for (let i = 0; i < Array.length; i++) {
			// console.log(Array[i].id);

			if (Array[i].id == itemID) {
				console.log('Find = ', Array[i].id);
				let First = Array.slice(0, i);
				let Second = Array.slice(i + 1);
				After = [...First, ...Second];
				console.log('After = ', After);
				break;
			}
		}
		const Array_Award = [];
		const Array_Education = [];
		const Array_LicenseDto = [];

		for (let i = 0; i < After.length; i++) {
			if (After[i].type === 'AWARD') {
				console.log('AWARD');
				Array_Award.push(After[i]);
			}
			if (After[i].type === 'EDUCATION') {
				console.log('EDUCATION');
				Array_Education.push(After[i]);
			}
			if (After[i].type === 'LICENSE') {
				console.log('LICENSE');
				Array_LicenseDto.push(After[i]);
			}
		}

		console.log('Array_Award = ', Array_Award);
		console.log('Array_Education = ', Array_Education);
		console.log('Array_LicenseDto = ', Array_LicenseDto);

		let ResultArray = [];
		ResultArray.push(Array_Award);
		ResultArray.push(Array_Education);
		ResultArray.push(Array_LicenseDto);

		console.log('ResultArray = ', ResultArray);
		// dispatch(DeletedataChangePort(ResultArray));
	};

	return (
		<>
			{datatype === 'origin' ? (
				<div className="OriginDataBox">
					<Draggable key={item.id} draggableId={item.id} index={index}>
						{provided => (
							<div
								className="OriginDataContent"
								ref={provided.innerRef}
								{...provided.draggableProps}
								{...provided.dragHandleProps}
							>
								<p>
									{item.title} {item.rank}
								</p>
							</div>
						)}
					</Draggable>
				</div>
			) : (
				<div className="PortItem">
					<div
						style={{
							background: 'transparent',
						}}
					>
						<p
							style={{
								fontSize: '18px',
								fontWeight: '900',
								margin: '5px',
							}}
						>
							<p>
								{item.title} {item.rank}
							</p>
						</p>
						<p style={{ fontSize: '13px', margin: '5px' }}>
							<p> {item.publishedAt} </p>
							<p> {item.createAt} </p>
						</p>
					</div>
					<div>
						<button onClick={e => onClickDelete(item.id)}>x</button>
					</div>
				</div>
			)}
		</>
	);
};

export default TaskCard;
