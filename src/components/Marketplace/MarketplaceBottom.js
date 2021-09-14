import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Dropdown from '../UI/Dropdown';
import MarketplaceDropdown from './MarketplaceDropdown';
import Card from '../UI/Card';
import OutlineButton from '../UI/OutlineButton';
import MarketplaceDataOne from '../../data/MarketplaceData/Marketplace.json'; // importing DUMMYDATA
import MarketplaceDataArt from '../../data/MarketplaceData/MarketplaceArt.json'; // importing DUMMYDATA
import MarketplaceDataPhotography from '../../data/MarketplaceData/MarketplacePhotography.json'; // importing DUMMYDATA
import MarketplaceDataMusic from '../../data/MarketplaceData/MarketplaceMusic.json'; // importing DUMMYDATA
import reset from '../../assets/icons/reset.svg'; // importing icons

const dropdowns = [
	{ id: 'd1', label: 'Price', options: ['Highest price', 'The lowest price'] },
	{ id: 'd2', label: 'Likes', options: ['Most liked', 'Least liked'] },
	{ id: 'd3', label: 'Creator', options: ['Verified only', 'All', 'Most liked'] },
];

const MarketplaceBottom = () => {
	const [tabMenuState, setTabMenuState] = useState(1);

	const tabHandler = (index) => {
		setTabMenuState(index);
	};

	const discoverTimeframe = ['Newest', 'Oldest'];
	return (
		<>
			<div className='marketplaceSorting'>
				<div className='marketplaceDropdown'>
					<Dropdown options={discoverTimeframe} />
				</div>
				<div className='marketplaceNav'>
					<Link
						onClick={() => tabHandler(1)}
						className={tabMenuState === 1 ? 'marketplaceLink active' : 'marketplaceLink'}>
						All items
					</Link>
					<Link
						onClick={() => tabHandler(2)}
						className={tabMenuState === 2 ? 'marketplaceLink active' : 'marketplaceLink'}>
						Art
					</Link>
					<Link
						onClick={() => tabHandler(3)}
						className={tabMenuState === 3 ? 'marketplaceLink active' : 'marketplaceLink'}>
						Photography
					</Link>
					<Link
						onClick={() => tabHandler(4)}
						className={tabMenuState === 4 ? 'marketplaceLink active' : 'marketplaceLink'}>
						Music
					</Link>
					<Link
						onClick={() => tabHandler(5)}
						className={tabMenuState === 5 ? 'marketplaceLink active' : 'marketplaceLink'}>
						Video
					</Link>
				</div>
			</div>
			<div className='marketplaceRow'>
				<div className='marketplaceFilters'>
					<div className='range'>
						<p className='rangeLabel'>Price Range</p>
						<input type='range' min='0' max='100' className='slider' />
						<div className='rangeIndicators'>
							<p className='rangeText'>0.01 ETH</p>
							<p className='rangeText'>10 ETH</p>
						</div>
					</div>
					<div className='marketplaceDropdowns'>
						{dropdowns.map((dropdown) => (
							<MarketplaceDropdown
								key={dropdown.id}
								label={dropdown.label}
								options={dropdown.options}
							/>
						))}
					</div>
					<div className='marketplaceReset'>
						<img src={reset} alt='icon' />
						Reset filter
					</div>
				</div>
				<div className='marketplaceWrapper'>
					<div className={tabMenuState === 1 ? 'marketplaceList active' : 'marketplaceList'}>
						{MarketplaceDataOne.map((marketplaceNft) => (
							<div key={marketplaceNft.id} className='marketplaceCard'>
								<Card
									mainNft={marketplaceNft.mainNft}
									title={marketplaceNft.title}
									bid={marketplaceNft.bid}
									creator1={marketplaceNft.creator1}
									creator2={marketplaceNft.creator2}
									creator3={marketplaceNft.creator3}
									amount={marketplaceNft.amount}
									price={marketplaceNft.price}
								/>
							</div>
						))}
					</div>
					<div className={tabMenuState === 2 ? 'marketplaceList active' : 'marketplaceList'}>
						{MarketplaceDataArt.map((marketplaceNft) => (
							<div key={marketplaceNft.id} className='marketplaceCard'>
								<Card
									mainNft={marketplaceNft.mainNft}
									title={marketplaceNft.title}
									bid={marketplaceNft.bid}
									creator1={marketplaceNft.creator1}
									creator2={marketplaceNft.creator2}
									creator3={marketplaceNft.creator3}
									amount={marketplaceNft.amount}
									price={marketplaceNft.price}
								/>
							</div>
						))}
					</div>
					<div className={tabMenuState === 3 ? 'marketplaceList active' : 'marketplaceList'}>
						{MarketplaceDataPhotography.map((marketplaceNft) => (
							<div key={marketplaceNft.id} className='marketplaceCard'>
								<Card
									mainNft={marketplaceNft.mainNft}
									title={marketplaceNft.title}
									bid={marketplaceNft.bid}
									creator1={marketplaceNft.creator1}
									creator2={marketplaceNft.creator2}
									creator3={marketplaceNft.creator3}
									amount={marketplaceNft.amount}
									price={marketplaceNft.price}
								/>
							</div>
						))}
					</div>
					<div className={tabMenuState === 4 ? 'marketplaceList active' : 'marketplaceList'}>
						{MarketplaceDataMusic.map((marketplaceNft) => (
							<div key={marketplaceNft.id} className='marketplaceCard'>
								<Card
									mainNft={marketplaceNft.mainNft}
									title={marketplaceNft.title}
									bid={marketplaceNft.bid}
									creator1={marketplaceNft.creator1}
									creator2={marketplaceNft.creator2}
									creator3={marketplaceNft.creator3}
									amount={marketplaceNft.amount}
									price={marketplaceNft.price}
								/>
							</div>
						))}
					</div>
					<div className={tabMenuState === 5 ? 'marketplaceList active' : 'marketplaceList'}>
						<div className='marketplaceCard'>
							<p>The video hasn't been added yet</p>
						</div>
					</div>
					<div className='loadBtn'>
						<OutlineButton>Load more</OutlineButton>
					</div>
				</div>
			</div>
		</>
	);
};

export default MarketplaceBottom;
