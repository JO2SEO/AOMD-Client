import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const data = [
	{
		id: uuidv4(),
		Type: '자격증',
		Content: '정보 처리 기사',
	},
	{
		id: uuidv4(),
		Type: '학력',
		Content: '부산대학교 졸업',
	},
	{
		id: uuidv4(),
		Type: '학점',
		Content: '3.5',
	},
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
		// typeChange: state => {
		// 	state.origin.title = 'Type change !!!';
		// },
		DragdataChange: (state, action) => {
			state.origin.items = action.payload;
		},
		DeletedataChange: (state, action) => {
			state.origin.items = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
// export const { typeChange, contentChange } = dataSlice.actions;
export const { DragdataChange, DeletedataChange } = RawdataSlice.actions;

// export const selectData = state => state.dataHouse.origin;
export const selectData = state => state.rawData;

export default RawdataSlice.reducer;
