import React from 'react';
import Header from '../shared/Header/Header';
import RightSideNav from '../shared/RightSideNav/RightSideNav';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar';
import { FaArrowLeft } from 'react-icons/fa6';
import firstImg from '../../assets/1.png'
import secondImg from '../../assets/2.png'
import thirdImg from '../../assets/3.png'
import { CiCalendar } from 'react-icons/ci';


const News = () => {
    const {id} = useParams();
    const news = useLoaderData();


    const singleNews = news.find(singleNews => singleNews._id === id);

    const {image_url, title, details} = singleNews;

    return (
        <div>
            <Header />
            <Navbar />
            <div className='grid md:grid-cols-4 gap-6'>
                <div className='col-span-3 mt-5'>
                <h3 className='text-xl font-poppins font-bold'>News Details</h3>
                <div className='border p-5 rounded-lg mt-5'>
                    <img className='w-full' src={image_url} alt="" />
                    <h4 className='font-poppins text-xl font-semibold my-5'>{title}</h4>
                    <p className='font-poppins text-gray-500'>{details}</p>
                    <button className='btn bg-cyan-600 hover:bg-cyan-600 text-white mt-5'><Link to="/" className='flex items-center gap-2'><FaArrowLeft />View All News</Link></button>
                </div>
                    {/* Bottom News */}
                    <h3 className='text-xl font-poppins font-bold mt-10'>Editors Insight</h3>
                    <div className='flex justify-between gap-6 mt-5'>
                <div>
                    <img src={firstImg} alt="" />
                    <h3 className='font-poppins font-semibold mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, est!</h3>
                    <div className='flex items-center font-poppins my-3'>
                        <p className='font-bold mr-5'>Social</p>
                        <CiCalendar className='text-xl text-gray-400 mr-1' />
                        <p className='text-gray-400'>Jan 7, 2024</p>
                    </div>
                </div>
                <div>
                    <img src={secondImg} alt="" />
                    <h3 className='font-poppins font-semibold mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, est!</h3>
                    <div className='flex items-center font-poppins my-3'>
                        <p className='font-bold mr-5'>Social</p>
                        <CiCalendar className='text-xl text-gray-400 mr-1' />
                        <p className='text-gray-400'>Jan 7, 2024</p>
                    </div>
                </div>
                <div>
                    <img src={thirdImg} alt="" />
                    <h3 className='font-poppins font-semibold mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, est!</h3>
                    <div className='flex items-center font-poppins my-3'>
                        <p className='font-bold mr-5'>Sports</p>
                        <CiCalendar className='text-xl text-gray-400 mr-1' />
                        <p className='text-gray-400'>Jan 7, 2024</p>
                    </div>
                </div>
            </div>
                </div>
                <div>
                    <RightSideNav />
                </div>
            </div>
        </div>
    );
};

export default News;