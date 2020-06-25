import React, { Component, Fragment } from "react";
import Titulo from "../Titulo";
import Cita from "../Cita";

import { ContainerList } from "./style.js";

class ListaContainer extends Component {
  render() {
    const { listaCitas, elimnarCita, mostrarInformacionEleccion,estamosenEdicion} = this.props;

    if (listaCitas.length === 0) return <Titulo titulo={"Sin Citas"} />;
    return (
      <Fragment>
        <Titulo titulo={"Lista de citas"} />
        <ContainerList>
          {listaCitas.map((cita) => (
            <Cita key={cita.id} cita={cita} elimnarCita={elimnarCita}  mostrarInformacionEleccion={mostrarInformacionEleccion}/>
          ))}
        </ContainerList>
      </Fragment>
    );
  }
}

export default ListaContainer;
