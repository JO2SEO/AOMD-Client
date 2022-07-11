import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const CategoryDiv = styled.div`
	width: 75%;
	border: 2px solid black;
	display: flex;
	justify-content: space-around; ;
`;

export const CategoryBox = styled.div`
	width: 120px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px;
`;
export const CategoryBoxBtn = styled.button`
	border: none;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 50px;
	background: white;
	border: 3px solid black;

	&:hover {
		cursor: pointer;
		background: gray;
		color: white;
	}
`;

function Category() {
	const navigate = useNavigate();

	const onClickMoveIntroduce = () => {
		navigate('/introduce');
	};
	const onClickMoveMain = () => {
		navigate('/main');
	};
	return (
		<CategoryDiv>
			<CategoryBox>
				<CategoryBoxBtn onClick={onClickMoveIntroduce}>서비스 소개</CategoryBoxBtn>
			</CategoryBox>
			<CategoryBox>
				<CategoryBoxBtn>제휴기관</CategoryBoxBtn>
			</CategoryBox>
			<CategoryBox>
				<CategoryBoxBtn onClick={onClickMoveMain}>포트폴리오 관리</CategoryBoxBtn>
			</CategoryBox>
			<CategoryBox>
				<CategoryBoxBtn onClick={onClickMoveMain}>고객센터</CategoryBoxBtn>
			</CategoryBox>
		</CategoryDiv>
	);
}

export default Category;
