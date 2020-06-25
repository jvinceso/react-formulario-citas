import React, { Component } from "react";
import Formulario from "./components/Formulario";
import ListaCitas from "./components/ListaCitas";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
  height: 100%;
}
*::after,*::before{
  margin: 0;
  padding: 0;
  box-sizing: inherit;
};
body{
  height: 100%;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  color: #555;
  box-sizing: border-box; 
}
`;
const data_ini =[
  { id:45, nombre: 'Juan', apellido:'Perez' , direccion:'las vegas' , fecha:'2020-06-13' , hora:'15:12' , sintomas:'fiebre'},
  { id:46, nombre: 'Pedro', apellido:'Puñeta' , direccion:'Lso Angeles' , fecha:'2020-05-20' , hora:'20:11' , sintomas:'dolor uña'},
]

const initalState = {
  cita: {
    nombre: "",
    apellido: "",
    direccion: "",
    fecha: "",
    hora: "",
    sintomas: "",
  },
  edicion:false,
  error: false,
};


class App extends Component {
  state = {
    //listaCitas: [],
    listaCitas:data_ini,
    citaObjPrincipal:{...initalState},
    estamoseditando:false
  };

  // citaTmp = {id:45, nombre: 'Juan', apellido:'Perez' , direccion:'las vegas' , 
  // fecha:'22/06/2020' , hora:'15:12' , sintomas:'fiebre'};

  setearData =(e)=>{
    this.setState({
      cita: { ...this.state.cita, [e.target.name]: e.target.value },
    });
  }
  agregarCita = (cita) => {
    this.setState({ listaCitas: [...this.state.listaCitas, cita] });
    console.log("Refactor Agregar cicuta?");
    console.log(this.state);

    this.setState({
      citaObjPrincipal:{
        ...initalState
      }
    });
  };

  elimnarCita = (id) => {
    const nuevaListaCitas = this.state.listaCitas.filter(
      (cita) => cita.id !== id
    );
      //agregar nuevo arreglo de citas
    this.setState({ listaCitas: nuevaListaCitas });
  };
  mostrarInformacionEleccion = (id) => {
    const citaElegida = this.state.listaCitas.filter(
       (cita) => cita.id === id
    )[0];
    console.log("citaElegida");
    console.log(citaElegida);    
    this.setState({
      citaObjPrincipal:{
        cita:{
          ...citaElegida
        }
        ,error:false
        // ...initalState
      }
    });    

    // this.setState({ citaObjPrincipal:{cita: citaElegida[0],edicion:true}, estamoseditando:true });
    // console.log("estaaaateee");
    // console.log(this.state);
  };



  render() {
    return (
      <div>
        <GlobalStyle />
        <Formulario agregarCita={this.agregarCita} citaTransferencia={this.state.citaObjPrincipal} estamoseditando={this.state.estamoseditando} />
        <ListaCitas
          listaCitas={this.state.listaCitas}
          elimnarCita={this.elimnarCita}
          mostrarInformacionEleccion={this.mostrarInformacionEleccion}
        />
      </div>
    );
  }
}

export default App;
