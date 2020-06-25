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
  { id:45, nombre: 'Juan', apellido:'Perez' , direccion:'las vegas' , fecha:'22/06/2020' , hora:'15:12' , sintomas:'fiebre'},
  { id:46, nombre: 'Pedro', apellido:'Puñeta' , direccion:'Lso Angeles' , fecha:'27/06/2020' , hora:'20:11' , sintomas:'dolor uña'},
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
  error: false,
};


class App extends Component {
  state = {
    //listaCitas: [],
    listaCitas:data_ini,
    citaObjPrincipal:{...initalState},
    estamoseditando:false
    // citaObj:{
    //   ...initalState
    // }
  };

  // citaTmp = {id:45, nombre: 'Juan', apellido:'Perez' , direccion:'las vegas' , 
  // fecha:'22/06/2020' , hora:'15:12' , sintomas:'fiebre'};


  agregarCita = (cita) => {
    this.setState({ listaCitas: [...this.state.listaCitas, cita] });
  

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
  editarCita = (id) => {
    const citaElegida = this.state.listaCitas.filter(
      (cita) => cita.id == id
    );
    console.log("citaElegida");
    console.log(citaElegida[0]);
    this.setState({ citaObj: citaElegida[0], estamoseditando:true });
  };
  actualizarCita = (cita) => {
    const nuevaListaCitas = this.state.listaCitas.filter(
      (tcita) => tcita.id === cita.id ? cita:tcita
    );
    console.log("citaactualizando....");
    
    this.setState({ listaCitas: this.state.listaCitas, estamoseditando:false });
  };
    


  render() {
    return (
      <div>
        <GlobalStyle />
        <Formulario agregarCita={this.agregarCita} actualizarCita={this.state.citaObj} />
        <ListaCitas
          listaCitas={this.state.listaCitas}
          elimnarCita={this.elimnarCita}
          editarCita={this.editarCita}
          estamosenEdicion = {this.state.estamoseditando}
        />
      </div>
    );
  }
}

export default App;
