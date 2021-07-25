import React, { Component } from 'react';
import "./estilo.css";
import { ReactComponent as DeleteSVG } from "../../assets/img/delete.svg";
class ListaDeCategorias extends Component {
    constructor() {
        super();
        this.state = { categorias: [], nomeCategoria:'' }
        this._novasCategorias = this._novasCategorias.bind(this)
    }

    componentDidMount() {
        this.props.categorias.inscrever(this._novasCategorias);
    }

    componentWillUnmount(){
        this.props.notas.desinscrever(this._novasCategorias);
      }

    _novasCategorias(categorias) {
        this.setState({ ...this.state, categorias })
    }

    _handleEventoInput(e) {
        if (e.key === "Enter") {
            let valorCategoria = e.target.value;
            this.props.adicionarCategoria(valorCategoria);
            this.setState({nomeCategoria: ''}); 
        }
    }

    _handleClick(event){
        this.props.adicionarCategoria(this.state.nomeCategoria);
        this.setState({nomeCategoria: ''}); 
    }

    _handleChange(event){
        this.setState({nomeCategoria: event.target.value}); 
    }

    render() {
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {this.state.categorias.map((categoria, index) => {
                        return <li key={index} className="lista-categorias_item">{categoria}<DeleteSVG /></li>;
                    })}
                </ul>
                <input 
                    type="text" 
                    className="lista-categorias_input" 
                    placeholder="Adicionar Categoria" 
                    onChange = {this._handleChange.bind(this)}
                    onKeyUp = {this._handleEventoInput.bind(this)}
                    value = {this.state.nomeCategoria}
                />

                <button onClick={this._handleClick.bind(this)}>Adicionar Categoria</button>
            </section>
        )
    }
}

export default ListaDeCategorias;