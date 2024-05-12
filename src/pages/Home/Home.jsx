import React from 'react';
import Header from '../shared/Header/Header';
import Navbar from '../shared/Navbar/Navbar';
import LeftSideNav from '../shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../shared/RightSideNav/RightSideNav';
import Highlights from './Highlights';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';

const Home = () => {
    const news = useLoaderData();
    console.log(news)
    return (
        <div className=''>
            <Header/>
            <Highlights />
            <Navbar/>
            <div className='grid md:grid-cols-4 grid-cols-1 gap-6'>
                <div>
                    <LeftSideNav />
                </div>
                {/* Home News Section */}
                <div className='md:col-span-2 mt-5'>
                <h3 className='text-xl font-poppins font-bold'>Land Times News</h3>
                    <div className='grid gap-5 mt-[18.4px]'>
                        {
                            news.map(singleNews => <NewsCard key={singleNews.id} singleNews={singleNews} />)
                        }
                    </div>
                </div>
                <div>
                    <RightSideNav />
                </div>
            </div>
        </div>
    );
};

export default Home;