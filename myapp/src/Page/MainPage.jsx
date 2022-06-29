import '../Style/Page/MainPage.css';
import { useNavigate } from 'react-router-dom';

function MainPage() {
	const navigator = useNavigate();

	const onClickMoveDragDrop = () => {
		navigator('/dragdrop');
	};
	return (
		<div id="mainPage">
			<h1> 드래그 앤 드랍 구현 </h1>
			<button onClick={onClickMoveDragDrop}>move to DragDrop </button>
		</div>
	);
}

export default MainPage;
