import React, { Component, Fragment } from "react";
import Titulo from "../Titulo";
import Cita from "../Cita";

import { ContainerList } from "./style.js";

class ListaContainer extends Component {
  render() {
    const { listaCitas, elimnarCita, editarCita,estamosenEdicion} = this.props;

    if (listaCitas.length === 0) return <Titulo titulo={"Sin Citas"} />;
    return (
      <Fragment>
        <Titulo titulo={"Lista de citas"} />
        <ContainerList>
          {listaCitas.map((cita) => (
            <Cita key={cita.id} cita={cita} elimnarCita={elimnarCita}  editarCita={editarCita}/>
          ))}
        </ContainerList>
      </Fragment>
    );
  }
}

export default ListaContainer;
