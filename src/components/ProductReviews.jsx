import React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import VerifiedIcon from '@mui/icons-material/Verified';

export const ProductReviews = () => {
  return (
    <div className='reviews'>
      <div className='review-content'>
        <img src="/avatar.png" alt="avatar" className='avatar' />
        <div className='row'>
          <div className='col-md-12'>
            <div className='rating'>
              <div className='d-flex align-items-center mb-2'>
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
              </div>
              <div className='verified-container'>
                <h4 className='username mb-0'>Ken T.</h4>
                <div className='d-flex align-items-center'>
                  <VerifiedIcon className='verified-icon' />
                  <p className='verified-text mb-0 ml-1'>Verified Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className='review-text'>“As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”</p>
    </div>
  );
};
