import img from "../../assets/img/agus1.jpg";
import logo2 from "../../assets/img/agus.png";
import { useContext } from "react";
import { contextoRutina } from "../../context/contextoRutina";

export default function ColumnaInfo() {
  const { info } = useContext(contextoRutina);

  return (
    <div className="columna-info">
      <div className="flex gap-2 justify-between px-1" id="esto">
        <div className="">
          <img src={img} alt="" className="logo" />
        </div>
        <div className="imagen-hoja">
          <img src={logo2} alt="" className="logo2" />
          <div>
            <h1 className="hoja-de-rutina">HOJA DE RUTINA</h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <div className="bg-orange-200 rounded">
          <h1 className="nombre-fecha">
            Nombre: {info ? info[0].nombre : null}
          </h1>
        </div>
        <div className="bg-orange-200 rounded">
          <h1 className="nombre-fecha">Fecha: {info[0].fecha}</h1>
        </div>
      </div>
    </div>
  );
}
