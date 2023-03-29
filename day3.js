import React from "react";
import './day3.css';

function Category(props){
    return(
        <div>
            <p>{props.name} - Rs.{props.price}</p>
        </div>
    )
}

export default class Day3 extends React.Component{
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }
    increase = () =>{
        this.setState({
            count: this.state.count+1
        })
    }
    render(){
        return(
            <div>
            <h1 className="heading">Kaapi kadai !</h1>
            <hr />
            <p className="desc">A coffee a day keeps unproductivity away</p>
            <div className="nav">
            <a href="#">Home</a>
            <a href="#">Menu</a>
            <a href="#">About</a>
            <a href="#">My Orders</a>
            </div>
            <div className="section">
                <div>
                <h3>Beverages</h3>
                <Category name = "Coffee" price = "40" />
                <button onClick={this.increase}>Add to cart</button>
                <Category name = "Tea" price = "35" />
                <button onClick={this.increase}>Add to cart</button>
                <Category name = "Milkshake" price = "60" />
                <button onClick={this.increase}>Add to cart</button>
                </div>
                <div>
                <h3>Pastries</h3>
                <Category name = "Apple pie" price = "100" />
                <button onClick={this.increase}>Add to cart</button>
                <Category name = "Cheese cake" price = "90"/>
                <button onClick={this.increase}>Add to cart</button>
                <Category name = "Caramel custard" price = "150"/>
                <button onClick={this.increase}>Add to cart</button>
                </div>
            </div>
            <div className="cart">
                <h3>Cart</h3>
                <h4>Total = {this.state.count}</h4>
            </div>
            </div>
        )
    }
}