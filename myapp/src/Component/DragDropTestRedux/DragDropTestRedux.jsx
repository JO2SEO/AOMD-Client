import React from 'react';
import { ChangeData } from '../../Redux/ChangeData';
import styled from 'styled-components';

export const DragDropPage = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
`;

function DragDropTestRedux() {
	return (
		<DragDropPage>
			<ChangeData />
		</DragDropPage>
	);
}

export default DragDropTestRedux;
