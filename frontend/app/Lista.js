import React from 'react';
import axios from 'axios';

export default class Lista extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pessoas: []
        }
    }
    componentDidMount(){
        //Faz a requisição GET do backend para pegar a lista de pessoas
        axios.get('http://localhost:5000/pessoas', this.state).then((resposta) => {
            //Seta as pessoas recebidas do backend para o estado do componente Lista
            this.setState({ pessoas: resposta.data.pessoas });
        });
    }
    render() {
        return (
            <div className='row'>
                <div className="col-sm-12">
                    <h1 style={{ textAlign: 'center' }}>Lista de pessoas</h1>
                    <div className="col-sm-12" style={{ backgroundColor: '#fff' }}>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Telefone</th>
                                    <th>Sexo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.pessoas.length > 0 ? this.state.pessoas.map((pessoa, index) => {
                                    //Transforma json em jsx
                                    return (
                                        <tr key={index}>
                                            <td>{pessoa.nome}</td>
                                            <td>{pessoa.telefone}</td>
                                            <td>{pessoa.sexo}</td>
                                        </tr>
                                    )
                                }) : <tr><td colSpan='3'>Não existem registros</td></tr>}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}