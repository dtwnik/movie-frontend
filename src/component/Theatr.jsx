import axios from 'axios'
import React, { useEffect, useState } from 'react';
import CinemaCard from './TCinemaCard';
const Theatr = () => {
    const [Theatr, setTheatr] = useState([]);
    useEffect(() => {
      const apiUrl = 'https://movie-drf-backend.herokuapp.com/api/Theatr/';
      axios.get(apiUrl).then((resp) => {
        const allTheatr = resp.data;
        setTheatr(allTheatr);
      });
    }, [setTheatr]);
    if(!Theatr || Theatr.length === 0)return <p>Not founded</p>
    return (
        <div>
            <section className="movies" id="theatr">
                <h2 className="heading">Театры</h2>
                    <div className="movies-container">
                        {Theatr.map((Cinema)=> 
                            <div key={Cinema.id}>
                                
                                <div className="box">
                                    <CinemaCard Cinema={Cinema}/>
                                </div>
                            </div>
                        )}
                    </div>
            </section>
        </div>
    );
}

export default Theatr;