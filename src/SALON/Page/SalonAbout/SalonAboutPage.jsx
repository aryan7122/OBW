import React from 'react';
import SalonAboutHero from './SalonAboutHero/SalonAboutHero';
import SalonAboutTabs from './SalonAboutTabs/SalonAboutTabs';
import SalonAboutValues from './SalonAboutValues/SalonAboutValues';
import './SalonAboutPage.scss';

const SalonAboutPage = () => {
    return (
        <div className="salon-about-page-container">
            <SalonAboutHero />
            <SalonAboutTabs />
            <SalonAboutValues />
        </div>
    );
};

export default SalonAboutPage;