import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MenuCollatz extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <NavLink to ="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/collatz/15">Tabla Collatz</NavLink>
                    </li>
                    <li>
                        <NavLink to="/collatz/3">Tabla Collatz</NavLink>
                    </li>
                    <li>
                        <NavLink to="/collatz/10">Tabla Collatz</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}
