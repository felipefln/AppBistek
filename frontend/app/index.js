import React from 'react';
import ReactDOM from 'react-dom'

import './style.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import Cadastro from './Cadastro';
import Lista from './Lista';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: ''
        }
    }
    render() {
        return (
            <div className='row'>
                <div className='row'>
                    <div className="col-sm-3" style={{ float: 'none', margin: '0 auto' }}>
                        {this.state.view == 'cadastro' ? <Cadastro onSave={() => this.setState({ view: 'lista' })}/> : <Lista />}
                    </div>
                </div>
                <div className='row' style={{ marginTop: '10px' }}>
                    <div className="col-sm-3" style={{ float: 'none', margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
                        <button className='btn btn-link' onClick={() => this.setState({ view: 'lista' })}> Lista </button>
                        <button className='btn btn-link' onClick={() => this.setState({ view: 'cadastro' })}> Cadastro </button>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));