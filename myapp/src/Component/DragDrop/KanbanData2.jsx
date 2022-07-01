import { v4 as uuidv4 } from 'uuid';

export const data2 = [
	{
		id: '5',
		Type: '수상내역',
		Content: 'ICPC 1등',
	},
];
export const columnsFromBackend2 = {
	[uuidv4()]: {
		title: '자기소개서',
		items: data2,
	},
};
