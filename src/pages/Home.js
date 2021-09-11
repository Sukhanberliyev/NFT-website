import React, { Fragment } from 'react';
import HeroSection from '../components/HeroSection/HeroSection';

import HeroSectionData from '../data/HeroSection.json';
import SecondHero from '../components/SecondHero/SecondHero';
import Popular from '../components/Popular/Popular';
import Hot from '../components/HotBid/Hot';
import Collections from '../components/Collections/Collections';
import Description from '../components/Description/Description';
import MainDiscover from '../components/MainDiscover/MainDiscover';

const Home = () => {
	return (
		<Fragment>
			<HeroSection nfts={HeroSectionData} />
			<SecondHero />
			<Popular />
			<Hot />
			<Collections />
			<MainDiscover />
			<Description />
		</Fragment>
	);
};

export default Home;
