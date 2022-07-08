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

import { useState } from 'react';
import reset from 'styled-reset';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './Component/theme';

export const ContentDiv = styled.div`
	width: 100%;
	height: 85%;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const GlobalStyle = createGlobalStyle`
	${reset}  	
	body {        
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.textColor};
	}
	
	textarea {
		background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.textColor};
	}
`;
export const DarkModeButton = styled.button`
	position: fixed;
	right: 30px;
	bottom: 30px;
	background-color: rgb(180, 180, 180);
	border-radius: 10px;
	// z-index: 100;
	width: 70px;
	height: 50px;
	cursor: pointer;
`;

function App() {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleDarkMode = () => {
		console.log('is dark ? = ', isDarkMode);
		setIsDarkMode(prev => !prev);
	};

	return (
		<Provider store={store}>
			<div className="App">
				<DarkModeButton onClick={toggleDarkMode}>다크모드</DarkModeButton>

				<Router>
					<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
						<GlobalStyle />
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
					</ThemeProvider>
				</Router>
			</div>
		</Provider>
	);
}

export default App;
