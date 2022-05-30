import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import '../css/DetailPage.css'
import Header from '../component/Header';
import Footer from '../component/Footer';
import TTime from '../component/TTime';
const TDetailsPage = () => {
    const { slug } = useParams()
    const [id, setId] = useState(slug)
    const [appState, setAppState] = useState();
    useEffect(() => {
        const apiUrl = 'https://movie-drf-backend.herokuapp.com/api/Theatr/' + slug;
        axios.get(apiUrl).then((resp) => {
            const allPersons = resp.data;
            setAppState(allPersons);
        });
    }, [setAppState]);
    return (
        <>
        <Header/>
        {
        appState && (
          <>
            <div class='banner' style={{ backgroundImage: `url(${appState.photo_detail})` }}></div>
            <div className="mb-3 movie-content containerDetail">
              <div className="movie-content poster">
                <img className='img' width="360px" height='560px' src={appState.photo} />
              </div>
              <div className="info">
                <h1 className="title">
                  {appState.title}
                </h1>
                <div className="genres">
                </div>
                <p className="overview">{appState.description}</p>
                <div className="cast">
                  <div className="section__header">
                  </div>
                </div>
                <div>
                  Автор: {appState.author}<br/>
                  Режиссер: {appState.director}<br/>
                  Возрастное ограничение: {appState.age}<br/>
                  Длительность: {appState.duration} мин   
                </div>
              </div>
            </div>
            <h1 className='seansy'>Все сеансы на завтра</h1>
            <TTime name={appState} />
          </>
        )
      }
      <Footer/>
        </>
    );
}

export default TDetailsPage;