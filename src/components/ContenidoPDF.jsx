import ColumnaInfo from "../components/subcomps/ColumnaInfo";
import Columnas from "./subcomps/Columnas";
import { useContext } from "react";
import { contextoRutina } from "../context/contextoRutina";

export default function ContenidoPDF() {
  
  const {
    infoLunes,
    infoMartes,
    infoMiercoles,
    infoJueves,
    infoViernes,
    eleccionMusculoLunes,
    eleccionMusculoMartes,
    eleccionMusculoMiercoles,
    eleccionMusculoJueves,
    eleccionMusculoViernes,
  } = useContext(contextoRutina);

  return (
    <div className="rutina-general">
      <div className="filas">
        <ColumnaInfo />
        <div className="espacio-eliminar"></div>
        <Columnas dia="Miercoles" info={infoMiercoles} eleccionMusculo={eleccionMusculoMiercoles}/>
      </div>
      <div className="filas">
        <Columnas dia="Lunes" info={infoLunes} eleccionMusculo={eleccionMusculoLunes}/>
        <div className="espacio-eliminar"></div>
        <Columnas dia="Jueves" info={infoJueves} eleccionMusculo={eleccionMusculoJueves}/>
      </div>
      <div className="filas">
        <Columnas dia="Martes" info={infoMartes} eleccionMusculo={eleccionMusculoMartes}/>
        <div className="espacio-eliminar"></div>
        <Columnas dia="Viernes" info={infoViernes} eleccionMusculo={eleccionMusculoViernes}/>
      </div>
    </div>
  );
}
