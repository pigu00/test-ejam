import { ProductReviews } from "./ProductReviews";
import Rating from '@mui/material/Rating';
import CheckIcon from '@mui/icons-material/Check';
import { CardProduct } from "./CardProduct";

export const Card = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="d-flex flex-column">
                            <img src="/image4.png" alt="imagen card" className="img-fluid" />
                            
                        </div>
                        <div>
                            <ProductReviews></ProductReviews>
                        </div>
                    </div>
                    <CardProduct></CardProduct>
                </div>
            </div>
        </div>
    );
};

