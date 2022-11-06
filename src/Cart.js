import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
  constructor () {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: 'Watch',
          qty: 1,
          img: '',
          id: 1
        },
        {
          price: 999,
          title: 'Mobile Phone',  
          qty: 10,
          img: '',
          id: 2
        },
        {
          price: 999,
          title: 'Laptop',
          qty: 4,
          img: '',
          id: 3
        }
      ]
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  }


// Increasing the quantity
  handleIncreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    // destructuring products
    const { products } = this.state;
    // fetching the index
    const index = products.indexOf(product);
    // increment the qty
    products[index].qty += 1;

    this.setState({
      products
    })
  }


// decreasing the quantity
  handleDecreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    products[index].qty -= 1;

    this.setState({
      products
    })
  }

  // deleting the quantity
  handleDeleteProduct = (id) => {
    const { products } = this.state;
    
    // it conetains the array of product whose id NOT MATCH with the (current id)
    const items = products.filter((item) => item.id !== id); // [{}]

    this.setState({
      products: items
    })
  }


//   rendering 
  render () {
    // destructuring the {products}
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return (
            <CartItem
              product={product}
              key={product.id}
              onIncreaseQuantity={this.handleIncreaseQuantity}
              onDecreaseQuantity={this.handleDecreaseQuantity}
              onDeleteProduct={this.handleDeleteProduct}
            />
          )
        })}
      </div>
    );
  }
}

export default Cart;