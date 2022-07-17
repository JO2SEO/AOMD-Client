import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const data1 = [
	[
		{
			id: uuidv4(),
			Type: '자격증',
			Content: '통신 기사',
			Date: '2020-12-34',
		},
		{
			id: uuidv4(),
			Type: '자격증',
			Content: '통신 기사 22 ',
			Date: '2021-56-78',
		},
	],
	[
		{
			id: uuidv4(),
			Type: '학력',
			Content: '부산대학교 석사 졸업',
			Date: '2022-9-10',
		},
		{
			id: uuidv4(),
			Type: '학력',
			Content: '부산대학교 석사 졸업 22',
			Date: '1998-12-07',
		},
	],
	[
		{
			id: uuidv4(),
			Type: '수상내역',
			Content: '부산대학교 해커톤 1위',
			Date: '1998-12-07',
		},
		{
			id: uuidv4(),
			Type: '수상내역',
			Content: '부산대학교 해커톤 1위 22',
			Date: '1998-12-07',
		},
	],
];
export const introdata1 = [
	{
		question: '자기소개서 1번 문항',
		content: '저는 화목한 집안에서 태어나',
	},
	{
		question: '자기소개서 2번 문항',
		content: '학교 잘 다니고 공부 잘하고 착실하게',
	},
];
export const data2 = [
	[
		{
			id: uuidv4(),
			Type: '자격증',
			Content: '통신 기사222',
			Date: '2020-12-34',
		},
	],
	[
		{
			id: uuidv4(),
			Type: '학력',
			Content: '부산대학교 석사 졸업222',
			Date: '2020-12-34',
		},
	],
	[
		{
			id: uuidv4(),
			Type: '수상내역',
			Content: '부산대학교 해커톤 1위222',
			Date: '2020-12-34',
		},
	],
];
export const PortdataSlice = createSlice({
	name: 'portData',
	initialState: {
		port1: {
			title: '포트폴리오1',
			items: data1,
			introductions: introdata1,
		},
		port2: {
			title: '포트폴리오2',
			items: data2,
			introductions: introdata1,
		},
	},
	reducers: {
		DragdataChangePort: (state, action) => {
			state.port1.items = action.payload;
			console.log('드래그 앤 드랍 이벤트가 발생');
			console.log('서버에 리퀘스트 보내 정보 바꼈다고');
		},
		DeletedataChangePort: (state, action) => {
			state.port1.items = action.payload;
			console.log('삭제 이벤트가 발생');
			console.log('서버에 리퀘스트 보내 정보 바꼈다고');
		},
	},
});

export const { DragdataChangePort, DeletedataChangePort } = PortdataSlice.actions;

export const selectPortData = state => state.portData;

export default PortdataSlice.reducer;
