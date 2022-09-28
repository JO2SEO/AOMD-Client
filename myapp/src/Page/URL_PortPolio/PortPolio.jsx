import React, { Fragment } from 'react';
import './PortPolio.css';

import { useSelector } from 'react-redux';

import { selectPortData } from '../../Redux/PortdataSlice';
import personImg from 'Image/loginIcon.svg';
import '../../Redux/ChangeData.css';

function PortPolio() {
	const onContextMenuFunc = e => {
		e.preventDefault();
	};
	const onClickFunc = e => {
		e.preventDefault();
	};

	const portData = useSelector(selectPortData);

	function returnTaskCard(column) {
		console.log('column = ', column);

		// const sourceItemsAward = [column.awardDtoList];
		// const sourceItemsEducation = [column.educationDtoList];
		// const sourceItemsLicenseDtoList = [column.licenseDtoList];
		const info2 = [column.awardDtoList];
		const info1 = [column.educationDtoList];
		const info0 = [column.licenseDtoList];
		// const info0 = []; // 자격증
		// const info1 = []; // 학력
		// const info2 = []; // 수상내역

		// for (let i = 0; i < 3; i++) {
		// 	if (i === 0) {
		// 		const arrLength = sourceItemsLicenseDtoList.length;

		// 		for (let j = 0; j < arrLength; j++) {
		// 			info0.push([column[i][j], 1 + i + j]);
		// 		}
		// 	}
		// 	if (i === 1) {
		// 		const arrLength = column[i].length;

		// 		for (let j = 0; j < arrLength; j++) {
		// 			info1.push([column[i][j], 2 + i + j]);
		// 		}
		// 	}
		// 	if (i === 2) {
		// 		const arrLength = column[i].length;

		// 		for (let j = 0; j < arrLength; j++) {
		// 			info2.push([column[i][j], 3 + i + j]);
		// 		}
		// 	}
		// }

		return (
			<Fragment>
				<div className="PortPolioUpBox">
					<img src={personImg} alt="증명사진" />
					<div className="PortPolioUpBoxContent">
						<h1> 서지원 </h1>
						<h1> 전) 현대건설 부회장 </h1>
						<h1> 전) 삼성전자 과장 </h1>
						<h1> 전) SK 하이닉스 부장 </h1>
					</div>
				</div>
				<div className="PortPolioDownBox">
					<div className="PortPolioOneCategory">
						<h1> 자격증 </h1>
						<div className="PortPolioOneCategoryContent">
							{info0[0].map(items => {
								return (
									<div style={{ border: 'black 3px solid' }}>
										<p className="PortPolioOneCategoryContentRecord">
											{items.title}
										</p>
										<p>{items.publishedAt}</p>
										<p> {items.createAt} </p>
									</div>
								);
							})}
						</div>
					</div>
					<div className="PortPolioOneCategory">
						<h1> 학력 </h1>
						<div className="PortPolioOneCategoryContent">
							{info1[0].map(items => {
								return (
									<p className="PortPolioOneCategoryContentRecord">
										{items.departmentInfo} {items.publishedAt} {items.createAt}
									</p>
								);
							})}
						</div>
					</div>
					<div className="PortPolioOneCategory">
						<h1> 수상내역 </h1>
						<div className="PortPolioOneCategoryContent">
							{info2[0].map(items => {
								return (
									<p className="PortPolioOneCategoryContentRecord">
										{items.title} {items.rank}
										{items.publishedAt}
										{items.createAt}
									</p>
								);
							})}
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
	return (
		<div className="PortPolioDiv" onContextMenu={onContextMenuFunc} onClick={onClickFunc}>
			<div className="PortPolioMainBox">{returnTaskCard(portData.port1.items)}</div>
		</div>
	);
}

export default PortPolio;
