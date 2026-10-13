import React, { Component } from 'react'

export default class MenuCollatz extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/collatz/15">Tabla Collatz</a>
                    </li>
                    <li>
                        <a href="/collatz/3">Tabla Collatz</a>
                    </li>
                    <li>
                        <a href="/collatz/10">Tabla Collatz</a>
                    </li>
                </ul>
            </div>
        )
    }
}
