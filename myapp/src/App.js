import { useState } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reset from 'styled-reset';
import { Provider } from 'react-redux';

import LoginPage from 'Page/LoginPage';
import FirstPage from 'Page/FirstPage/FirstPage';
import PracticePage from 'Page/PracticePage/PracticePage';
import EnterprisePage from 'Page/EnterprisePage/EnterprisePage';
import RegisterPage from 'Page/RegisterPage';
import ErrorPage from 'Page/ErrorPage';
import IntroducePage from 'Page/IntroducePage';
import PortPolioPage from 'Page/PortPolioPage';

import { darkTheme, lightTheme } from 'Component/theme';
import OauthPage from 'Component/OauthPage/OauthPage';
import Header from 'Component/Header';

import Darkmode from 'Image/darkmode.svg';

import store from 'Redux/Store';

import './App.css';

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
	right: 20px;
	bottom: 30px;
	cursor: pointer;
	border: none;
	background: transparent;

	& img {
		width: 50px;
		// background: black;
		height: 50px;
	}
	// &:hover img {
	// 	background: black;
	// }
`;

function App() {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleDarkMode = () => {
		// console.log('is dark ? = ', isDarkMode);
		setIsDarkMode(prev => !prev);
	};

	return (
		<Provider store={store}>
			<div className="App">
				<DarkModeButton onClick={toggleDarkMode}>
					<img src={Darkmode} alt="darkmode"></img>
				</DarkModeButton>

				<Router basename={process.env.PUBLIC_URL}>
					{/* 참고로, PUBLIC_URL은 package.json의 homepage URL값으로 설정된다. */}
					<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
						<GlobalStyle />
						<Header />

						<Routes>
							<Route path="/" element={<FirstPage />} />
							<Route path="/introducepage" element={<IntroducePage />} />
							<Route path="/loginpage" element={<LoginPage />} />
							<Route path="/registerpage" element={<RegisterPage />} />
							<Route path="/portpoliopage" element={<PortPolioPage />} />
							<Route path="/errorpage" element={<ErrorPage />} />
							<Route path="/oauth" element={<OauthPage />} />
							<Route path="/practicepage" element={<PracticePage />} />
							<Route path="/enterprisepage" element={<EnterprisePage />} />
						</Routes>
					</ThemeProvider>
				</Router>
			</div>
		</Provider>
	);
}

export default App;
