import React from 'react';
import axios from 'axios';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'

class App extends React.Component {
    
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