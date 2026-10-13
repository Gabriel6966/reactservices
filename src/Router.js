import { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeComponent from './components/HomeComponent'
import NotFoundComponent from './components/NotFoundComponent'
import TablaMultiplicar from './components/TablaMultiplicar'

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomeComponent/>}/>
                    <Route path="/tabla" element={<TablaMultiplicar numero="-1"/>}/>

                    <Route path="*" element={<NotFoundComponent/>}/>
                </Routes>

            </BrowserRouter>
        )
    }
}
