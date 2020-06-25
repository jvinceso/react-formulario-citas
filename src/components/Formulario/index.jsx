import React, { Component, useState } from "react";
import Titulo from "../Titulo";

import { v4 as uuidv4 } from "uuid";

import {
  Button,
  Form,
  FormGroup,
  StyleInput,
  StyleArea,
  Alert,
} from "./style.js";

const initalState = {
  cita: {
    nombre: "",
    apellido: "",
    direccion: "",
    fecha: "",
    hora: "",
    sintomas: "",
  },
  editando: false,
  error: false,
};

class Formulario extends Component {
  constructor(props) {
    super(props);
    //super();
    this.state = {...initalState}
   // this.state = {...initalState };
  }



  handleChange = (e) => {
    this.setState({
      cita: { ...this.state.cita, [e.target.name]: e.target.value },
    });
  };
  handleClickEdit = (e) => {
    e.preventDefault();
  }
  handleClick = (e) => {
    e.preventDefault();

    const { cita } = this.state;
    console.log("this->state");
    console.log(cita);
    if (
      cita.nombre === "" ||
      cita.apellido === "" ||
      cita.direccion === "" ||
      cita.fecha === "" ||
      cita.hora === "" ||
      cita.sintomas === ""
    ) {
      this.setState({ ...this.state, error: true });
      return;
    }
    console.log("estado edicion");
    console.log(this.state);
    const RegistrodeCita = {...this.state.cita};
    if(RegistrodeCita.id===""){
      RegistrodeCita.id = uuidv4();
    }
    this.props.agregarCita(RegistrodeCita);
  };
  
  componentWillReceiveProps(nextProps){
    this.setState({...this.state,
      cita:{...nextProps.citaTransferencia.cita}
    })
  }
  


  render() {
    return (
      <div>
        <Titulo titulo={"Formulario de citas"} />
        <Form>
          <FormGroup col="2">
            <label htmlFor="nombre">Nombre</label>
            <StyleInput
              type="text"
              placeholder="Ingresar Nombre"
              name="nombre"
              onChange={this.handleChange}
              value={this.state.cita.nombre}
            />
          </FormGroup>
          <FormGroup col="2">
            <label htmlFor="apellido">Apellido</label>
            <StyleInput
              type="text"
              placeholder="Ingresar Apellido"
              name="apellido"
              onChange={this.handleChange}
              value={this.state.cita.apellido}
            />
          </FormGroup>
          <FormGroup col="1">
            <label htmlFor="direccion">Dirección</label>
            <StyleInput
              type="text"
              placeholder="Ingresar Dirección"
              name="direccion"
              onChange={this.handleChange}
              value={this.state.cita.direccion}
            />
          </FormGroup>
          <FormGroup col="3">
            <label htmlFor="fecha">Fecha cita</label>
            <StyleInput
              type="date"
              name="fecha"
              onChange={this.handleChange}
              value={this.state.cita.fecha}
            />
          </FormGroup>
          <FormGroup col="3">
            <label htmlFor="hora">Hora cita</label>
            <StyleInput
              type="time"
              name="hora"
              onChange={this.handleChange}
              value={this.state.cita.hora}
            />
          </FormGroup>
          <FormGroup col="3">
            <label htmlFor="sintomas">Sintomas</label>
            <StyleArea
              placeholder="Ingresar sintomas"
              name="sintomas"
              onChange={this.handleChange}
              value={this.state.cita.sintomas}
            ></StyleArea>
          </FormGroup>

          {this.state.error && (
            <FormGroup col="1">
              <Alert>Todos los campos son requeridos</Alert>
            </FormGroup>
          )}

          {/* {(this.state.editando)?
          <FormGroup>
            <Button onClick={this.handleClickEdit}>Editar cita</Button>
          </FormGroup>
          :<FormGroup>
            <Button onClick={this.handleClick}>reservar cita</Button>
          </FormGroup>
          } */}
          <FormGroup>
            <Button onClick={this.handleClick}>reservar cita</Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default Formulario;
