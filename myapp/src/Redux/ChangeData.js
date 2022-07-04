import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { typeChange, contentChange, selectData } from './dataSlice';
// import styles from './Counter.module.css'

export function ChangeData() {
	// const portData = useSelector(selectData);

	const portData = useSelector(selectData);
	const portDataType = useSelector(state => state.data.value.Type);
	const portDataContent = useSelector(state => state.data.value.Content);

	const dispatch = useDispatch();

	return (
		<div>
			<div>
				<h1>Hello</h1>
				<button onClick={() => dispatch(typeChange())}>Type Change</button>
				<button onClick={() => dispatch(contentChange())}>Content Change</button>

				<div> portData - Type (using selectData) : {portData.Type}</div>
				<div> portData - Content (using selectData) : {portData.Content}</div>

				<div> portDataType : {portDataType}</div>
				<div> portDataContent : {portDataContent}</div>

				{/* <span>{portDataType}</span> */}
				{/* <span>{portDataConent}</span> */}
			</div>
		</div>
	);
}
