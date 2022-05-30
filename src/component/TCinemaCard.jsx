import {Link} from 'react-router-dom'
import React, { useEffect, useRef, useState } from 'react';
const CinemaCard = ({Cinema}) => {
    const id = Cinema.url.split('/')[5]


    return (
        <Link to={'/theatr/' + id}>
            <div className="box-img">
                <img src={Cinema.photo} alt="" />
            </div>
            <h3>{Cinema.title}</h3>
            <span>{Cinema.duration} мин | {Cinema.director}</span>
        </Link>
    );
}

export default CinemaCard;