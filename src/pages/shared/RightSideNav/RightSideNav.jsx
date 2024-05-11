import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter, FaXing } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import swimmingImg from '../../../assets/qZone1.png';
import classImg from '../../../assets/qZone2.png';
import playImg from '../../../assets/qZone3.png';
import adImg from '../../../assets/bg.png';

const RightSideNav = () => {
    return (
        <div>
            <div className='mt-5'>
                <h3 className='text-xl font-poppins font-bold'>Login With</h3>
                <button className='btn text-google hover:bg-google hover:border-0 btn-outline w-full mt-5 mb-2'><FaGoogle />Login With Google</button>
                <button className='btn btn-outline w-full'><FaGithub />Login With GitHub</button>
            </div>
            <div className='mt-10'>
            <h3 className='text-xl font-poppins font-bold'>Find Us On</h3>
            <div className='border-2 rounded text-center mt-5'>
                <div className='py-4'><Link className='flex items-center justify-center gap-2 font-bold text-[#1877F2]' to='https://www.facebook.com/' target='_blank'><FaFacebook className='text-4xl p-2 rounded-full bg-base-200' />Facebook</Link></div>

                <div className='border-y-2 py-4'><Link className='flex items-center justify-center gap-2 font-bold text-[#1DA1F2]' to='https://www.twitter.com/' target='_blank'><FaTwitter className='text-4xl p-2 rounded-full bg-base-200' />Twitter</Link></div>

                <div className='py-4'><Link className='flex items-center justify-center gap-2 font-bold text-[#126567]' to='https://www.instagram.com/' target='_blank'><FaXing className='text-4xl p-2 rounded-full bg-base-200' />Xing</Link></div>
            </div>
            </div>
            <div className='bg-base-200 mt-5'>
            <h3 className='text-xl font-poppins font-bold p-5'>Login With</h3>
                <div className='grid justify-center gap-5 pb-5'>
                    <img src={swimmingImg} alt="" />
                    <img src={classImg} alt="" />
                    <img src={playImg} alt="" />
                </div>
            </div>
            <div className='relative mt-5'>
                <img src={adImg} alt="" />
                <div className='absolute top-14 text-white text-ceneter pr-1'>
                <h3 className='text-3xl font-poppins font-bold p-5 text-center'>Create an Amazing Newspaper</h3>
                <p className='text-center mb-8'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more. Discover thousands of options, easy to customize layouts, one-click to import demo and much more</p>
                <div className='w-full flex justify-center '>
                    <button className='px-5 py-3 bg-cyan-600 text-white'>Larn More</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;