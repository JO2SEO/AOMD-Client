import { createSlice } from '@reduxjs/toolkit';

export const loadBlockFromServer = {
	awardDtoList: [
		{
			type: 'AWARD',
			id: 'award-0101',
			title: '아이디어 공모전',
			ownerId: 1,
			publisher: 'org1',
			publishedAt: "yyyy-MM-dd'T'HH:mm:ss",
			createAt: "yyyy-MM-dd'T'HH:mm:ss",
			rank: '우수',
		},
		{
			type: 'AWARD',
			id: 'award-0102',
			title: '졸업과제',
			ownerId: 1,
			publisher: 'org2',
			publishedAt: "yyyy-MM-dd'T'HH:mm:ss",
			createAt: "yyyy-MM-dd'T'HH:mm:ss",
			rank: '1등',
		},
	],
	educationDtoList: [
		{
			type: 'EDUCATION',
			id: 'education-0101',
			title: '대학교',
			ownerId: 1,
			publisher: 'org11',
			publishedAt: "yyyy-MM-dd'T'HH:mm:ss",
			createAt: "yyyy-MM-dd'T'HH:mm:ss",
			state: '졸업예정',
			departmentInfo: '부산대',
		},
		{
			type: 'EDUCATION',
			id: 'education-0102',
			title: '고등학교',
			ownerId: 1,
			publisher: 'org12',
			publishedAt: "yyyy-MM-dd'T'HH:mm:ss",
			createAt: "yyyy-MM-dd'T'HH:mm:ss",
			state: '졸업',
			departmentInfo: '동래고',
		},
	],
	licenseDtoList: [
		{
			type: 'LICENSE',
			id: 'license-0101',
			title: '빅분기',
			ownerId: 1,
			publisher: 'org31',
			publishedAt: "yyyy-MM-dd'T'HH:mm:ss",
			createAt: "yyyy-MM-dd'T'HH:mm:ss",
			description: '빅데이터 분석기사 수석 합격',
			expireDate: "yyyy-MM-dd'T'HH:mm:ss",
			qualificationNumber: 'bdbd-alal',
		},
		{
			type: 'LICENSE',
			id: 'license-0101',
			title: 'OPIC',
			ownerId: 1,
			publisher: 'org32',
			publishedAt: "yyyy-MM-dd'T'HH:mm:ss",
			createAt: "yyyy-MM-dd'T'HH:mm:ss",
			description: '오픽 설명',
			expireDate: "yyyy-MM-dd'T'HH:mm:ss",
			qualificationNumber: 'opop-icic',
		},
	],
};

// export const data = [
// 	// data[0] => 자격증
// 	[
// 		{
// 			id: uuidv4(),
// 			Type: '자격증',
// 			Content: '정보 처리 기사',
// 			Date: '1234-56-78',
// 		},
// 		{
// 			id: uuidv4(),
// 			Type: '자격증',
// 			Content: '컴퓨터 활용 능력 1급',
// 			Date: '1234-56-78',
// 		},
// 	],
// 	// data[1] => 학력
// 	[
// 		{
// 			id: uuidv4(),
// 			Type: '학력',
// 			Content: '대현고등학교 졸업',
// 			Date: '1234-56-78',
// 		},
// 		{
// 			id: uuidv4(),
// 			Type: '학력',
// 			Content: '부산대학교 졸업',
// 			Date: '1234-56-78',
// 		},
// 	],
// 	// data[2] => 수상내역
// 	[
// 		{
// 			id: uuidv4(),
// 			Type: '수상내역',
// 			Content: '아이디어 해커톤 1위',
// 			Date: '1234-56-78',
// 		},
// 		{
// 			id: uuidv4(),
// 			Type: '수상내역',
// 			Content: '졸업과제 1위',
// 			Date: '1234-56-78',
// 		},
// 	],
// ];

export const RawdataSlice = createSlice({
	name: 'rawData',
	initialState: {
		origin: {
			title: '나의 데이터',
			items: loadBlockFromServer,
		},
	},
	reducers: {
		DragdataChange: (state, action) => {
			state.origin.items = action.payload;
			// state.items = action.payload;
		},
		// DeletedataChange: (state, action) => {
		// 	state.origin.items = action.payload;
		// 	// state.items = action.payload;
		// },
	},
});

export const { DragdataChange } = RawdataSlice.actions;

export const selectRawData = state => state.rawData;

export default RawdataSlice.reducer;
