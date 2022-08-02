import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import HeaderInMainPage from './HeaderInMainPage';
import HeaderInAnotherPage from './HeaderInAnotherPage';

export const OnToggleList = styled.div`
	display: ${({ active }) => {
		if (active) {
			return 'flex';
		}
		return 'none';
	}};
`;

function Header() {
	const [infoLocation, setInfoLocation] = useState('');
	const location = useLocation();

	useEffect(() => {
		setInfoLocation(location.pathname);
	}, [location]);

	return <>{infoLocation === '/' ? <HeaderInMainPage /> : <HeaderInAnotherPage />}</>;
}

export default Header;
