import React, { Component } from 'react'

import axios from 'axios';
import Global from '../Global';

export default class ComponentServiceSuppliers extends Component {


    cajaID = React.createRef();

    findSupplier = (event) => {

        event.preventDefault();
        let request = "Suppliers";

        let id = parseInt(this.cajaID.current.value);

        //CARGAMOS LOS DATOS DE SUPPLIERS DE API 

        axios.get(Global.urlNorthwind + request).then((response) => {

            //BUSCAMOS DENTRO DEL STATE EL DATO CON ID 

            for (let elem of response.data.value) {

                if (elem.SupplierID == id) {

                    //LO TENEMOS!!! 

                    this.setState({ proveedor: elem })

                    break;

                }

            }

        })

    }

    state = {

        suppliers: [], proveedor: null

    }

    loadSuppliers = () => {

        console.log("antes");
        let request = "Suppliers";

        axios.get(Global.urlNorthwind + request).then((response) => {

            console.log("Leyendo...");

            this.setState({

                suppliers: response.data.value

            })

        })

        console.log("despues");

    }

    componentDidMount = () => {

        this.loadSuppliers();

    }

    render() {

        return (

            <div>

                <h1>Service Api Suppliers</h1>

                <form>

                    <label>Id Proveedor: </label>

                    <input type="text" ref={this.cajaID} />

                    <button onClick={this.findSupplier}>

                        Buscar

                    </button>

                </form>

                {

                    this.state.proveedor &&

                    (<div>

                        <h2>Contact: {this.state.proveedor.ContactName}</h2>

                        <h2>Title: {this.state.proveedor.ContactTitle}</h2>

                        <h2>Dirección: {this.state.proveedor.Address}</h2>

                    </div>)

                }

                <ul>

                    {

                        this.state.suppliers.map((dato, index) => {

                            return (

                                <li key={index}>

                                    Id: {dato.SupplierID},

                                    Name: {dato.ContactName}

                                </li>)

                        })

                    }

                </ul>

            </div>

        )

    }

} 