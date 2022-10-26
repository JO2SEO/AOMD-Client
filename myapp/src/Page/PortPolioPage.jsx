import React from 'react';

import ChangeData from 'Redux/ChangeData';

import { LoadRawData } from 'Redux/RawdataSlice';
import { LoadPortData } from 'Redux/PortdataSlice';

function PortPolioPage() {
	LoadRawData();
	LoadPortData();

	return (
		<div style={{ width: '100%' }}>
			<ChangeData />
		</div>
	);
}

export default PortPolioPage;
