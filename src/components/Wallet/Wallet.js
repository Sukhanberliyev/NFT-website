import React from 'react';

import Container from '../Layout/Container';
import WalletItem from './WalletItem';
import WalletWrapper from './WalletWrapper';

import './Wallet.css';

const coldWallets = [
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
						{coldWallets.map((coldWallet) => (
							<WalletItem key={coldWallet.id} name={coldWallet.name} />
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
