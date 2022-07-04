import { createSlice } from '@reduxjs/toolkit';

export const dataSlice = createSlice({
	name: 'data',
	initialState: {
		value: {
			Type: 'Type data - before',
			Content: 'Content data - before',
		},
	},
	reducers: {
		typeChange: state => {
			state.value.Type = 'Type change !!!';
		},
		contentChange: state => {
			state.value.Content = 'Content Change !!!';
		},
	},
});

// Action creators are generated for each case reducer function
export const { typeChange, contentChange } = dataSlice.actions;
export const selectData = state => state.data.value;

export default dataSlice.reducer;
