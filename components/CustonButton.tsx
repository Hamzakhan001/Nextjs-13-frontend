
"use-client"
import React from 'react';
import { CustomButtonProps } from '@/types';

const CustonButton = ({title,containerStyles,handleClick}: CustomButtonProps ) => {
  return (
	<button
	disabled={false}
	type={"button"}
	className={`custom-btn`}
	onClick={()=>{}}
	>
		<span className={`flex-1`}>
			{title}
		</span>

	</button>
  )
}

export default CustonButton