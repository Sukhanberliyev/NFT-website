import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Card.css'; // importing css
import Bid from '../UI/Bid'; // importing components
import PlaceBid from './Modals/PlaceBid';
import candles from '../../assets/icons/candles.svg'; // importing icons
import candle from '../../assets/icons/candle.svg'; // importing icons

const Card = (props) => {
	const [click, setClick] = useState(false);
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const bidHandler = () => {
		setModalIsOpen(true);
	};

	const closeModalHandler = () => {
		setModalIsOpen(false);
	};

	const likeButtonHandler = () => {
		setClick(!click);
	};
	return (
		<div className='card'>
			<div className='cardPreview'>
				<img src={props.mainNft} alt='nft' />
				<div className='cardControl'>
					<div className='cardCategory'>PURCHASING !</div>
					<div className='likeBtn' onClick={likeButtonHandler}>
						<svg
							className={!click ? 'heart' : 'heart active'}
							viewBox='0 0 44 44'
							xmlns='http://www.w3.org/2000/svg'>
							<path d='M5.26501 21.2636C3.29784 15.1219 5.59684 8.10209 12.0447 6.02492C15.4363 4.93042 19.18 5.57576 21.9997 7.69692C24.6672 5.63442 28.5483 4.93776 31.9363 6.02492C38.3842 8.10209 40.6978 15.1219 38.7325 21.2636C35.6708 30.9986 21.9997 38.4969 21.9997 38.4969C21.9997 38.4969 8.42934 31.1123 5.26501 21.2636Z' />
						</svg>
					</div>
					<button onClick={bidHandler} className='cardButton'>
						Place a bid
						<img src={candle} alt='icon' />
					</button>
				</div>
			</div>
			<Link className='cardLink' to={`/discover/${props.id}`}>
				<div className='cardBody'>
					<div className='cardLine cardMargin'>
						<p className='cardTitle'>{props.title}</p>
						<Bid>{props.bid} ETH</Bid>
					</div>
					<div className='cardLine'>
						<div className='cardUsers'>
							<div className='cardAvatar'>
								<img src={props.creator1} alt='creator' />
							</div>
							<div className='cardAvatar avatarMargin'>
								<img src={props.creator2} alt='creator' />
							</div>
							<div className='cardAvatar avatarMargin'>
								<img src={props.creator3} alt='creator' />
							</div>
						</div>
						<p className='cardCounter'>{props.amount} in stock</p>
					</div>
				</div>
				<div className='cardFoot'>
					<div className='cardStatus'>
						<img src={candles} alt='icon' />
						<p>
							Highest bid <span>{props.price} ETH</span>
						</p>
					</div>
					<p className='cardBid'>New Bid????</p>
				</div>
			</Link>
			{modalIsOpen && <PlaceBid onClick={bidHandler} onClose={closeModalHandler} />}
		</div>
	);
};

export default Card;
