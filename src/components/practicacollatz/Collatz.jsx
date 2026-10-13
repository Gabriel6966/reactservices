import  { Component } from 'react'

export default class Collatz extends Component {

    state = {
        tabla: [],
    }

    generarTabla = () => {
        let aux = []
        let numero = parseInt(this.props.numero);
        while (numero !== 1) {
            if (numero % 2 == 0) {
                numero = numero / 2;
                aux.push(numero);
            } else {
                numero = numero * 3 + 1;
                aux.push(numero);
            }
        }
        this.setState({
            tabla: aux
        })
    }

    componentDidMount = () => {
        this.generarTabla();
    }



    render() {
        return (
            <div>
                <h1>Collatz Conjecture</h1>

                <h3 style={{ color: "fuchsia" }}>
                    <ul>
                        {
                            this.state.tabla.map((num, index) => {
                                return (
                                    <li key={index}>
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
