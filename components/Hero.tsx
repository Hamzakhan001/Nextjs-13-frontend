"use client";
import React from 'react';
import Image from 'next/image'
import {CustomButton} from './index'

function Hero() {

	const handleScroll= () =>{
		const nextSection = document.getElementById('discover');
		if(nextSection) {
			nextSection.scrollIntoView({ behavior: "smooth" });
		}
	}

  return (
	<div className='hero'>
		 <div className="flex-1 pt-36 padding-x">
			<h1 className='hero__title'>Rent a car!</h1>

			<CustomButton title='Get your cars' 
			containerStyle='bg-primary-blue text-white rounded-full mt-10' handleClick={handleScroll}/>
		 </div>
		 <div className='hero_image-container'>
			<div className='hero_image'>
				<Image src="/hero.png" alt="hero"
				fill className="obtject-contain" />
				<div className='hero__image-overlay'></div>
			</div>

		 </div>
	</div>
  )
}

export default Hero