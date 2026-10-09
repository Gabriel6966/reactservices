import React, { Component } from 'react'
import axios from "axios"
import Global from '../../Global'

export default class EmpleadosComponent extends Component {

    componentDidMount = () => {
        this.loadEmpleados();
    }

    state = {
        empleados:[],
    }

    componentDidUpdate = (oldProps) => {
        console.log("Current: " + this.props.idDepartamento)
        console.log("Old: " + oldProps.idDepartamento)
        if(oldProps.idDepartamento != this.props.idDepartamento){
            this.loadEmpleados()
        }

    }

    loadEmpleados=()=>{
        let id = this.props.idDepartamento
        let request ="api/empleados/empleadosdepartamento/" + id
        axios.get(Global.urlApiEmpleados + request).then((response)=>{
            console.log("Leyendo empleados")
            this.setState({
                empleados: response.data
            })
        })
    }



    render() {
        return (<div>
            <h1>EmpleadosComponent</h1>
            <h2>ID Departamentos: {this.state.texto}</h2>
            <ul>
                {
                    this.state.empleados.map((emp,index)=>{
                        return(
                            <li key={index}>
                                {emp.apellido}, Oficio: {emp.oficio}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
        )
    }
}