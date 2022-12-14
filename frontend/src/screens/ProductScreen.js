import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import { useSelector } from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function ProductScreen(props) {
  const productDetails = useSelector( state => state.productDetails);
  const { loading , error, product } = productDetails;
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
        <Link to="/">Retour</Link>
      <div className="row Top">
        <div className="col-2">
          <img className="large" src={product.image} alt={product.name}></img>
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>
              <Rating
                rating={product.rating}
                numreviews={product.numreviews}
              ></Rating>
            </li>
            <li>Pirce : {product.price +" DA"} </li>
            <li>
              Description:
              <p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price</div>
                  <div className="price">{product.price  +" DA"}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Status</div>
                  <div>
                    {product.countinStock > 0 ? (
                      <span className="success">In Stock</span>
                    ) : (
                      <span className="error">Unavailable</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button className="primary block">Add to Cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
      )}
    </div>
    
  );
}
