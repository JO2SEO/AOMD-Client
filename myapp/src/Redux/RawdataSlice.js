import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const data = [
	// data[0] => 자격증
	[
		{
			id: uuidv4(),
			Type: '자격증',
			Content: '정보 처리 기사',
		},
		{
			id: uuidv4(),
			Type: '자격증',
			Content: '컴퓨터 활용 능력 1급',
		},
	],
	// data[1] => 학력
	[
		{
			id: uuidv4(),
			Type: '학력',
			Content: '대현고등학교 졸업',
		},
		{
			id: uuidv4(),
			Type: '학력',
			Content: '부산대학교 졸업',
		},
	],
	// data[2] => 수상내역
	[
		{
			id: uuidv4(),
			Type: '수상내역',
			Content: '아이디어 해커톤 1위',
		},
		{
			id: uuidv4(),
			Type: '수상내역',
			Content: '졸업과제 1위',
		},
	],
];

export const RawdataSlice = createSlice({
	name: 'rawData',
	initialState: {
		origin: {
			title: '나의 데이터',
			items: data,
		},
	},
	reducers: {
		DragdataChange: (state, action) => {
			state.origin.items = action.payload;
			// state.items = action.payload;
		},
		// DeletedataChange: (state, action) => {
		// 	state.origin.items = action.payload;
		// 	// state.items = action.payload;
		// },
	},
});

export const { DragdataChange } = RawdataSlice.actions;

export const selectRawData = state => state.rawData;

export default RawdataSlice.reducer;
