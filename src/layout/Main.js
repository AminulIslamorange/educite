import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Foooter/Footer';
import Header from '../components/Header/Header';

const Main = () => {
    return (
        <div>
            <Header/>
            <Outlet></Outlet>
            <Footer/>
            
        </div>
    );
};

export default Main;