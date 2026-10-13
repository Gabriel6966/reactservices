import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {

    state = {
        tabla: [],
    }


    generarTabla = () => {
        let aux = []
        let numero = parseInt(this.props.numero);
        for (let i = 1; i <= 10; i++) {
            let respuesta = numero * i;
            aux.push(respuesta);
        }
        this.setState({ tabla: aux });
    }

    componentDidMount = () => {
        this.generarTabla();
    }



    render() {
        return (
            <div>
                <h1>Tabla Multiplicar Routing</h1>

                <h3 style={{ color: "blue" }}>

                    <ul>
                        {
                            this.state.tabla.map((num, index) => {
                                return (<li key={index}>
                                    {num}
                                </li>)
                                
                        })
                        }
                    </ul>


                </h3>

            </div>
        )
    }
}
