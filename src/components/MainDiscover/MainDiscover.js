import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// importing DUMMY_DATA
import DiscoverData from './Discover.json';

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

// importing NFTs
import nftImage32 from '../../assets/images/nftImage32.png';
import nftImage27 from '../../assets/images/nftImage27.png';
import nftImage28 from '../../assets/images/nftImage28.png';
import nftImage29 from '../../assets/images/nftImage29.png';
import nftImage30 from '../../assets/images/nftImage30.png';
import nftImage31 from '../../assets/images/nftImage31.png';
import nftImage33 from '../../assets/images/nftImage33.png';
import nftImage34 from '../../assets/images/nftImage34.png';

// importing creators
import creator12 from '../../assets/avatars/creator12.png';
import creator11 from '../../assets/avatars/creator11.png';
import creator15 from '../../assets/avatars/creator15.png';
import creator16 from '../../assets/avatars/creator16.png';
import creator17 from '../../assets/avatars/creator17.png';
import creator1 from '../../assets/avatars/creator1.png';
import creator2 from '../../assets/avatars/creator2.png';
import creator3 from '../../assets/avatars/creator3.png';
import creator4 from '../../assets/avatars/creator4.png';
import creator5 from '../../assets/avatars/creator5.png';
import creator6 from '../../assets/avatars/creator6.png';
import creator7 from '../../assets/avatars/creator7.png';
import creator8 from '../../assets/avatars/creator8.png';
import creator9 from '../../assets/avatars/creator9.png';
import Slider from 'react-slick';
import MainDiscoverDropdown from './MainDiscoverDropdown';

// importing DUMMY_DATA
const discoverNfts = [
	{
		id: 'h1',
		mainNft: nftImage34,
		title: 'Tauren Valley',
		bid: '2.45',
		creator1: creator15,
		creator2: creator16,
		creator3: creator17,
		amount: '1',
		price: '0.1',
	},
	{
		id: 'h2',
		mainNft: nftImage33,
		title: 'Toxic Flamingos',
		bid: '2.37',
		creator1: creator1,
		creator2: creator2,
		creator3: creator3,
		amount: '5',
		price: '0.13',
	},
	{
		id: 'h3',
		mainNft: nftImage32,
		title: 'Space Park',
		bid: '2.01',
		creator1: creator4,
		creator2: creator5,
		creator3: creator6,
		amount: '12',
		price: '0.09',
	},
	{
		id: 'h4',
		mainNft: nftImage31,
		title: 'Ethereuminisation',
		bid: '3.44',
		creator1: creator7,
		creator2: creator8,
		creator3: creator9,
		amount: '9',
		price: '0.9',
	},
	{
		id: 'h5',
		mainNft: nftImage30,
		title: 'Waterflamefall',
		bid: '2.09',
		creator1: creator1,
		creator2: creator12,
		creator3: creator5,
		amount: '4',
		price: '0.13',
	},
	{
		id: 'h6',
		mainNft: nftImage29,
		title: 'Digital Blade',
		bid: '2.11',
		creator1: creator15,
		creator2: creator2,
		creator3: creator7,
		amount: '22',
		price: '0.5',
	},
	{
		id: 'h7',
		mainNft: nftImage28,
		title: 'Norway',
		bid: '2.20',
		creator1: creator17,
		creator2: creator1,
		creator3: creator4,
		amount: '1',
		price: '0.01',
	},
	{
		id: 'h8',
		mainNft: nftImage27,
		title: 'Monstroo',
		bid: '1.88',
		creator1: creator8,
		creator2: creator3,
		creator3: creator11,
		amount: '10',
		price: '0.15',
	},
];

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
