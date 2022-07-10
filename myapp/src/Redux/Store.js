import { configureStore } from '@reduxjs/toolkit';
import rawDataReducer from './RawdataSlice';
import portDataReducer from './PortdataSlice';

export default configureStore({
	reducer: {
		rawData: rawDataReducer,
		portData: portDataReducer,
	},
});
