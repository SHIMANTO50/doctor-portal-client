import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../src/assets/icons/clock.svg';
import marker from '../../../src/assets/icons/marker.svg';
import phone from '../../../src/assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12'>
            <InfoCard cardTitle="Opening Hours" bgClass="bg-gradient-to-r from-secondary to-primary" img={clock}></InfoCard>
            <InfoCard cardTitle="Visit our Location" bgClass="bg-neutral" img={marker}></InfoCard>
            <InfoCard cardTitle="contact us Now" bgClass="bg-gradient-to-r from-secondary to-primary" img={phone}></InfoCard>
        </div>
    );
};

export default Info;