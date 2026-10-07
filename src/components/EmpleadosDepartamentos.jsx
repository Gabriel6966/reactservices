import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';

export default class EmpleadosDepartamentos extends Component {

    cajaDepartamento = React.createRef();
    urlEmpleado = Global.urlApiEmpleados

    findEmpleados = (event) => {
        event.preventDefault();
        let idDepartamento = this.cajaDepartamento.current.value;
        let request = "api/empleados/empleadosdepartamento/" + idDepartamento;

        axios.get(this.urlEmpleado + request).then((response) => {
            console.log("leyendo empleados");
            this.setState({
                empleados: response.data
            })
        })
    }
    state = {
        empleados: [],
    }



    render() {
        return (
            <div>
                <h1>Empleados Departamentos</h1>

                <form>
                    <label>Introduzca id de departamento: </label>
                    <input type='text' ref={this.cajaDepartamento} />
                    <button onClick={this.findEmpleados}>
                        Buscar empleados
                    </button>
                </form>
                <ul>
                    {
                        this.state.empleados.map((emp, index) => {
                            return (<li key={index}>
                                {emp.apellido}, Oficio: {emp.oficio}
                            </li>)
                        })
                    }
                </ul>

            </div>
        )
    }
}
