import React, { Fragment } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import TaskCard from './TaskCard';

export const ProvidedPlaceholder = styled.span`
	display: 'none';
`;

const RawDataComponent = props => {
	const { originData } = props;

	function returnTaskCard(column) {
		const info0 = []; // 자격증
		const info1 = []; // 학력
		const info2 = []; // 수상내역

		for (var index = 0; index < 3; index++) {
			if (index === 0) {
				var innerLen = column[index].length;
				for (var innerindex = 0; innerindex < innerLen; innerindex++) {
					info0.push([column[index][innerindex], 1 + index + innerindex]);
				}
			}
			if (index === 1) {
				innerLen = column[index].length;
				for (innerindex = 0; innerindex < innerLen; innerindex++) {
					info1.push([column[index][innerindex], 2 + index + innerindex]);
				}
			}
			if (index === 2) {
				innerLen = column[index].length;
				for (innerindex = 0; innerindex < innerLen; innerindex++) {
					info2.push([column[index][innerindex], 3 + index + innerindex]);
				}
			}
		}

		return (
			<Fragment>
				<div className="DataBox">
					<p className="DataBoxh1"> 자격증 </p>
					{info0.map(items => {
						return (
							<TaskCard
								key={items[0].id}
								item={items[0]}
								index={items[1]}
								datatype="origin"
							/>
						);
					})}
				</div>
				<div className="DataBox">
					<p className="DataBoxh1"> 학력 </p>
					{info1.map(items => {
						return (
							<TaskCard
								key={items[0].id}
								item={items[0]}
								index={items[1]}
								datatype="origin"
							/>
						);
					})}
				</div>
				<div className="DataBox">
					<p className="DataBoxh1"> 수상내역 </p>
					{info2.map(items => {
						return (
							<TaskCard
								key={items[0].id}
								item={items[0]}
								index={items[1]}
								datatype="origin"
							/>
						);
					})}
				</div>
			</Fragment>
		);
	}

	return (
		<Fragment>
			<Droppable key={originData.origin.title} droppableId={originData.origin.title}>
				{(provided, snapshot) => (
					<div ref={provided.innerRef} {...provided.droppableProps}>
						<h1 className="ColumnTitle1">{originData.origin.title}</h1>
						{returnTaskCard(originData.origin.items)}
						<ProvidedPlaceholder>{provided.placeholder}</ProvidedPlaceholder>
					</div>
				)}
			</Droppable>
		</Fragment>
	);
};

export default RawDataComponent;
