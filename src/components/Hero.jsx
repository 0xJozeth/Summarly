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

			<h1 className='head_text'>
				Summarize Articles with <br className='max-md:hidden' />
				<span className='green_gradient'>OpenAI GPT-4</span>
			</h1>
			<h2 className='desc'>
				Streamline your reading experience using Summarly, an open-source tool
				for article summarization. This innovative solution condenses lengthy
				articles into easily digestible and succinct summaries, making your
				reading more efficient.
			</h2>
		</header>
	);
};

export default Hero;
