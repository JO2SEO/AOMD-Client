import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectLoginData } from '../Redux/LoginCheck';

const CategoryContainer = styled.div`
	width: 100%;
	height: 70px;
	display: flex;
	background: #1f3864;
	padding: 5px 20px 5px 20px;
`;
const CategoryBox = styled.div`
	width: 40%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const CategoryBoxBtn = styled.button`
	border: none;
	color: white;
	font-weight: bolder;
	font-size: 15px;
	background: transparent;
`;

function Category() {
	const navigate = useNavigate();
	const [loginState, setLoginState] = useState(false);
	const currentLogin = useSelector(selectLoginData);

	useEffect(() => {
		if (currentLogin.loginState) {
			setLoginState(true);
		} else {
			setLoginState(false);
		}
	}, [currentLogin.loginState]);

	const onClickMoveIntroducePage = () => {
		navigate('/introducepage');
	};

	const onClickMovePortPolioPage = () => {
		if (loginState) {
			navigate('/dragdroppage');
		} else {
			// Swal.fire({
			// 	title: 'Login',
			// 	text: '로그인을 먼저 하셔야 합니다',
			// 	icon: 'success',
			// 	confirmButtonText: 'OK',
			// 	heightAuto: false,
			// });
			navigate('/loginpage');
		}
	};

	return (
		<CategoryContainer>
			<div
				style={{
					display: 'flex',
					width: '30%',
					paddingLeft: '100px',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<CategoryBoxBtn> 카테고리 </CategoryBoxBtn>
			</div>
			<CategoryBox>
				<CategoryBoxBtn onClick={onClickMovePortPolioPage}> 포트폴리오 작성</CategoryBoxBtn>
				<CategoryBoxBtn onClick={onClickMoveIntroducePage}> 커뮤니티 </CategoryBoxBtn>
				<CategoryBoxBtn onClick={onClickMoveIntroducePage}> 마이페이지 </CategoryBoxBtn>
				<CategoryBoxBtn onClick={onClickMoveIntroducePage}> 설정 </CategoryBoxBtn>
			</CategoryBox>
			<div
				style={{
					display: 'flex',
					width: '30%',
					paddingRight: '100px',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<CategoryBoxBtn onClick={onClickMoveIntroducePage}> 고객센터</CategoryBoxBtn>
			</div>
		</CategoryContainer>
	);
}

export default Category;
