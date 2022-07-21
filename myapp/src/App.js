import './App.css';
import LoginPage from './Page/LoginPage';
// import MainPage from './Page/MainPage';
import FirstPage from './Page/FirstPage/FirstPage';

import PracticePage from './Page/PracticePage/PracticePage';
import EnterprisePage from './Page/EnterprisePage/EnterprisePage';

import RegisterPage from './Page/RegisterPage';
import ErrorPage from './Page/ErrorPage';
import IntroducePage from './Page/IntroducePage';
import PortPolioPage from './Page/PortPolioPage';
import OauthPage from './Component/OauthPage/OauthPage';

import Header from './Component/Header';
// import Footer from './Component/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Darkmode from './Image/darkmode.svg';

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
		console.log('is dark ? = ', isDarkMode);
		setIsDarkMode(prev => !prev);
	};

	return (
		<Provider store={store}>
			<div className="App">
				<DarkModeButton onClick={toggleDarkMode}>
					<img src={Darkmode} alt="darkmode"></img>
				</DarkModeButton>

				<Router>
					<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
						<GlobalStyle />
						<Header />

						<>
							<Routes>
								<Route path="/AOMD-Client" element={<FirstPage />} />
								<Route path="/introducepage" element={<IntroducePage />} />
								<Route path="/loginpage" element={<LoginPage />} />
								<Route path="/registerpage" element={<RegisterPage />} />
								<Route path="/portpoliopage" element={<PortPolioPage />} />
								<Route path="/errorpage" element={<ErrorPage />} />
								<Route path="/oauth" element={<OauthPage />} />
								<Route path="/practicepage" element={<PracticePage />} />
								<Route path="/enterprisepage" element={<EnterprisePage />} />
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
