import React from 'react';
import '../../App.css';
import Cards from '../Features/Cards';
import Footer from '../Footer/Footer';
import HomeSection from '../HomeSection/home';
import JoinUs from '../JoinUs/JoinUs';
import Navbar from '../Navgationbar';
import Team from '../Team/Team';

function Home () {
    return (
        <>
            <Navbar/>
            <HomeSection/>
            <Cards/>
            <JoinUs/>
            <Team/>
            <Footer/>
        </>
    )
}

export default Home;
