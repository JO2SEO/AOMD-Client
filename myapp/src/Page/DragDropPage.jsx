import React from 'react';
import { ChangeData } from '../Redux/ChangeData';

function DragDropPage() {
	return (
		<div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
			<ChangeData />
		</div>
	);
}

export default DragDropPage;
