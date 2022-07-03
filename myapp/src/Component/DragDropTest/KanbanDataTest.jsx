// import { v4 as uuidv4 } from 'uuid';
export const data = [
	{
		id: '1',
		Type: '자격증',
		Content: '정보 처리 기사',
	},
	{
		id: '2',
		Type: '학력',
		Content: '부산대학교 졸업',
	},
	{
		id: '3',
		Type: '학점',
		Content: '3.5',
	},
];

export const port1data = [
	{
		id: '4',
		Type: 'port1',
		Content: '포트폴리오1',
	},
];

export const port2data = [
	{
		id: '5',
		Type: 'port2',
		Content: '포트폴리오2',
	},
];
export const port3data = [
	{
		id: '6',
		Type: 'port3',
		Content: '포트폴리오3',
	},
];

export const columnsFromBackend = {
	origin: {
		title: '나의 데이터',
		items: data,
	},
	// 2: {
	// 	title: '자기 소개서',
	// 	items: [],
	// },
};
export const port1 = {
	1: {
		title: '포트폴리오 1',
		items: port1data,
	},
};
export const port2 = {
	2: {
		title: '포트폴리오 2',
		items: port2data,
	},
};
export const port3 = {
	3: {
		title: '포트폴리오 3',
		items: port3data,
	},
};
