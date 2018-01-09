import React from 'react';
import axios from 'axios';

export default class Cadastro extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            nome: '',
            telefone: '',
            sexo: ''
        }
    }
    salvar(){
        //Faz a requisição POST do backend para salvar a pessoa que está no estado
        axios.post('http://localhost:5000/pessoa/add', this.state).then((resposta) => {
            //Volta para a visão de lista
            this.props.onSave();
        });
    }
    limpar(){
        //Limpa o estado
        this.setState({
            nome: '',
            telefone: '',
            sexo: ''
        });
    }
    render(){
        return (
            <div className='row'>
                <div className="col-sm-12">
                    <h1 style={{ textAlign: 'center' }}>Cadastro de Pessoa</h1>
                    <div className="col-sm-12" style={{ backgroundColor: '#fff', paddingTop: '15px' }}>
                        <div className="form-group">
                            <label htmlFor="nome">Nome:</label>
                            <input type="text" className="form-control" id="nome" value={this.state.nome} onChange={(e) => this.setState({ nome: e.currentTarget.value })} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="telefone">Telefone:</label>
                            <input type="tel" className="form-control" id="telefone" placeholder="000 0000-0000" value={this.state.telefone} onChange={(e) => this.setState({ telefone: e.currentTarget.value })} />
                        </div>
                        <div className="radio">
                            <label style={{ marginRight: '12px' }}><input type="radio" checked={this.state.sexo=='Masculino'} onChange={() => this.setState({ sexo: 'Masculino' })} />Masculino</label>
                            <label><input type="radio" checked={this.state.sexo=='Feminino'} onChange={() => this.setState({ sexo: 'Feminino' })} />Feminino</label>
                        </div>
                        <div className="form-group">
                            <button style={{ marginRight: '12px' }} className='btn btn-primary' onClick={() => this.salvar()}> Salvar </button>
                            <button className='btn btn-default' onClick={() => this.limpar()}> Limpar </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}