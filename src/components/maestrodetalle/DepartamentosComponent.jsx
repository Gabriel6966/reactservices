import React, { Component } from 'react'
import axios from 'axios'
import Global from "../../Global";
import EmpleadosComponent from './EmpleadosComponent';

export default class DepartamentosComponent extends Component {
  selectDepartamento = React.createRef();

  urlDepartamentos=Global.urlApiDepartamento;

  state = {
    departamentos: [],
    idDepartamento: 0,

  }

  loadDepartamentos = () => {
    let request = "webresources/departamentos";
    axios.get(this.urlDepartamentos + request).then((response) => {
      console.log("Leyendo departamentos")
      this.setState({
        departamentos: response.data
      })
    })
  }

  componentDidMount=()=>{
        this.loadDepartamentos();
    }

    buscarEmpleados=(event)=>{
      event.preventDefault();

      let id = this.selectDepartamento.current.value;

      this.setState({
        idDepartamento: id
      })


    }

  



  render() {
    return (
      <div>
        <h1>Departamentos Component</h1>
        <form>
          <label>Introduzca id de departamento: </label>
          <select ref={this.selectDepartamento}>
            {
              this.state.departamentos.map((dept, index) => {
                return (<option key={index} value={dept.numero}>
                  {dept.nombre}
                </option>)
              })
            }
          </select>
          <button onClick={this.buscarEmpleados}>
            Buscar empleados
          </button>
        </form>

        {
          this.state.idDepartamento != 0 &&
          (<EmpleadosComponent idDepartamento={this.state.idDepartamento} />)
        }

      </div>


    )
  }
}
