import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';

export default class EmpleadosDepartamentos extends Component {

    selectDepartamento = React.createRef();
    urlEmpleado = Global.urlApiEmpleados
    urlDepartamentos=Global.urlApiDepartamento;

    findEmpleados = (event) => {
        event.preventDefault();
        let idDepartamento = this.selectDepartamento.current.value;
        let request = "api/empleados/empleadosdepartamento/" + idDepartamento;

        axios.get(this.urlEmpleado + request).then((response) => {
            console.log("leyendo empleados");
            this.setState({
                empleados: response.data
            })
        })
    }

    loadDepartamentos=()=>{
        let request="webresources/departamentos";
        axios.get(this.urlDepartamentos + request).then((response)=>{
            console.log("Leyendo departamentos")
            this.setState({
                departamentos: response.data
            })
        })
    }

    componentDidMount=()=>{
        this.loadDepartamentos();
    }




    state = {
        empleados: [],
        departamentos:[]
    }



    render() {
        return (
            <div>
                <h1>Empleados Departamentos</h1>

                <form>
                    <label>Introduzca id de departamento: </label>
                    <select ref={this.selectDepartamento}>
                        {
                            this.state.departamentos.map((dept,index)=>{
                                return (<option key={index} value={dept.numero}>
                                    {dept.nombre}
                                </option>)
                            })
                        }
                    </select>
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
