import { Link } from 'react-router-dom'
import axios from 'axios'
import React, { useEffect, useState } from 'react';
import CinemaCard from './CinemaCard';

const Cinema = () => {
    const [appState, setAppState] = useState([]);
    useEffect(() => {
        const apiUrl = 'https://movie-drf-backend.herokuapp.com/api/Cinemas/';
        axios.get(apiUrl).then((resp) => {
            const allPersons = resp.data;
            setAppState(allPersons);
        });
    }, [setAppState]);
    if (!appState || appState.length === 0) return <p>Not founded</p>
    return (
        <div>
            <section className="movies" id="movies">
                <h2 className="heading">Смотрят сейчас</h2>
                <div className="movies-container">
                    {appState.map((Cinema) =>
                        <div key={Cinema.id}>
                            <div className="box">
                                <CinemaCard Cinema={Cinema} />
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}

export default Cinema;