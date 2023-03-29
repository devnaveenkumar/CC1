import React from 'react';
import './day2.css';

function Product(props){
    return(
        <div className='product'>
            <h3>Title</h3>
            <img src={props.url} />
            <br />
            <h4>Price: Rs.{props.price}</h4>
            <button>add to cart</button>
        </div>
    )
}

export default function Webpage(){
    return(
        <div>
            <div className='Header'>
            <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="" />
            <a href="#">Home</a> 
            <a href="#">Menu</a>
            <a href="#">About</a>
            </div>
            <h2 className='fp'>Featured products</h2>
            <div className='section'>
            
            <Product price = "300" url = "https://images.philips.com/is/image/PhilipsConsumer/TASH402LF_00-IMS-en_IN?$jpglarge$&wid=1250" />
            <Product price = "799" url = "https://images.philips.com/is/image/PhilipsConsumer/TASH402LF_00-IMS-en_IN?$jpglarge$&wid=1250" />
            <Product price = "999" url = "https://images.philips.com/is/image/PhilipsConsumer/TASH402LF_00-IMS-en_IN?$jpglarge$&wid=1250" />

            </div>
            <div className='Footer'>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">LinkedIn</a>
            </div>
        </div>
    )
}