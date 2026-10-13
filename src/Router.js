import { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeComponent from './components/HomeComponent'
import NotFoundComponent from './components/NotFoundComponent'
import TablaMultiplicar from './components/TablaMultiplicar'
import { useParams } from 'react-router-dom'

export default class Router extends Component {
    render() {
        function TablaMultiplicarElement(){
            let {minumero}= useParams();
            return (<TablaMultiplicar numero={minumero}/>);
        }
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomeComponent/>}/>
                    <Route path="/tabla/:minumero" element={<TablaMultiplicarElement/>}/>

                    <Route path="*" element={<NotFoundComponent/>}/>
                </Routes>

            </BrowserRouter>
        )
    }
}
