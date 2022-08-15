import { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reset from 'styled-reset';
import { Provider } from 'react-redux';

import LoginPage from 'Page/LoginRegisterPage/LoginPage';
import FirstPage from 'Page/FirstPage/FirstPage';
import PracticePage from 'Component/PracticeForStudy/PracticePage/PracticePage';
import EnterprisePage from 'Page/EnterprisePage/EnterprisePage';
import RegisterPage from 'Page/LoginRegisterPage/RegisterPage';
import ErrorPage from 'Page/ErrorPage';
import IntroducePage from 'Page/IntroducePage/IntroducePage';
import CommunityPage from 'Page/CommunityPage/CommunityPage';

import PortPolioPage from 'Page/PortPolioPage';
import PortPolio from 'Page/URL_PortPolio/PortPolio';

import { darkTheme, lightTheme } from 'Component/theme';
import OauthPage from 'Component/OauthPage/OauthPage';
import Header from 'Component/Header/Header';

import Darkmode from 'Image/darkmode.svg';

import store from 'Redux/Store';

import './App.css';

export const GlobalStyle = createGlobalStyle`
	${reset}  	
	body {        
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.textColor};
	}
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
				<img
					className="DarkModeButtonIMG"
					src={Darkmode}
					onClick={toggleDarkMode}
					alt="darkmode"
				/>

				<Router basename={process.env.PUBLIC_URL}>
					{/* PUBLIC_URL은 package.json의 homepage URL값으로 설정된다. */}
					<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
						<GlobalStyle />
						<Header />

						<Routes>
							<Route path="/" element={<FirstPage />} />
							<Route path="/loginpage" element={<LoginPage />} />
							<Route path="/registerpage" element={<RegisterPage />} />
							<Route path="/portpoliopage" element={<PortPolioPage />} />
							<Route path="/errorpage" element={<ErrorPage />} />
							<Route path="/oauth" element={<OauthPage />} />
							<Route path="/practicepage" element={<PracticePage />} />
							<Route path="/enterprisepage" element={<EnterprisePage />} />
							<Route path="/portpolio" element={<PortPolio />} />
							<Route path="/introducepage" element={<IntroducePage />} />
							<Route path="/communitypage" element={<CommunityPage />} />
						</Routes>
					</ThemeProvider>
				</Router>
			</div>
		</Provider>
	);
}

export default App;
