import React from 'react';

import Container from '../Layout/Container';
import WalletItem from './WalletItem';
import WalletWrapper from './WalletWrapper';

import './Wallet.css';

const hotWallets = [
	{
		id: 'w1',
		name: 'Coinbase Wallet',
	},
	{
		id: 'w2',
		name: 'Rainbow Wallet',
	},
	{
		id: 'w3',
		name: 'Metamask Wallet',
	},
];

const Wallet = () => {
	return (
		<section>
			<Container>
				<div className='walletBody'>
					<ul className='walletMenu'>
						{hotWallets.map((hotWallet) => (
							<WalletItem key={hotWallet.id} name={hotWallet.name} />
						))}
					</ul>
					<WalletWrapper />
				</div>
				<aside></aside>
			</Container>
		</section>
	);
};

export default Wallet;
