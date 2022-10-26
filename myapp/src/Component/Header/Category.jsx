import { useNavigate } from 'react-router-dom';

const Category = props => {
	const loginState = props.loginState;
	const navigate = useNavigate();

	const onClickMoveIntroducePage = () => {
		// setMenuToggle(false);
		navigate('/introducepage');
	};
	const onClickMoveIntroduceDetailPage = () => {
		// setMenuToggle(false);
		navigate('/introducedetailpage');
	};
	const onClickMoveCommunityPage = () => {
		// setMenuToggle(false);
		// navigate('/communitypage');
		alert('아직 개발중인 페이지입니다. ');
	};
	const onClickMoveManagerPage = () => {
		// setMenuToggle(false);
		// navigate('/communitypage');
		alert('관리자만 접근 가능한 페이지입니다. ');
	};
	const onClickMovePortPolioPage = () => {
		// setMenuToggle(false);
		if (loginState) {
			navigate('/portpoliopage');
		} else {
			navigate('/loginpage');
		}
	};
	return (
		<>
			<div>
				<h1>소개</h1>
				<ul>
					<li onClick={onClickMoveIntroducePage}>플랫폼 소개</li>
					<li onClick={onClickMoveIntroduceDetailPage}>동작방식 및 세부사항 </li>
				</ul>
			</div>
			<div>
				<h1>포트폴리오</h1>
				<ul>
					<li onClick={onClickMovePortPolioPage}>포트폴리오 관리</li>
				</ul>
			</div>
			<div>
				<h1>커뮤니티</h1>
				<ul>
					<li onClick={onClickMoveCommunityPage}>커뮤니티</li>
				</ul>
			</div>
			<div>
				<h1>설정</h1>
				<ul>
					<li onClick={onClickMoveCommunityPage}>마이페이지</li>
					<li onClick={onClickMoveManagerPage}>관리자 페이지</li>
				</ul>
			</div>
			<div>
				<h1>고객센터</h1>
				<ul>
					<li onClick={onClickMoveCommunityPage}> 공지사항</li>
					<li onClick={onClickMoveCommunityPage}>1:1 문의</li>
					<li onClick={onClickMoveCommunityPage}>이메일 문의</li>
				</ul>
			</div>
		</>
	);
};

export default Category;
