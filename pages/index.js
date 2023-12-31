import Header from '../pages/components/Header';
import Navigation from '../pages/components/Navigation';
import Intro from '../pages/components/Intro';
import React, { useEffect, useState } from 'react';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function Home() {
	useEffect(() => {
		window.onload = function () {
			let loaderWrapper =
				document.getElementsByClassName('loader-wrapper')[0];
			loaderWrapper.style.opacity = 1;
			setTimeout(() => {
				loaderWrapper.style.opacity = 0;
				loaderWrapper.style.zIndex = -1;
			}, 500);
		};

		setTimeout(() => {
			let loaderWrapper =
				document.getElementsByClassName('loader-wrapper')[0];
			loaderWrapper.style.opacity = 0;
			loaderWrapper.style.zIndex = -1;
		}, 2000);
	});

	const backToTop = () => {
		window.scroll({
    top: 0,
			behavior: 'smooth',
			block: 'start',
		});
	};

	useEffect(() => {
		setTimeout(() => {
			window.onscroll = function () {
				function reveal() {
					var reveals = document.querySelectorAll('.reveal');
					reveals.forEach((item) => {
						var windowHeight = window.innerHeight;
						var elementTop = item.getBoundingClientRect().top;
						var elementVisible = 0;

						if (elementTop < windowHeight - elementVisible) {
							item.classList.add('active');
						} else {
							item.classList.remove('active');
						}
					});
				}

				window.addEventListener('scroll', reveal);
			};
		}, 100);
	});

	return (
		<div>
			{/* loader */}
			<div className='loader-wrapper transition-all duration-1000'>
				<span className='loader'>
					<span className='loader-inner'></span>
				</span>
			</div>
			<Header />
			<Navigation />
			<Intro />
			<div className='reveal'>
				<About />
			</div>
			<div className='bg-white dark:bg-black'>
				<div className='w-3/4 h-[1px] mx-auto text-[0] bg-gray-400'>
					&160;
				</div>
			</div>
			<div className='reveal'>
				<Skills />
			</div>
			<div className='bg-white dark:bg-black'>
				<div className='w-3/4 h-[1px] mx-auto text-[0] bg-gray-400'>
					&160;
				</div>
			</div>
			<div id='modal-position' className='reveal'>
				<Portfolio />
			</div>
			<div className='bg-white dark:bg-black'>
				<div className='w-3/4 h-[1px] mx-auto text-[0] bg-gray-400'>
					&160;
				</div>
			</div>
			<div className='reveal'>
				<Contact />
				<BackToTop handleClick={backToTop} />
				<Footer />
			</div>
		</div>
	);
}
