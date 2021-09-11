import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// importing DUMMY_DATA
import DiscoverData from '../../data/Discover.json';

// importing components
import './MainDiscover.css';
// importing components
import Dropdown from '../UI/Dropdown';
import Container from '../Layout/Container';
import Card from '../UI/Card';
import MainButton from '../UI/MainButton';

// importing icons
import filter from '../../assets/icons/filter.svg';
import filterOff from '../../assets/icons/filterOff.svg';
import Slider from 'react-slick';
import MainDiscoverDropdown from './MainDiscoverDropdown';

// --------------- Setting out slider's setting ---------------
var settings = {
	dots: true,
	rows: 2,
	infinite: true,
	speed: 500,
	arrows: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	initialSlide: 0,
	responsive: [
		{
			breakpoint: 1180,
			settings: {
				slidesToShow: 3,
				rows: 3,
				slidesToScroll: 2,
				dots: true,
				arrows: false,
			},
		},
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				rows: 4,
				slidesToScroll: 2,
				initialSlide: 2,
				dots: true,
				arrows: false,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				rows: 1,
				slidesToScroll: 1,
				dots: true,
				arrows: false,
			},
		},
	],
};
// --------------- Slider's setting end ---------------

const dropdowns = [
	{ id: 'd1', label: 'Price', options: ['Highest price', 'The lowest price'] },
	{ id: 'd2', label: 'Likes', options: ['Most liked', 'Least liked'] },
	{ id: 'd3', label: 'Creator', options: ['Verified only', 'All', 'Most liked'] },
];

const MainDiscover = () => {
	const [isOpen, setIsOpen] = useState(false);

	const tabletDropdown = ['All items', 'Art', 'Game', 'Photography', 'Music', 'Video'];
	const mySlider = settings;

	const filterHandler = () => {
		setIsOpen(!isOpen);
	};

	return (
		<section className='discover'>
			<Container>
				<h3 className='discoverTitle'>Discover</h3>
				<div className='discoverTop'>
					<div className='timeFrameDropDown'>
						<Dropdown options={['Recently added', 'Long added']} />
					</div>
					<div className='discoverNav'>
						<Link className='discoverLink'>All items</Link>
						<Link className='discoverLink'>Art</Link>
						<Link className='discoverLink'>Game</Link>
						<Link className='discoverLink'>Photography</Link>
						<Link className='discoverLink'>Music</Link>
						<Link className='discoverLink'>Video</Link>
					</div>
					<div className='tabletShow'>
						<Dropdown options={tabletDropdown} />
					</div>
					<div className='filter' onClick={filterHandler}>
						<MainButton>
							<div className='filterBtn'>
								Filter
								{!isOpen ? (
									<img src={filter} alt='icon' />
								) : (
									<img src={filterOff} alt='icon' />
								)}
							</div>
						</MainButton>
					</div>
				</div>
				<div className={`discoverFilters ${isOpen ? 'display' : ''}`}>
					<div className='discoverSorting'>
						{dropdowns.map((dropdown) => (
							<MainDiscoverDropdown
								key={dropdown.id}
								label={dropdown.label}
								options={dropdown.options}
							/>
						))}
						<div className='discoverRange'>
							<div className='range'>
								<p className='rangeLabel'>Price Range</p>
								<input type='range' min='0' max='100' className='slider' />
								<div className='rangeIndicators'>
									<p className='rangeText'>0.01 ETH</p>
									<p className='rangeText'>10 ETH</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='discoverList'>
					<Slider {...mySlider}>
						{DiscoverData.map((discoverNft) => (
							<Card
								key={discoverNft.id}
								mainNft={discoverNft.mainNft}
								title={discoverNft.title}
								bid={discoverNft.bid}
								creator1={discoverNft.creator1}
								creator2={discoverNft.creator2}
								creator3={discoverNft.creator3}
								amount={discoverNft.amount}
								price={discoverNft.price}
							/>
						))}
					</Slider>
				</div>
				<div className='discoverBtn'></div>
			</Container>
		</section>
	);
};

export default MainDiscover;
