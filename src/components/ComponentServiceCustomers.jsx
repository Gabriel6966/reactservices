import React, { Component } from 'react'

import axios from 'axios'

export default class ComponentServiceCustomers extends Component {

    state = {

        customers: []

    }

    url = "https://services.odata.org/V4/Northwind/Northwind.svc/Customers";

    loadCustomers = () => {

        console.log("Antes del servicio");

        axios.get(this.url).then((response) => {

            console.log("Leyendo servicio");

            //LOS DATOS DEL SERVICIO CON AXIOS SIEMPRE VIENEN  

            //DENTRO DE LA PROPIEDAD data. 

            this.setState({

                customers: response.data.value

            })

        })

        console.log("Despues del servicio");

    }

    componentDidMount = () => {

        this.loadCustomers();

    }

    render() {

        return (

            <div>

                <h1>Service Api Customers</h1>

                <button onClick={this.loadCustomers}>

                    Load customers

                </button>

                {

                    this.state.customers.map((cliente, index) => {

                        return (<h4 key={index}

                            style={{ color: "blue" }}>

                            Contacto: {cliente.ContactName},

                            Título: {cliente.ContactTitle}

                        </h4>

                        )

                    })

                }

            </div>

        )

    }

} 