import React from 'react';
import Header from '../shared/Header/Header';
import Navbar from '../shared/Navbar/Navbar';
import LeftSideNav from '../shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../shared/RightSideNav/RightSideNav';

const Home = () => {
    return (
        <div className='border'>
            <Header/>
            <Navbar/>
            <div className='grid md:grid-cols-4 grid-cols-1 gap-6'>
                <div>
                    <LeftSideNav />
                </div>
                <div className='md:col-span-2'>
                    <h3>News Section</h3>
                </div>
                <div>
                    <RightSideNav />
                </div>
            </div>
        </div>
    );
};

export default Home;