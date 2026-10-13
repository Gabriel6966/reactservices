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
                        <a href="/tabla/21">Tabla Multiplicar</a>
                    </li>
                    <li>
                        <a href="/tabla/14">Tabla Multiplicar</a>
                    </li>
                    <li>
                        <a href="/tabla/7">Tabla Multiplicar</a>
                    </li>
                </ul>
            </div>
        )
    }
}
