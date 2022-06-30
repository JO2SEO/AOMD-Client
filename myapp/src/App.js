import './Style/App.css';
import LoginPage from './Page/LoginPage';
import MainPage from './Page/MainPage';
import DragDrop from './Component/DragDrop/DragDrop';
import Register from './Component/Register';
import ErrorPage from './Component/ErrorPage';

import Header from './Component/Header';
import Footer from './Component/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<div className="Content-div">
					<Routes>
						<Route path="/" element={<LoginPage />} />
						<Route path="/main" element={<MainPage />} />
						<Route path="/dragdrop" element={<DragDrop />} />
						<Route path="/register" element={<Register />} />

						<Route path="/errorpage" element={<ErrorPage />} />
					</Routes>
				</div>

				<Footer />
			</Router>
		</div>
	);
}

export default App;
