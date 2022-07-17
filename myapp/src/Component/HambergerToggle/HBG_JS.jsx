import React from 'react';
import './HBG_CSS.css';

const HBG_JS = () => {
	// hasClass
	function hasClass(elem, className) {
		return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
	}
	// // addClass
	// function addClass(elem, className) {
	// 	if (!hasClass(elem, className)) {
	// 		elem.className += ' ' + className;
	// 	}
	// }
	// // removeClass
	// function removeClass(elem, className) {
	// 	var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
	// 	if (hasClass(elem, className)) {
	// 		while (newClass.indexOf(' ' + className + ' ') >= 0) {
	// 			newClass = newClass.replace(' ' + className + ' ', ' ');
	// 		}
	// 		elem.className = newClass.replace(/^\s+|\s+$/g, '');
	// 	}
	// }

	// toggleClass
	function toggleClass(elem, className) {
		var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
		if (hasClass(elem, className)) {
			while (newClass.indexOf(' ' + className + ' ') >= 0) {
				newClass = newClass.replace(' ' + className + ' ', ' ');
			}
			elem.className = newClass.replace(/^\s+|\s+$/g, '');
		} else {
			elem.className += ' ' + className;
		}
	}

	const onClickToggle = e => {
		toggleClass(e.target, 'on');
		return false;
	};

	return (
		<>
			<div
				id="toggle"
				onClick={onClickToggle}
				style={{ cursor: 'pointer', border: 'black 5px solid' }}
			>
				{/* <span></span> */}
				햄버거 라이브러리
			</div>

			<div id="menu">
				<ul>
					<li>
						<a href="/">토글 1</a>
					</li>
					<li>
						<a href="/">토글 2</a>
					</li>
					<li>
						<a href="/">토글 3</a>
					</li>
					<li>
						<a href="/">토글 4</a>
					</li>
				</ul>
			</div>
		</>
	);
};

export default HBG_JS;
