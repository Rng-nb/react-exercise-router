import React from 'react';

class ProductDetail extends React.Component {
    constructor(props) {
      super(props);
      this.state={
          product:{},
      }
    }
    componentDidMount() {
        this.setState({
          product: this.props.location.state.product,
        })
    }
    render() {
        return <div style={{paddingLeft:'100px'}}>
            <h2>Product Details:</h2>
            <h2>Name:{this.state.product.name}</h2>
            <h2>Id:{this.state.product.id}</h2>
            <h2>Price:{this.state.product.price}</h2>
            <h2>Quantity:{this.state.product.quantity}</h2>
            <h2>Desc:{this.state.product.desc}</h2>
            <h2>URL:{`/products/${this.state.product.id}`}</h2>
        </div>;
    }
}
export default ProductDetail;