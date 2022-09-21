import { createSlice } from '@reduxjs/toolkit';

export const loadPortFromServer = {
	portfolioDto: {
		memberId: 1,
		portfolioId: 1,
		title: '네이버 상반기 공개채용',
		sharing: true,
		shareUrl: 'url',
		createdAt: "yyyy-MM-dd'T'HH:mm:ss",
		updatedAt: "yyyy-MM-dd'T'HH:mm:ss",
	},
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
	resumeDtoList: [
		{
			portfolioId: 1,
			resumeId: 1,
			question: '지원 동기',
			content: '자소서 내용',
		},
		{
			portfolioId: 1,
			resumeId: 2,
			question: '자신의 장점',
			content: '자소서 내용',
		},
		{
			portfolioId: 1,
			resumeId: 3,
			question: '단점',
			content: '자소서 내용',
		},
	],
};

// export const data1 = [
// 	[
// 		{
// 			id: uuidv4(),
// 			Type: '자격증',
// 			Content: '통신 기사',
// 			Date: '2020-12-34',
// 		},
// 		{
// 			id: uuidv4(),
// 			Type: '자격증',
// 			Content: '통신 기사 22 ',
// 			Date: '2021-56-78',
// 		},
// 	],
// 	[
// 		{
// 			id: uuidv4(),
// 			Type: '학력',
// 			Content: '부산대학교 석사 졸업',
// 			Date: '2022-9-10',
// 		},
// 		{
// 			id: uuidv4(),
// 			Type: '학력',
// 			Content: '부산대학교 석사 졸업 22',
// 			Date: '1998-12-07',
// 		},
// 	],
// 	[
// 		{
// 			id: uuidv4(),
// 			Type: '수상내역',
// 			Content: '부산대학교 해커톤 1위',
// 			Date: '1998-12-07',
// 		},
// 		{
// 			id: uuidv4(),
// 			Type: '수상내역',
// 			Content: '부산대학교 해커톤 1위 22',
// 			Date: '1998-12-07',
// 		},
// 	],
// ];

// export const introdata1 = [
// 	{
// 		portfolioId: loadPortFromServer.resumeDtoList.portfolioId,
// 		resumeId: loadPortFromServer.resumeDtoList.resumeId,
// 		question: loadPortFromServer.resumeDtoList.question,
// 		content: loadPortFromServer.resumeDtoList.content,
// 	},
// ];

// console.log('loadPortFromServer = ', loadPortFromServer);

export const PortdataSlice = createSlice({
	name: 'portData',
	initialState: {
		port1: {
			title: loadPortFromServer.portfolioDto.title,
			items: loadPortFromServer,
			introductions: loadPortFromServer,
		},
		// port2: {
		// 	title: '포트폴리오2',
		// 	items: data2,
		// 	introductions: introdata1,
		// },
	},
	reducers: {
		DragdataChangePort: (state, action) => {
			state.port1.items = action.payload;
		},
		DeletedataChangePort: (state, action) => {
			state.port1.items = action.payload;
		},
	},
});

export const { DragdataChangePort, DeletedataChangePort } = PortdataSlice.actions;
export const selectPortData = state => state.portData;
export default PortdataSlice.reducer;
