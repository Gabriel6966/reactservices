// 1. IMPORTACIONES 

// React -> necesario si utilizamos React.createRef() 

// Component -> porque estamos trabajando con clases 

// axios -> para realizar peticiones a la API 

// Global -> SOLO si el profesor tiene las URLs en Global.js 



import React, { Component } from "react";

import axios from "axios";



// OPCIONAL: 

// import Global from "../Global"; 

export default class MiComponente extends Component {





    // ====================================================== 

    // 3. REFERENCIA AL SELECT 

    // ====================================================== 
    
    // Sirve para saber qué opción ha seleccionado el usuario. 

    // 

    // CAMBIAR selectDato por: 

    // selectOficio 

    // selectDepartamento 

    // selectEspecialidad 

    // selectEquipo 

    // etc. 

    // ====================================================== 



    selectDato = React.createRef();





    // ====================================================== 

    // 4. URL DE LA API 

    // ====================================================== 

    // OPCIÓN A: URL directamente aquí 

    // ====================================================== 



    urlApi = "URL_BASE_API/";





    // ====================================================== 

    // OPCIÓN B: si tenemos Global.js 

    // ====================================================== 

    // urlApi = Global.urlApiEmpleados; 

    // ====================================================== 







    // ====================================================== 

    // 5. STATE 

    // ====================================================== 

    // Normalmente tendremos DOS arrays. 

    // 

    // opciones: 

    //      Los datos que rellenarán el SELECT. 

    // 

    // resultados: 

    //      Los datos que aparecerán después de buscar. 

    // 

    // CAMBIAR nombres según el ejercicio. 

    // 

    // Ejemplo empleados/oficios: 

    // 

    // state = { 

    //     oficios: [], 

    //     empleados: [] 

    // } 

    // 

    // Ejemplo departamentos/empleados: 

    // 

    // state = { 

    //     departamentos: [], 

    //     empleados: [] 

    // } 

    // ====================================================== 



    state = {

        opciones: [],

        resultados: []

    };





    // ====================================================== 

    // 6. CARGAR DATOS PARA EL SELECT 

    // ====================================================== 

    // Este método normalmente será llamado automáticamente 

    // desde componentDidMount(). 

    // 

    // CAMBIAR: 

    // loadOpciones -> loadOficios / loadDepartamentos... 

    // ENDPOINT_OPCIONES -> endpoint real. 

    // ====================================================== 



    loadOpciones = () => {



        let request = "ENDPOINT_OPCIONES";



        axios.get(this.urlApi + request).then((response) => {





            // ================================================== 

            // CASO A: 

            // LA API YA DEVUELVE EXACTAMENTE EL ARRAY 

            // QUE QUEREMOS METER EN EL SELECT. 

            // ================================================== 

            // 

            // Ejemplo: 

            // 

            // response.data = 

            // [ 

            //    { numero: 10, nombre: "VENTAS" }, 

            //    { numero: 20, nombre: "INFORMATICA" } 

            // ] 

            // 

            // Entonces guardamos directamente: 

            // ================================================== 



            this.setState({

                opciones: response.data

            });





            // ================================================== 

            // CASO B: 

            // QUEREMOS SACAR UNA PROPIEDAD DE MUCHOS OBJETOS 

            // Y ELIMINAR REPETIDOS. 

            // 

            // ESTE ES EL CASO EMPLEADOS -> OFICIOS. 

            // ================================================== 

            // 

            // Ejemplo: 

            // 

            // response.data = 

            // [ 

            //     { apellido: "A", oficio: "VENDEDOR" }, 

            //     { apellido: "B", oficio: "VENDEDOR" }, 

            //     { apellido: "C", oficio: "ANALISTA" } 

            // ] 

            // 

            // Queremos: 

            // 

            // ["VENDEDOR", "ANALISTA"] 

            // 

            // USARÍAMOS: 

            // ================================================== 



            /* 

            let aux = [ 

                ...new Set( 

                    response.data.map(elemento => elemento.oficio) 

                ) 

            ]; 

  

            this.setState({ 

                opciones: aux 

            }); 

            */



        });

    };





    // ====================================================== 

    // 7. BUSCAR RESULTADOS SEGÚN EL SELECT 

    // ====================================================== 

