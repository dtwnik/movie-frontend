import Card from './Card'
import axios from 'axios'
import 'swiper/css/navigation';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
const Soon = () => {
    const [appState, setAppState] = useState([]);
    useEffect(() => {
        const apiUrl = 'https://movie-drf-backend.herokuapp.com/api/Soon/';
        axios.get(apiUrl).then((resp) => {
            const allPersons = resp.data;
            setAppState(allPersons);
        });
    }, [setAppState]);
    if (!appState || appState.length === 0) return <p>Not founded</p>
    return (
        <div>
            <section class="coming" id="coming">
                <h2 class="heading">Ожидаемые фильмы</h2>

                <Swiper
                    slidesPerView={5}
                    spaceBetween={20}
                    loop={true}
                    className="coming-container"
                >
                    {appState.map((Cinema) =>
                        <SwiperSlide key={Cinema.id} className="box">
                            <Card data={Cinema} />
                        </SwiperSlide>
                    )}
                </Swiper>
            </section>
        </div>
    );
}

export default Soon;