import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const data1 = [
	[
		{
			id: uuidv4(),
			Type: '자격증',
			Content: '통신 기사',
		},
	],
	[
		{
			id: uuidv4(),
			Type: '학력',
			Content: '부산대학교 석사 졸업',
		},
	],
	[
		{
			id: uuidv4(),
			Type: '수상내역',
			Content: '부산대학교 해커톤 1위',
		},
	],
];
export const data2 = [
	[
		{
			id: uuidv4(),
			Type: '자격증',
			Content: '통신 기사222',
		},
	],
	[
		{
			id: uuidv4(),
			Type: '학력',
			Content: '부산대학교 석사 졸업222',
		},
	],
	[
		{
			id: uuidv4(),
			Type: '수상내역',
			Content: '부산대학교 해커톤 1위222',
		},
	],
];
export const PortdataSlice = createSlice({
	name: 'portData',
	initialState: {
		port1: {
			title: '포트폴리오1',
			items: data1,
		},
		port2: {
			title: '포트폴리오2',
			items: data2,
		},
	},
	reducers: {
		DragdataChangePort: (state, action) => {
			// console.log('state ==> ', state);
			state = action.payload;
		},
		DeletedataChangePort: (state, action) => {
			state = action.payload;
		},
	},
});

export const { DragdataChangePort, DeletedataChangePort } = PortdataSlice.actions;

export const selectDataPort = state => state.portData;

export default PortdataSlice.reducer;
