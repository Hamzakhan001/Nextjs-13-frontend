
"use client";
import React from 'react';
import { CustomButtonProps } from '@/types';

const CustomButton = ({title , containerStyle , handleClick}: CustomButtonProps ) => {
	const helloworld=()=>{

	}
  return (
	<button
	disabled={false}
	type={"button"}
	className={`custom-btn ${containerStyle}`}
	onClick={handleClick}
	>
		<span className={`flex-1`}>
			{title}
		</span>

	</button>
  )
}

export default CustomButton