    // Se ejecutará cuando el usuario pulse el botón. 

    // ====================================================== 



    buscarResultados = (event) => {



        // Evita que el formulario recargue la página. 

        event.preventDefault();





        // ================================================== 

        // RECUPERAMOS EL VALUE DEL SELECT 

        // ================================================== 



        let datoSeleccionado =

            this.selectDato.current.value;





        // Podemos comprobarlo: 

        console.log(

            "Seleccionado: " + datoSeleccionado

        );





        // ================================================== 

        // CREAMOS EL ENDPOINT DINÁMICO 

        // ================================================== 

        // 

        // Ejemplo: 

        // 

        // datoSeleccionado = "VENDEDOR" 

        // 

        // request = 

        // "api/empleados/empleadosoficio/VENDEDOR" 

        // ================================================== 



        let request =

            "ENDPOINT_BUSQUEDA/" + datoSeleccionado;





        // ================================================== 

        // SEGUNDA PETICIÓN 

        // ================================================== 



        axios.get(this.urlApi + request).then((response) => {



            // Guardamos los resultados recibidos. 



            this.setState({

                resultados: response.data

            });



        });

    };





    // ====================================================== 

    // 8. COMPONENT DID MOUNT 

    // ====================================================== 

    // Si el enunciado dice: 

    // 

    // "AL INICIAR EL COMPONENTE..." 

    // 

    // PIENSA AUTOMÁTICAMENTE EN componentDidMount. 

    // 

    // Aquí cargamos los datos iniciales del select. 

    // ====================================================== 



    componentDidMount = () => {



        this.loadOpciones();



    };





    // ====================================================== 

    // 9. RENDER 

    // ====================================================== 



    render() {



        return (

            <div>



                <h1>TITULO DEL EJERCICIO</h1>





                {/* ========================================= 

                    FORMULARIO + SELECT 

                ========================================== */}



                <form>



                    <label>

                        Seleccione una opción:

                    </label>





                    <select ref={this.selectDato}>





                        {/* ================================== 

                            CASO 1: 

                            EL ARRAY CONTIENE STRINGS 

                             

                            Ejemplo: 

                             

                            opciones = 

                            [ 

                              "VENDEDOR", 

                              "ANALISTA", 

                              "DIRECTOR" 

                            ] 

                        =================================== */}



                        {

                            this.state.opciones.map(

                                (opcion, index) => {



                                    return (

                                        <option key={index}>

                                            {opcion}

                                        </option>

                                    );



                                }

                            )

                        }





                        {/* ================================== 

                            CASO 2: 

                            EL ARRAY CONTIENE OBJETOS 

                             

                            Ejemplo: 

                             

                            opciones = 

                            [
                              {
                                numero: 10, 
                                nombre: "VENTAS" 
                              },
                              {
                                numero: 20, 
                                nombre: "INFORMATICA" 
                              }
                            ]
                            En ese caso USAR ESTO EN VEZ 

                            DEL MAP ANTERIOR: 

                        =================================== */}
                        {/*
                        {
                            this.state.opciones.map( 
                                (opcion, index) => { 
                                    return (
                                        <option 
                                            key={index} 
                                            value={opcion.numero} 
                                        >
                                            {opcion.nombre} 
                                        </option> 
                                    );
                                } 
                            ) 
                        }
                        */}

                    </select>
                    {/* ===================================== 

                        BOTÓN DE BÚSQUEDA 

                    ====================================== */}
                    <button
                        onClick={this.buscarResultados}
                    >
                        Buscar
                    </button>
                </form>

                {/* ========================================= 

                    TABLA DE RESULTADOS 

                ========================================== */}

                <table border="1">
                    <thead>
                        <tr>
                            <th>CAMPO 1</th>
                            <th>CAMPO 2</th>
                            <th>CAMPO 3</th>
                        </tr>
                    </thead>


                    <tbody>
                        {
                            this.state.resultados.map(
                                (elemento, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>
                                                {elemento.campo1}
                                            </td>
                                            <td>
                                                {elemento.campo2}
                                            </td>
                                            <td>
                                                {elemento.campo3}
                                            </td>
                                        </tr>
                                    );
                                }
                            )
                        }
                    </tbody>
                </table>
            </div>

        );

    }

} 