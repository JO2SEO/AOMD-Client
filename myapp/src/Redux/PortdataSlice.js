import { createSlice } from '@reduxjs/toolkit';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import { selectLoginData } from 'Redux/LoginCheck';

import { ServerURL_port } from 'domainBox';
import { ServerURLLogin } from 'domainBox';

export let loadPortFromServer_items = {};
export let loadPortFromServer_title = {};

export let loadPortFromServer = {
	awardDtoList: [
		{
			type: 'AWARD',
			id: 'AWARD-0101',
			title: '아이디어 공모전11111111',
			ownerId: 1,
			publisher: 'org1',
			publishedAt: '123123123',
			createAt: '123123123',
			rank: '우수',
		},
		{
			type: 'AWARD',
			id: 'AWARD-0102',
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
			id: 'EDUCATION-0101',
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
			id: 'EDUCATION-0102',
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
			id: 'LICENSE-0101',
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
			id: 'LICENSE-0102',
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
	resumeDtoList: [null],
};

export function LoadPortData() {
	// console.log('<< LoadPortData(PortdataSlice.js) >> \n');

	// const dispatch = useDispatch();
	// const navigate = useNavigate();

	const dispatch = useDispatch();

	const [loginState, setLoginState] = useState(false);

	const currentLogin = useSelector(selectLoginData);

	useEffect(() => {
		if (currentLogin.loginState) {
			// console.log('Header in main page - login state : ', currentLogin.loginState);
			setLoginState(true);
		} else {
			// console.log('Header in main page - login state : ', currentLogin.loginState);
			setLoginState(false);
		}
	}, [currentLogin.loginState]);

	// console.log('여기는 LoadRawData 함수 \n 이제 리퀘스트 보낸다?');

	let accessTokenFromServer = '';
	// 테스트 할 때, 서버에서 받아올 로그인 토큰

	// 테스트로그인 요청
	Axios.post(ServerURLLogin, {
		email: 'user1@gmail.com',
		password: 'pwpw',
	})
		.then(response => {
			// console.log(
			// 	' << In PortDataSlice >> \n 로그인 토큰 요청 결과  \n test1@test1.com \n',
			// 	response
			// );
			accessTokenFromServer = response.data.accessToken;
			// console.log(
			// 	' << In PortDataSlice >> \n accessTokenFromServer = ',
			// 	accessTokenFromServer
			// );

			// 블록체인 블럭 요청, 위에서 테스트 로그인 해서 받아온 로그인 토큰 이용

			Axios.get(ServerURL_port, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${accessTokenFromServer}`,
				},
			})
				.then(response => {
					// console.log(
					// 	' << In PortDataSlice >> \n 블록체인 블럭 토큰 요청 결과 \n',
					// 	response
					// );
					// console.log('  << In PortDataSlice >> \n 받아온 데이터 정제 : ', response.data);
					// console.log(
					// 	' << In PortDataSlice >> \n loadPortFromServer - Before = ',
					// 	loadPortFromServer
					// );
					loadPortFromServer_items = response.data[0].blockCompositeDto;
					loadPortFromServer_title = response.data[0].portfolioDto.title;

					// console.log(
					// 	' << In PortDataSlice >> \n loadPortFromServer_items - After  =  ',
					// 	loadPortFromServer_title,
					// 	loadPortFromServer_items
					// );

					dispatch(LoadDataPortItems(loadPortFromServer_items));
					dispatch(LoadDataPortTitle(loadPortFromServer_title));

					console.log('오른쪽 / 포트폴리오 데이터 받아오기 완료');
				})
				.catch(error => {
					console.log('error in requst Block= ', error);
				});
		})
		.catch(error => {
			console.log('error in request login token = ', error);
		});
}

export const PortdataSlice = createSlice({
	name: 'portData',
	initialState: {
		port1: {
			title: '123',
			items: loadPortFromServer,
			// introductions: loadPortFromServer,
		},
		// port2: {
		// 	title: '포트폴리오2',
		// 	items: data2,
		// 	introductions: introdata1,
		// },
	},
	reducers: {
		LoadDataPortTitle: (state, action) => {
			state.port1.title = action.payload;
		},
		LoadDataPortItems: (state, action) => {
			state.port1.items = action.payload;
		},
		DragdataChangePort: (state, action) => {
			state.port1.items = action.payload;
		},
		DeletedataChangePort: (state, action) => {
			state.port1.items = action.payload;
		},
	},
});

export const { LoadDataPortTitle, LoadDataPortItems, DragdataChangePort, DeletedataChangePort } =
	PortdataSlice.actions;
export const selectPortData = state => state.portData;
export default PortdataSlice.reducer;
