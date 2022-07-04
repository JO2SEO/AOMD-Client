import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../Redux/dataSlice';
export default configureStore({
	reducer: {
		data: dataReducer,
	},
});
