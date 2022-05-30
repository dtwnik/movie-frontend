import React from 'react';
import Header from '../component/Header';
import '../css/MainPage.css'
import Cinema from '../component/Cinema';
import Theatr from '../component/Theatr';
import Slider from '../component/Slider';
import Soon from '../component/Soon';
import Newsletter from '../component/Newsletter';
import Footer from '../component/Footer';


const MainPage = () => {

    return (
        <div>
            <Header/>
            <Slider/>
            <Cinema/>
            <Theatr/>
            <Soon/>
            <Newsletter/>
            <Footer/>
        </div>
    );
}

export default MainPage;