import { useContext } from "react";
import { contextoRutina } from "../../context/contextoRutina";

export default function ColumnaEspalda({ dia, ejercicio }) {
  const { infoEspalda } = useContext(contextoRutina);

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
            {infoEspalda.espalda0 ? infoEspalda.espalda0 : null}{" "}
            {infoEspalda.espalda1 ? `X ${infoEspalda.espalda1}` : null}
            {infoEspalda.repe0 ? <span> / {infoEspalda.repe0}</span> : null}
          </h1>
        </div>
        <div className="columna-vacia-2">
          <h1 className="texto-tablas">{infoEspalda.cant0}</h1>
        </div>
      </div>
      <div className="columna-subtitulo">
        <div className="columna-vacia-1">
          <h1 className="texto-tablas">
            {infoEspalda.espalda2 ? infoEspalda.espalda2 : null}{" "}
            {infoEspalda.espalda3 ? `X ${infoEspalda.espalda3}` : null}
            {infoEspalda.repe1 ? <span> / {infoEspalda.repe1}</span> : null}
          </h1>
        </div>
        <div className="columna-vacia-2">
          <h1 className="texto-tablas">{infoEspalda.cant1}</h1>
        </div>
      </div>
      <div className="columna-subtitulo">
        <div className="columna-vacia-1">
          <h1 className="texto-tablas">
            {infoEspalda.espalda4 ? infoEspalda.espalda4 : null}{" "}
            {infoEspalda.espalda5 ? `X ${infoEspalda.espalda5}` : null}
            {infoEspalda.repe2 ? <span> / {infoEspalda.repe2}</span> : null}
          </h1>
        </div>
        <div className="columna-vacia-2">
          <h1 className="texto-tablas">{infoEspalda.cant2}</h1>
        </div>
      </div>
      <div className="columna-subtitulo">
        <div className="columna-vacia-1">
          <h1 className="texto-tablas">
            {infoEspalda.espalda6 ? infoEspalda.espalda6 : null}{" "}
            {infoEspalda.espalda7 ? `X ${infoEspalda.espalda7}` : null}
            {infoEspalda.repe3 ? <span> / {infoEspalda.repe3}</span> : null}
          </h1>
        </div>
        <div className="columna-vacia-2">
          <h1 className="texto-tablas">{infoEspalda.cant3}</h1>
        </div>
      </div>
      <div className="columna-subtitulo">
        <div className="columna-vacia-1">
          <h1 className="texto-tablas">
            {infoEspalda.espalda8 ? infoEspalda.espalda8 : null}{" "}
            {infoEspalda.espalda9 ? `X ${infoEspalda.espalda9}` : null}
            {infoEspalda.repe4 ? <span> / {infoEspalda.repe4}</span> : null}
          </h1>
        </div>
        <div className="columna-vacia-2">
          <h1 className="texto-tablas">{infoEspalda.cant4}</h1>
        </div>
      </div>
    </div>
  );
}
