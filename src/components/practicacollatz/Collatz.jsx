import { Component } from 'react'

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

    componentDidUpdate = (prevProps) => {
        if (prevProps.numero != this.props.numero) {
            this.generarTabla();
        }
    }



    render() {
        return (
            <div>
                <h1>Collatz Conjecture</h1>

                <h3 style={{ color: "fuchsia" }}>
                    <ul className="list-group">
                        {
                            this.state.tabla.map((num, index) => {
                                return (
                                    <li className="list-group-item" key={index}>
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
