import { configureStore } from '@reduxjs/toolkit';

import loginDataReducer from './LoginCheck';
import rawDataReducer from './RawdataSlice';
import portDataReducer from './PortdataSlice';

export default configureStore({
	reducer: {
		loginData: loginDataReducer,
		rawData: rawDataReducer,
		portData: portDataReducer,
	},
});
