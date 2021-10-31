import React from 'react';
import classes from './MyWallet.module.css';

const MyWallet = () => {
	return (
		<div className={classes.myWallet}>
			<div className={classes.walletContainer}>
				<div className={classes.mainImg}>
					<img src='/assets/images/ethereum.svg' alt='ethereum' />
				</div>
				<h2 className={classes.mainText}>Sign in with your wallet</h2>
				<p className={classes.subText}>
					Sign in with one of available wallet providers or create a new wallet.{' '}
					<span>What is a wallet?</span>
				</p>
				<ul>
					<li className={classes.walletList}>
						<div className={classes.walletImg}>
							<img src='/assets/images/metamask.png' alt='' />
						</div>
						<p>Metamask</p>
					</li>
					<li className={classes.walletList}>
						<div className={classes.walletImg}>
							<img src='/assets/images/coinbaseWallet.png' alt='' />
						</div>
						<p>Coinbase</p>
					</li>
					<li className={classes.walletList}>
						<p>Show more options</p>
					</li>
				</ul>
				<ul>
					<li className={classes.walletList}>
						<img src='' alt='' />
						<p>Coinbase</p>
					</li>
					<li className={classes.walletList}>
						<img src='' alt='' />
						<p>Formatic</p>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default MyWallet;
