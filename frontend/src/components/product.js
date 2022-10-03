import React from 'react'
import Rating from './Rating';
export default function product(props) {
    const {product} = props;
    return (
        <div key={product._id} className="card">
                      <a href={`/product.html/${product._id}`}>  
                          <img className="medium" src={product.image} alt="Product"/>
                      </a>
                      <div  className="card-body">
                          <a href="/product"><h2>{product.name}</h2></a>
                          <Rating rating={product.rating} numreviews={product.numreviews}/>
                          <div className="price">{product.price  +" DA"}</div>
                      </div>
                </div>
    )
}
