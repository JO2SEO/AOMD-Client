import './Style/App.css';
import LoginPage from './Page/LoginPage';
import MainPage from './Page/MainPage';

import Header from './Component/Header';
import Footer from './Component/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<LoginPage />} />
					<Route path="/main" element={<MainPage />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
