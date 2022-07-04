import './Style/App.css';
import LoginPage from './Page/LoginPage';
import MainPage from './Page/MainPage';
import DragDrop from './Component/DragDrop/DragDrop';
import DragDropTest from './Component/DragDropTest/DragDropTest';

import Register from './Component/Register';
import ErrorPage from './Component/ErrorPage';

import Header from './Component/Header';
import Footer from './Component/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import { Provider } from 'react-redux';
// import Store from './Redux/Store';

function App() {
	return (
		// <Provider store={Store}>
		<div className="App">
			<Router>
				<Header />
				<div className="Content-div">
					<Routes>
						<Route path="/" element={<LoginPage />} />
						<Route path="/main" element={<MainPage />} />
						<Route path="/dragdrop" element={<DragDrop />} />

						<Route path="/dragdroptest" element={<DragDropTest />} />

						<Route path="/register" element={<Register />} />

						<Route path="/errorpage" element={<ErrorPage />} />
					</Routes>
				</div>

				<Footer />
			</Router>
		</div>
		// </Provider>
	);
}

export default App;
