import './App.css';
import LoginPage from './Page/LoginPage';
import MainPage from './Page/MainPage';
import DragDrop from './Component/DragDrop/DragDrop';
import DragDropTest from './Component/DragDropTest/DragDropTest';
import DragDropTestRedux from './Component/DragDropTestRedux/DragDropTestRedux';

import Register from './Component/Register';
import ErrorPage from './Component/ErrorPage';

import Header from './Component/Header';
import Footer from './Component/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './Redux/Store';
import styled from 'styled-components';

export const ContentDiv = styled.div`
	width: 100%;
	height: 85%;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
`;

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Router>
					<Header />
					<ContentDiv>
						<Routes>
							<Route path="/" element={<LoginPage />} />
							<Route path="/main" element={<MainPage />} />
							<Route path="/dragdrop" element={<DragDrop />} />
							<Route path="/dragdroptest" element={<DragDropTest />} />
							<Route path="/dragdroptestredux" element={<DragDropTestRedux />} />
							<Route path="/register" element={<Register />} />
							<Route path="/errorpage" element={<ErrorPage />} />
						</Routes>
					</ContentDiv>

					<Footer />
				</Router>
			</div>
		</Provider>
	);
}

export default App;
