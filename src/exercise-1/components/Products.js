import React from 'react';
import productdata from '../../exercise-2/data.json';
import { Link } from 'react-router-dom';
class Products extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          products: [],
      }
    }
    componentDidMount() {
        this.setState({
          products: productdata,
        })
    }

    render() {
      return <div style={{paddingLeft:'100px'}}>
        <h2>All Products:</h2>
        <ul>
          {Object.keys(this.state.products).map(
            item =>
            <li style={{listStyle:'none',fontSize:'30px'}} key={item}>
              <Link 
               to={{pathname:`/products/${this.state.products[item].id}`, state:{product:this.state.products[item]}}} 
               style={{textDecoration:"none",paddingLeft: '5px', color: 'red'}}>
               {item}
              </Link>
            </li>
          )}
        </ul>       
      </div>;
    }
}

export default Products;

