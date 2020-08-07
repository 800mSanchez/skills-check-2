import React from 'react';
import axios from 'axios';
import Product from '../Product/Product';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.deleteProduct = this.deleteProduct.bind(this);
      }
      deleteProduct(id) {
        axios.delete(`/api/product/${id}`)
          .then(res => this.props.getInventory())
          .catch(err => console.log('delete product axios error', err))
      }

    render(){
        return (
            <div>
                  
          return <Product />
            </div>
        )
    }
}