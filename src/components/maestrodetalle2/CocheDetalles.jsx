import React, { Component } from 'react'
import axios from 'axios';
import Global from '../../Global';
import CochesComponent from './CochesComponent';

export default class CocheDetalles extends Component {

    selectCoche = React.createRef();
    urlCoches = Global.urlApiCoches;


    cargarCoches = () => {
        let request = "/api/Coches";
        axios.get(this.urlCoches + request).then((response) => {
            console.log("leyendo coches")
            this.setState({
                coches: response.data
            })
        })
    }

    componentDidMount = () => {
        this.cargarCoches();
    }

    buscarCoches = (event) => {
        event.preventDefault();
        let id = this.selectCoche.current.value;

        this.setState({
            idCoche: id
        })
    }



    state = {
        coches: [],
        idCoche: []
    }



    render() {
        return (
            <div>
                <h1>CocheDetalles</h1>
                <form>
                    <label>Seleccione el id del coche</label>
                    <select ref={this.selectCoche}>
                        {
                            this.state.coches.map((coche, index) => {
                                return (
                                    <option key={index} value={coche.idCoche}>
                                        {coche.modelo}
                                    </option>
                                )
                            })
                        }
                    </select>
                    <button onClick={this.buscarCoches}>
                        Buscar coche
                    </button>
                </form>

                {
                    this.state.idCoche !=0 &&
                    (<CochesComponent idCoche={this.state.idCoche}/>)
                }
            </div>
        )
    }
}
