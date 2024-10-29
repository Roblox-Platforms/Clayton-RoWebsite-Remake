import '@css/slideshow.css';
import { useEffect, useState } from 'react';

function importAll(r: __WebpackModuleApi.RequireContext): string[] {
	return Array.from(new Map((r.keys().map(r) as string[]).map((path) => [path.split('/').pop(), path])).values());
}

const images: string[] = importAll(require.context('../content/slideshow', false, /\.(png|jpe?g)$/));

export default () => {
	const [currentSlide, setCurrentSlide] = useState<number>(0);
	const slideCount = images.length;
	const delay = 3000;

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slideCount);
		}, delay);

		return () => clearInterval(interval);
	}, [slideCount]);

	const goToSlide = (index: number) => {
		setCurrentSlide(index);
	};

	return (
		<div className='slideshow' style={{ height: '250px', marginBottom: '35px' }}>
			<div className='slides'>
				{images.map((image, index) => (
					<img
						key={index}
						src={image}
						alt={`Slide ${index + 1}`}
						className={`slide ${index === currentSlide ? 'active' : ''}`}
					/>
				))}
			</div>
			<div className='dots'>
				{images.map((_, index) => (
					<span
						key={index}
						className={`dot ${index === currentSlide ? 'active' : ''}`}
						onClick={() => goToSlide(index)}
					/>
				))}
			</div>
		</div>
	);
};
