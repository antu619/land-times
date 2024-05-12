import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({singleNews}) => {
    const {title, image_url, details, _id} = singleNews;
    return (
        <div className='border-2 rounded p-5'>
            <div>
            <h4 className='text-poppins text-xl font-semibold mb-5'>{title}</h4>
            <img className='w-full' src={image_url} alt="" />
            <div className='mt-5 font-poppins'>
            {
                details.length > 200 ?
                <p>
                    {details.slice(0, 200)}... <Link 
                    to={`/news/${_id}`}
                    className='btn-link text-cyan-600 font-semibold'>Read More</Link>
                </p>
                :
                <p>{details}</p>
            }
            </div>
            </div>
        </div>
    );
};

export default NewsCard;