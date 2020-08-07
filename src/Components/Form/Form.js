import React from 'react';
import axios from 'axios';

export default class Form extends React.Component {
    /* constructor(){
        super()
        this.state = {
            name: "",
            price: 0,
            image: ""
        }
    }

    nameInput(text) {
        if (text.length < 50) {
            this.setState({name:text})
        }
    }

    priceInput(val) {
        if (val[0] === '.') {
            val = '0' + val
        } 
        if (isNaN(Number(val))) {
            return
        }
    }

    imageInput(url) {
        let image = new Image();
        img.onload = _ => this.setState({ img: url });
    img.onerror = _ => this.setState({ img: '' });
    img.src = url;
  }
    }

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
      } */


    
    render(){
        return (
            <div className = 'form'>
                <input/>
                <input/>
                <input/> 
                 <div>
                     <buttons>Cancel</buttons>
                     <buttons onClick={_ => this.handleChange()}>Add to Inventory</buttons>
                 </div>
            </div>
        )
    }
}