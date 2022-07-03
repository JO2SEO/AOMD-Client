import '../Style/Page/MainPage.css';
import { useNavigate } from 'react-router-dom';

function MainPage() {
	const navigator = useNavigate();

	const onClickMoveDragDrop = () => {
		navigator('/dragdrop');
	};

	const onClickMoveDragDrop2 = () => {
		navigator('/dragdroptest');
	};
	return (
		<div id="mainPage">
			<h1> 드래그 앤 드랍 구현 - origin</h1>
			<button onClick={onClickMoveDragDrop}>move to DragDrop </button>
			<h1> 드래그 앤 드랍 구현 - test</h1>
			<button onClick={onClickMoveDragDrop2}>move to DragDrop - test </button>
		</div>
	);
}

export default MainPage;
