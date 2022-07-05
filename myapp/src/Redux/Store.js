import { configureStore } from '@reduxjs/toolkit';
import rawDataReducer from './RawdataSlice';
import port1DataReducer from './Port1dataSlice';

export default configureStore({
	reducer: {
		rawData: rawDataReducer,
		port1Data: port1DataReducer,
	},
});
