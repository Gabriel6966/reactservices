import React, { Component } from 'react'
import Global from '../../Global'
import axios from 'axios'

export default class CochesComponent extends Component {

    componentDidMount=()=>{
        this.loadCoches()
    }

    state={
        coche: {},
    }

    componentDidUpdate = (oldProps) => {
        console.log("Current: " + this.props.idCoche)
        console.log("Old: " + oldProps.idCoche)
        if(oldProps.idCoche != this.props.idCoche){
            this.loadCoches()
        }

    }

    
    loadCoches=()=>{
        let id = this.props.idCoche
        let request = "api/Coches/FindCoche/" + id

        axios.get(Global.urlApiCoches + request).then((response)=>{
            console.log("Leyendo coches")
            console.log(response.data)
            this.setState({
                coche: response.data
            })
        })
    }
  
  
    render() {
    return (
      <div>
        <h1>CochesComponent</h1>
        <h2>ID Coches</h2>
        <ul>
           <li>
            {this.state.coche.marca} Modelo: {this.state.coche.modelo}
           </li>
        </ul>
      </div>
    )
  }
}
