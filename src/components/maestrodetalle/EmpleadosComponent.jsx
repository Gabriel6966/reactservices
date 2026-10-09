import React, { Component } from 'react'

export default class EmpleadosComponent extends Component {

    componentDidMount = () => {

    }

    state = {
        texto: "",
    }

    componentDidUpdate = (oldProps) => {
        console.log("Current: " + this.props.idDepartamento)
        console.log("Old: " + oldProps.idDepartamento)

    }




    render() {
        return (<div>
            <h1>EmpleadosComponent</h1>
            <h2>ID Departamentos: {this.state.texto}</h2>
        </div>
        )
    }
}