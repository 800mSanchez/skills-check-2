import React from 'react';
import axios from 'axios';
import Product from '../Product/Product';

export default class Dashboard extends React.Component {
    
    render(){
        return (
            <div>
                Dashboard
                <Product />  
            </div>
        )
    }
}