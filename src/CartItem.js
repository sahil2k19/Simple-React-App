import React from "react";


// our class {CartIems} now inherit feautures from {Component} class of React
class CartItem extends React.Component{

    constructor(){
        super();
        this.state = {
            price:999,
            title:'Mobile phone', 
            qty:1,
            img:''
        }
    }
    increaseQuantity = ()=>{
        console.log('this', this.state)
    }

    render(){
        const {price,title, qty} = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img alt=""  style={styles.image} />
                </div>
                <div className="right-block">
                    <div >{title}</div>
                    <div style={{color:"grey"}}>Rs {price}</div>
                    <div style={{color:"grey"}}>Qty: {qty}</div>
                    <div className="cart-item-action">
                        {/* buttons */}
                        <img onClick={this.increaseQuantity} alt = "increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/7171/7171790.png"/>
                        <img alt = "decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992683.png"/>
                        <img alt = "delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"/>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'lightGrey',
    }
}

export default CartItem