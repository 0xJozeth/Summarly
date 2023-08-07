import { logo } from '../assets';

const Hero = () => {
	return (
		<header className='w-full flex justify-center items-center flex-col'>
			<nav className='flex justify-between items-center w-full mb-10'>
				<img
					src={logo}
					alt='summarly_logo'
					className='w-28 m-8 object-contain'
				/>

				<button
					type='button'
					onClick={() => window.open('htttps://github.com/0xJozeth')}
					className='black_btn'
				>
					Github
				</button>
			</nav>
		</header>
	);
};

export default Hero;
