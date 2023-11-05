import { useContext } from "react";
import { contextoRutina } from "../../context/contextoRutina";

export default function ColumnasHombros({ dia, ejercicio }) {
  const { infoHombros } = useContext(contextoRutina);

  return (
    <div className="columnas">
      <div className="columna-titulo">
        <h1 className="">{dia}</h1>
      </div>
      <div className="columna-subtitulo">
        <div className="columna1">
          <h1 className="texto-subtitulo">
            Ejercicio: {ejercicio.toUpperCase()}
          </h1>
        </div>
        <div className="columna2">
          <h1 className="texto-subtitulo">Series</h1>
        </div>
      </div>
      <div className="columna-subtitulo">
        <div className="columna-vacia-1">
          <h1 className="texto-tablas">
            {infoHombros.hombros0 ? infoHombros.hombros0 : null}{" "}
            {infoHombros.hombros1 ? `X ${infoHombros.hombros1}` : null}
            {infoHombros.repe0 ? <span> / {infoHombros.repe0}</span> : null}
          </h1>
        </div>
        <div className="columna-vacia-2">
          <h1 className="texto-tablas">{infoHombros.cant0}</h1>
        </div>
      </div>
      <div className="columna-subtitulo">
        <div className="columna-vacia-1">
          <h1 className="texto-tablas">
            {infoHombros.hombros2 ? infoHombros.hombros2 : null}{" "}
            {infoHombros.hombros3 ? `X ${infoHombros.hombros3}` : null}
            {infoHombros.repe1 ? <span> / {infoHombros.repe1}</span> : null}
          </h1>
        </div>
        <div className="columna-vacia-2">
          <h1 className="texto-tablas">{infoHombros.cant1}</h1>
        </div>
      </div>
      <div className="columna-subtitulo">
        <div className="columna-vacia-1">
          <h1 className="texto-tablas">
            {infoHombros.hombros4 ? infoHombros.hombros4 : null}{" "}
            {infoHombros.hombros5 ? `X ${infoHombros.hombros5}` : null}
            {infoHombros.repe2 ? <span> / {infoHombros.repe2}</span> : null}
          </h1>
        </div>
        <div className="columna-vacia-2">
          <h1 className="texto-tablas">{infoHombros.cant2}</h1>
        </div>
      </div>
      <div className="columna-subtitulo">
        <div className="columna-vacia-1">
          <h1 className="texto-tablas">
            {infoHombros.hombros6 ? infoHombros.hombros6 : null}{" "}
            {infoHombros.hombros7 ? `X ${infoHombros.hombros7}` : null}
            {infoHombros.repe3 ? <span> / {infoHombros.repe3}</span> : null}
          </h1>
        </div>
        <div className="columna-vacia-2">
          <h1 className="texto-tablas">{infoHombros.cant3}</h1>
        </div>
      </div>
      <div className="columna-subtitulo">
        <div className="columna-vacia-1">
          <h1 className="texto-tablas">
            {infoHombros.hombros8 ? infoHombros.hombros8 : null}{" "}
            {infoHombros.hombros9 ? `X ${infoHombros.hombros9}` : null}
            {infoHombros.repe4 ? <span> / {infoHombros.repe4}</span> : null}
          </h1>
        </div>
        <div className="columna-vacia-2">
          <h1 className="texto-tablas">{infoHombros.cant4}</h1>
        </div>
      </div>
    </div>
  );
}
