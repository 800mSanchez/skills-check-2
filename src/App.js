import React from 'react';
import axios from 'axios';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          inventory: []
        }
     this.getProduct = this.getProduct.bind(this);
      }
      componentDidMount() {
        this.getProduct();
      }
      getProduct() {
        axios.get('/api/inventory')
          .then(res => this.setState({ inventory: res.data }))
      }
    
    render(){
        return (
            <div>
                <Header />
                <Dashboard />
                <Form />
            </div>
        )
    }
}

export default App;