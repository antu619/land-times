import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='text-center mt-5'>
            <Link to="/"><h2 className='text-7xl font-news'>The Land Times</h2></Link>
            <p className='font-poppins text-gray-500 my-3'>Journalism Without Fear or Favour</p>
            <p className='font-poppins text-lg text-gray-500'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;