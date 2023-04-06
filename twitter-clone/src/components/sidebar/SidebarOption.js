import { ImportExportRounded } from '@mui/icons-material';
import "./SidebarOption.css";
import React from 'react';

function SidebarOption({text, Icon}){
	return <div  className='sidebarOption'>
		<Icon/>
		<h2>{text}</h2>
	</div>
}

export default SidebarOption;