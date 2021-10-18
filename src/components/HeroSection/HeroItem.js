import React, { useEffect, useState } from 'react';

import classes from './HeroItem.module.css'; // Importing CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //  Importing Icons
import { faPlay } from '@fortawesome/free-solid-svg-icons'; //  Importing Icons
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons'; //  Importing Icons
import { faExpand } from '@fortawesome/free-solid-svg-icons'; //  Importing Icons
import ConnectWallet  from '../UI/Modals/ConnectWallet'; // Importing Components
import MainButton from '../UI/MainButton'; // Importing Buttons
import OutlineButton from '../UI/OutlineButton'; // Importing Buttons
import eth from '../../assets/avatars/eth.png'; // Importing image

const HeroItem = (props) => {
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const walletHandler = () => {
    setModalIsOpen(true);
  };

  const closeModalHandler = () => {
    setModalIsOpen(false);
  };

	useEffect(() => {
		if (hours > 0) {
			setTimeout(() => setMinutes(hours - 1), 600000);
		} else {
			setHours(7 - 1);
		}
		if (minutes > 0) {
			setTimeout(() => setMinutes(minutes - 1), 60000);
		} else {
			setMinutes(60 - 1);
		}
		if (seconds > 0) {
			setTimeout(() => setSeconds(seconds - 1), 1000);
		} else {
			setSeconds(60 - 1);
		}
	}, [seconds, minutes, hours]);

	return (
		<div className={classes.mainRow}>
			<div className={classes.player}>
				<div className={classes.playerPreview}>
					<img src={props.nftImage} alt='hero' />
				</div>
				<div className={classes.playerControl}>
					<div className={classes.playerBtn}>
						<FontAwesomeIcon className={classes.icon} icon={faPlay} />
					</div>
					<div className={classes.line}>
						<div className={classes.progress}></div>
					</div>
					<div className={classes.time}>1:25</div>
					<div className={classes.playerBtn}>
						<FontAwesomeIcon className={classes.icon} icon={faVolumeUp} />
					</div>
					<div className={classes.expand}>
						<FontAwesomeIcon className={classes.icon} icon={faExpand} />
					</div>
				</div>
			</div>
			<div className={classes.mainDetails}>
				<h1>{props.title}</h1>
				<ul className={classes.items}>
					<li className={classes.mainItem}>
						<img className={classes.avatar} src={props.creatorImg} alt='avatar' />
						<div className={classes.description}>
							<p className={classes.mainCategory}>Creator</p>
							<p className={classes.mainText}>{props.creatorName}</p>
						</div>
					</li>
					<li className={classes.mainItem}>
						<img className={classes.avatar} src={eth} alt='cryptocurrency' />
						<div className={classes.description}>
							<p className={classes.mainCategory}>Instant price</p>
							<p className={classes.mainText}>{props.instantPrice}</p>
						</div>
					</li>
				</ul>
				<div className={classes.mainWrap}>
					<p className={classes.mainInfo}>Current Bid</p>
					<p className={classes.mainCurrency}>{props.currentBid}</p>
					<p className={classes.mainPrice}>{props.realPrice}</p>
					<p className={classes.mainInfo}>Auction end in</p>
					<ul className={classes.mainTimer}>
						<li className={classes.mainBox}>
							<p className={classes.mainNumber}>0{hours}</p>
							<p className={classes.mainTime}>hrs</p>
						</li>
						<li className={classes.mainBox}>
							<p className={classes.mainNumber}>{minutes}</p>
							<p className={classes.mainTime}>mins</p>
						</li>
						<li className={classes.mainBox}>
							<p className={classes.mainNumber}>{seconds}</p>
							<p className={classes.mainTime}>secs</p>
						</li>
					</ul>
				</div>
				<div className={classes.mainBtns}>
					<div className='mainBtn' onClick={walletHandler}>
						<MainButton>Place a bid</MainButton>
					</div>
					<div className='mainBtn'>
						<OutlineButton>View Item</OutlineButton>
					</div>
				</div>
			</div>
      {modalIsOpen && (
        <ConnectWallet onClick={walletHandler} onClose={closeModalHandler} />
      )}
		</div>
	);
};

export default HeroItem;
