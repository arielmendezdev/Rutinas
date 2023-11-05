import { useContext } from "react";
import { contextoRutina } from "../../context/contextoRutina";

export default function ColumnaBrazos({ dia, ejercicio }) {
  const { infoBrazos } = useContext(contextoRutina);

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
            {infoBrazos.brazos0 ? infoBrazos.brazos0 : null}{" "}
            {infoBrazos.brazos1 ? `X ${infoBrazos.brazos1}` : null}
            {infoBrazos.repe0 ? <span> / {infoBrazos.repe0}</span> : null}
          </h1>
        </div>
        <div className="columna-vacia-2">
          <h1 className="texto-tablas">{infoBrazos.cant0}</h1>
        </div>
      </div>
      <div className="columna-subtitulo">
        <div className="columna-vacia-1">
          <h1 className="texto-tablas">
            {infoBrazos.brazos2 ? infoBrazos.brazos2 : null}{" "}
            {infoBrazos.brazos3 ? `X ${infoBrazos.brazos3}` : null}
            {infoBrazos.repe1 ? <span> / {infoBrazos.repe1}</span> : null}
          </h1>
        </div>
        <div className="columna-vacia-2">
          <h1 className="texto-tablas">{infoBrazos.cant1}</h1>
        </div>
      </div>
      <div className="columna-subtitulo">
        <div className="columna-vacia-1">
          <h1 className="texto-tablas">
            {infoBrazos.brazos4 ? infoBrazos.brazos4 : null}{" "}
            {infoBrazos.brazos5 ? `X ${infoBrazos.brazos5}` : null}
            {infoBrazos.repe2 ? <span> / {infoBrazos.repe2}</span> : null}
          </h1>
        </div>
        <div className="columna-vacia-2">
          <h1 className="texto-tablas">{infoBrazos.cant2}</h1>
        </div>
      </div>
      <div className="columna-subtitulo">
        <div className="columna-vacia-1">
          <h1 className="texto-tablas">
            {infoBrazos.brazos6 ? infoBrazos.brazos6 : null}{" "}
            {infoBrazos.brazos7 ? `X ${infoBrazos.brazos7}` : null}
            {infoBrazos.repe3 ? <span> / {infoBrazos.repe3}</span> : null}
          </h1>
        </div>
        <div className="columna-vacia-2">
          <h1 className="texto-tablas">{infoBrazos.cant3}</h1>
        </div>
      </div>
      <div className="columna-subtitulo">
        <div className="columna-vacia-1">
          <h1 className="texto-tablas">
            {infoBrazos.brazos8 ? infoBrazos.brazos8 : null}{" "}
            {infoBrazos.brazos9 ? `X ${infoBrazos.brazos9}` : null}
            {infoBrazos.repe4 ? <span> / {infoBrazos.repe4}</span> : null}
          </h1>
        </div>
        <div className="columna-vacia-2">
          <h1 className="texto-tablas">{infoBrazos.cant4}</h1>
        </div>
      </div>
    </div>
  );
}
