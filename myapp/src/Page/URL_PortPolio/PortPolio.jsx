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
		// console.log('column = ', column);

		// const sourceItemsAward = [column.awardDtoList];
		// const sourceItemsEducation = [column.educationDtoList];
		// const sourceItemsLicenseDtoList = [column.licenseDtoList];
		const info0 = [column.blockCompositeDto.licenseDtoList];
		const info1 = [column.blockCompositeDto.educationDtoList];
		const info2 = [column.blockCompositeDto.awardDtoList];
		// console.log('info0 = ', info0);
		// console.log('info1 = ', info1);
		// console.log('info2 = ', info2);

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
				<div className="PortPolioLeftBox">
					<div className="PortPolioLeftUpBox">
						<div className="PortPolioUpBoxImgBox">
							<img src={personImg} alt="증명사진" />
						</div>
						<div className="PortPolioUpBoxContent">
							<h1> 서지원 </h1>
							<p> (25세)</p>
						</div>
					</div>

					<div className="PortPolioUpBoxContentPrivacyUpBox">
						<p>
							<span> 주소 </span> 부산광역시 금정구 장전동 188-5, 아이디어빌
						</p>
						<p>
							<span> 생년월일 </span> 1998.12.07
						</p>
						<p>
							<span> 연락처 </span> 010-4074-8927
						</p>
						<p>
							<span> 이메일 </span> zwon2056@gmail.com
						</p>
					</div>
					<div className="PortPolioUpBoxContentPrivacyDownBox">
						<p> 잘 부탁드립니다 ⭐️ </p>
						<p>
							저희 꼭 상 받을거에요. 여기까지 봤는데 스티커 안붙이면 진짜 너무하다
							그쵸?
						</p>
					</div>
				</div>
				<div className="PortPolioRightBox">
					<div className="PortPolioOneCategory">
						<div className="PortPolioOneCategoryTitle"> 자격증 </div>
						<div className="PortPolioOneCategoryContent">
							{info0[0].map(items => {
								return (
									<div>
										<p className="PortPolioOneCategoryContentRecord">
											{items.title} : {items.publishedAt}
										</p>
										<p></p>
									</div>
								);
							})}
						</div>
					</div>
					<div className="PortPolioOneCategory">
						<div className="PortPolioOneCategoryTitle"> 학력 </div>
						<div className="PortPolioOneCategoryContent">
							{info1[0].map(items => {
								return (
									<p className="PortPolioOneCategoryContentRecord">
										{items.title} : {items.publishedAt}
									</p>
								);
							})}
						</div>
					</div>
					<div className="PortPolioOneCategory">
						<div className="PortPolioOneCategoryTitle"> 수상내역 </div>
						<div className="PortPolioOneCategoryContent">
							{info2[0].map(items => {
								return (
									<p className="PortPolioOneCategoryContentRecord">
										{items.title} {items.rank} : {items.publishedAt}
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
