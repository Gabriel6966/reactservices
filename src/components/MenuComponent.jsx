import React, { Component } from 'react'

export default class MenuComponent extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/tabla">Tabla Multiplicar</a>
                    </li>
                </ul>
            </div>
        )
    }
}
