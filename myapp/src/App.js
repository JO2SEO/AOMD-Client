import './App.css';
import LoginPage from './Page/LoginPage';
import MainPage from './Page/MainPage';
import FirstPage from './Page/FirstPage';
import RegisterPage from './Page/RegisterPage';
import ErrorPage from './Page/ErrorPage';
import IntroducePage from './Page/IntroducePage';
import ManagePortPolioPage from './Component/DragDropTestRedux/DragDropTestRedux';

import Header from './Component/Header';
import Footer from './Component/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './Redux/Store';

import { useState } from 'react';
import reset from 'styled-reset';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './Component/theme';

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
						{/* <Header /> */}

						<>
							<Routes>
								<Route path="/AOMD-Client" element={<FirstPage />} />
								<Route path="/introducepage" element={<IntroducePage />} />

								<Route path="/loginpage" element={<LoginPage />} />
								<Route path="/registerpage" element={<RegisterPage />} />

								{/* <Route path="/main" element={<MainPage />} /> */}

								<Route
									path="/manageportpoliopage"
									element={<ManagePortPolioPage />}
								/>
								<Route path="/errorpage" element={<ErrorPage />} />
							</Routes>
						</>

						{/* <Footer /> */}
					</ThemeProvider>
				</Router>
			</div>
		</Provider>
	);
}

export default App;
