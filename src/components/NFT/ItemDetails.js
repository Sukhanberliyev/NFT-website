import React from 'react';

import MainButton from '../UI/MainButton';
import OutlineButton from '../UI/OutlineButton';

import './Nft.css';
import diamond from '../../assets/icons/diamond.svg';
import creator12 from '../../assets/avatars/creator12.png';
import creator11 from '../../assets/avatars/creator11.png';
import creator15 from '../../assets/avatars/creator15.png';

const ItemDetails = () => {
	return (
		<div className='itemDetails'>
			<h3 className='nftTitle'>The amazing art</h3>
			<div className='itemCost'>
				<div className='itemPrice statusStrokeGreen nftStatus'>2.5 ETH</div>
				<div className='itemPrice statusStrokeBlack nftStatus'>$4,429.87</div>
				<div className='itemCounter'>10 in stock</div>
			</div>
			<p className='itemText'>Lorem ipsum dolor set amit.</p>
			<div className='itemTabs'>
				<ul className='itemNav'>
					<li className='itemLink active'>Info</li>
					<li className='itemLink'>Owners</li>
					<li className='itemLink'>History</li>
					<li className='itemLink'>Bids</li>
				</ul>
				<div className='itemContainer'>
					<div className='itemBox'>
						<div className='itemUsers'>
							<div className='itemUser'>
								<div className='itemAvatar'>
									<img src={creator11} alt='creator' />
									<div className='itemReward'>
										<img src={diamond} alt='' />
									</div>
								</div>
								<div className='itemDescription'>
									<p className='itemPosition'>Owner</p>
									<p className='itemName'>Diana Moore</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='itemControl'>
				<div className='itemHead'>
					<div className='itemAvatar'>
						<img src={creator12} alt='creator' />
					</div>
					<div className='itemDescription'>
						<p className='itemInfo'>
							Highest bid by <span>Kohaku Tora</span>
						</p>
						<div className='itemCurrency'>
							<p className='itemPrice'>1.46 ETH</p>
							<p className='itemPrice'>$2,764.89</p>
						</div>
					</div>
				</div>
				<div className='itemBtns'>
					<div className='itemBtn'>
						<MainButton>Purchase now</MainButton>
					</div>
					<div className='itemBtn'>
						<OutlineButton>Place a bid</OutlineButton>
					</div>
				</div>
				<div className='itemVariants'>
					Service Fee <span className='itemPercent'>1.5%</span>
					<span>2.563 ETH</span>
					<span>$4,540.62</span>
				</div>
			</div>
		</div>
	);
};

export default ItemDetails;
