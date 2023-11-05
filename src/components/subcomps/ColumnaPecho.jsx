import { useContext } from "react";
import { contextoRutina } from "../../context/contextoRutina";

export default function ColumnaPecho({ dia, ejercicio }) {
  const { infoPecho } = useContext(contextoRutina);

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
            {infoPecho.pecho0 ? infoPecho.pecho0 : null}{" "}
            {infoPecho.pecho1 ? `X ${infoPecho.pecho1}` : null}
            {infoPecho.repe0 ? <span> / {infoPecho.repe0}</span> : null}
          </h1>
        </div>
        <div className="columna-vacia-2">
          <h1 className="texto-tablas">{infoPecho.cant0}</h1>
        </div>
      </div>
      <div className="columna-subtitulo">
        <div className="columna-vacia-1">
          <h1 className="texto-tablas">
            {infoPecho.pecho2 ? infoPecho.pecho2 : null}{" "}
            {infoPecho.pecho3 ? `X ${infoPecho.pecho3}` : null}
            {infoPecho.repe1 ? <span> / {infoPecho.repe1}</span> : null}
          </h1>
        </div>
        <div className="columna-vacia-2">
          <h1 className="texto-tablas">{infoPecho.cant1}</h1>
        </div>
      </div>
      <div className="columna-subtitulo">
        <div className="columna-vacia-1">
          <h1 className="texto-tablas">
            {infoPecho.pecho4 ? infoPecho.pecho4 : null}{" "}
            {infoPecho.pecho5 ? `X ${infoPecho.pecho5}` : null}
            {infoPecho.repe2 ? <span> / {infoPecho.repe2}</span> : null}
          </h1>
        </div>
        <div className="columna-vacia-2">
          <h1 className="texto-tablas">{infoPecho.cant2}</h1>
        </div>
      </div>
      <div className="columna-subtitulo">
        <div className="columna-vacia-1">
          <h1 className="texto-tablas">
            {infoPecho.pecho6 ? infoPecho.pecho6 : null}{" "}
            {infoPecho.pecho7 ? `X ${infoPecho.pecho7}` : null}
            {infoPecho.repe3 ? <span> / {infoPecho.repe3}</span> : null}
          </h1>
        </div>
        <div className="columna-vacia-2">
          <h1 className="texto-tablas">{infoPecho.cant3}</h1>
        </div>
      </div>
      <div className="columna-subtitulo">
        <div className="columna-vacia-1">
          <h1 className="texto-tablas">
            {infoPecho.pecho8 ? infoPecho.pecho8 : null}{" "}
            {infoPecho.pecho9 ? `X ${infoPecho.pecho9}` : null}
            {infoPecho.repe4 ? <span> / {infoPecho.repe4}</span> : null}
          </h1>
        </div>
        <div className="columna-vacia-2">
          <h1 className="texto-tablas">{infoPecho.cant4}</h1>
        </div>
      </div>
    </div>
  );
}
