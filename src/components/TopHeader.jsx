import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import VerifiedIcon from '@mui/icons-material/Verified';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { useMediaQuery } from 'react-responsive';

export const TopHeader = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  if (isMobile) {
    return (
      <div className="top-header d-flex justify-content-center">
        <div className="scroll-container">
          <Slider {...settings}>
            <div className="header-text d-flex align-items-center">
              <VerifiedIcon className='verified-icon-header mr-2' />
              <p>30-DAY SATISFACTION GUARANTEE</p>
            </div>
            <div className="header-text d-flex align-items-center">
              <LocalShippingIcon className='shipping-icon mr-2' />
              <p>Free delivery on orders over $40.00</p>
            </div>
            <div className="header-text d-flex align-items-center">
              <FavoriteIcon className='favorite-icon mr-2' />
              <p>50.000+ HAPPY CUSTOMERS</p>
            </div>
            <div className="header-text d-flex align-items-center">
              <CurrencyExchangeIcon className='currency-icon mr-2' />
              <p>100% Money Back Guarantee</p>
            </div>
          </Slider>
        </div>
      </div>
    );
  } else {
    return (
      <div className="top-header">
        <div className="scroll-container">
          <div className="scroll-content">
            <div className="header-text d-flex align-items-center">
              <VerifiedIcon className='verified-icon-header mr-2' />
              <p>30-DAY SATISFACTION GUARANTEE</p>
            </div>
            <div className="header-text d-flex align-items-center">
              <LocalShippingIcon className='shipping-icon mr-2' />
              <p>Free delivery on orders over $40.00</p>
            </div>
            <div className="header-text d-flex align-items-center">
              <FavoriteIcon className='favorite-icon mr-2' />
              <p>50.000+ HAPPY CUSTOMERS</p>
            </div>
            <div className="header-text d-flex align-items-center">
              <CurrencyExchangeIcon className='currency-icon mr-2' />
              <p>100% Money Back Guarantee</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};


