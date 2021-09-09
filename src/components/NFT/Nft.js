import React from 'react';
import Container from '../Layout/Container';

import './Nft.css';
import nftImage32 from '../../assets/images/nftImage32.png';
import ItemDetails from './ItemDetails';


const Nft = () => {
	return (
		<section className='nft'>
			<Container>
				<div className='nftDetail'>
					<div className='nftBg'>
						<div className='nftPreview'>
							<div className='nftCategories'>
								<div className='nftStatus statusBlack'>ART</div>
								<div className='nftStatus statusPurple'>UNLOCKABLE</div>
							</div>
							<img src={nftImage32} alt='nft' />
						</div>
						<div className='nftOptions'></div>
					</div>
					<ItemDetails />
				</div>
			</Container>
		</section>
	);
};

export default Nft;
