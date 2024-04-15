import React from 'react';
import { ProductReviews } from "./ProductReviews";
import CheckIcon from '@mui/icons-material/Check';
import Rating from '@mui/material/Rating';

export const CardProduct = () => {
  return (

    <div className="col-md-6">
      <div>
        <h2>
          <span className="card-title">ONE TIME ONLY</span> special price for 6 extra Clarifion for only <span className="price">$14 each</span> ($84.00 total!)
        </h2>
        <div className="row">
          <div className="col-md-3">
            <img src="Group1484578135.png" alt="Clarifion Air Ionizer" className="img-fluid" />
          </div>
          <div className="col-md-9" style={{ marginTop: '20px' }}>
            <div className="row">
              <div className="col-md-12 d-flex justify-content-between ">
                <h4 style={{ display: 'inline-block', marginTop: '10px', marginRight: '20px' }}>Clarifion Air Ionizer</h4>
                <h4 style={{ display: 'inline-block' }}><del className="price">$180</del> <span className="price">$84 </span> </h4>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="stock-info">
                  <div className="stock-dot"></div>
                  <span>12 left in Stock</span>
                </div>
                <div className='rating'>
                  <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                </div>
                <p className="description">
                  Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ul className="checklist">
          <li>
            <CheckIcon className="check-icon" />
            <span>Negative Ion Technology may help with allergens</span>
          </li>
          <li>
            <CheckIcon className="check-icon" />
            <span>Designed for air rejuvenation</span>
          </li>
          <li>
            <CheckIcon className="check-icon" />
            <span>Perfect for every room in all types of places.</span>
          </li>
        </ul>
      </div>
      <img src="/frameDescuento.png" alt="descuento" className="img-fluid" />
      <img src="/Frameboton.png" alt="boton" className="img-fluid" />
      <img src="/frameSello.png" alt="sello" className="img-fluid" />

    </div>
  );
}
