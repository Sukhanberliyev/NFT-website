import React from 'react';

import './Wallet.css';

const walletSvg = (
	<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
		<rect x='3.5' y='4.5' width='17' height='15' rx='2.5' />
		<path d='M5.86377 7.5H10.7729' />
		<rect x='15.7729' y='10.0455' width='4.72727' height='3.90909' rx='0.5' stroke='white' />
		<circle cx='17.7274' cy='12' r='0.818182' />
	</svg>
);

const arrow = (
	<svg viewBox='0 0 44 44' xmlns='http://www.w3.org/2000/svg'>
		<path d='M12 22.3333L31.8334 22.3333' />
		<path d='M24.5 29.6667L31.8333 22.3333' />
		<path d='M24.5 15L31.8333 22.3333' />
	</svg>
);

const WalletItem = (props) => {
	return (
		<li className='walletLink'>
			<div style={props.BG} className='walletIcon'>{walletSvg}</div>
			<span>{props.name}</span>
			<div className='walletArrow'>{arrow}</div>
		</li>
	);
};

export default WalletItem;
