import { configureStore } from '@reduxjs/toolkit';
import rawDataReducer from '../Redux/RawdataSlice';
import port1DataReducer from '../Redux/Port1dataSlice';

export default configureStore({
	reducer: {
		rawData: rawDataReducer,
		port1Data: port1DataReducer,
	},
});
