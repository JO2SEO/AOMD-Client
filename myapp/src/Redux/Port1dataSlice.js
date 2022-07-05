import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const Por1dataSlice = createSlice({
	name: 'port1Data',
	initialState: {
		port1: {
			title: '포트폴리오1',
			items: [
				{
					id: uuidv4(),
					Type: 'port1',
					Content: '포트폴리오1',
				},
			],
		},
	},
	reducers: {
		// typeChange: state => {
		// 	state.origin.title = 'Type change !!!';
		// },
		DragdataChangePort1: (state, action) => {
			state.port1.items = action.payload;
		},
		DeletedataChangePort1: (state, action) => {
			state.port1.items = action.payload;
		},
		// contentChange: state => {
		// 	state.port1.title = 'Content Change !!!';
		// },
	},
});

// Action creators are generated for each case reducer function
// export const { typeChange, contentChange } = dataSlice.actions;
export const { DragdataChangePort1, DeletedataChangePort1 } = Por1dataSlice.actions;

// export const selectData = state => state.dataHouse.origin;
export const selectDataPort1 = state => state.port1Data;

export default Por1dataSlice.reducer;
