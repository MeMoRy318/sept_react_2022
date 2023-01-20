import React from 'react';

const Spacex = ({spacex}) => {

    const {mission_name,launch_year,links:{mission_patch_small}} = spacex;

    return (
        <div>
            <h2>{mission_name}</h2>
            <div>year - {launch_year}</div>
            <img src={mission_patch_small} alt={mission_name}/>
        </div>
    );
};

export {Spacex};