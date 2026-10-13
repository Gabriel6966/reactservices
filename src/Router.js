import { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeComponent from './components/HomeComponent'
import NotFoundComponent from './components/NotFoundComponent'
import TablaMultiplicar from './components/TablaMultiplicar'
import MenuCollatz from "./components/practicacollatz/MenuCollatz"
import { useParams } from 'react-router-dom'
import Collatz from './components/practicacollatz/Collatz'

export default class Router extends Component {
    render() {
        function TablaMultiplicarElement(){
            let {minumero}= useParams();
            return (<TablaMultiplicar numero={minumero}/>);
        }
        function CollatzElement(){
            let {minumero}= useParams();
            return(<Collatz numero={minumero}/>);
        }
        return (
            <BrowserRouter>
            <MenuCollatz/>
                <Routes>
                    <Route path="/" element={<HomeComponent/>}/>
                    <Route path="/tabla/:minumero" element={<TablaMultiplicarElement/>}/>
                    <Route path="/collatz/:minumero" element={<CollatzElement/>}/>
                    <Route path="*" element={<NotFoundComponent/>}/>
                </Routes>

            </BrowserRouter>
        )
    }
}
