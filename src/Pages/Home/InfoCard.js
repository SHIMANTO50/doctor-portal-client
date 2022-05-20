import React from 'react';

const InfoCard = ({ img, cardTitle, bgClass }) => {
    return (
        <div class={`card card-side bg-base-100 shadow-xl ${bgClass}`}>
            <figure className='pl-5'>
                <img src={img} />
            </figure>
            <div class="card-body text-white">
                <h2 class="card-title">{cardTitle}</h2>
                <p>Click the button to watch on Jetflix app.</p>

            </div>
        </div>
    );
};

export default InfoCard;