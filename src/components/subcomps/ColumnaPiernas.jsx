import { useContext } from "react";
import { contextoRutina } from "../../context/contextoRutina";

export default function ColumnaPiernas({ dia, ejercicio }) {
  const { infoPiernas } = useContext(contextoRutina);

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
            {infoPiernas.piernas0 ? infoPiernas.piernas0 : null}{" "}
            {infoPiernas.piernas1 ? `X ${infoPiernas.piernas1}` : null}
            {infoPiernas.repe0 ? <span> / {infoPiernas.repe0}</span> : null}
          </h1>
        </div>
        <div className="columna-vacia-2">
          <h1 className="texto-tablas">{infoPiernas.cant0}</h1>
        </div>
      </div>
      <div className="columna-subtitulo">
        <div className="columna-vacia-1">
          <h1 className="texto-tablas">
            {infoPiernas.piernas2 ? infoPiernas.piernas2 : null}{" "}
            {infoPiernas.piernas3 ? `X ${infoPiernas.piernas3}` : null}
            {infoPiernas.repe1 ? <span> / {infoPiernas.repe1}</span> : null}
          </h1>
        </div>
        <div className="columna-vacia-2">
          <h1 className="texto-tablas">{infoPiernas.cant1}</h1>
        </div>
      </div>
      <div className="columna-subtitulo">
        <div className="columna-vacia-1">
          <h1 className="texto-tablas">
            {infoPiernas.piernas4 ? infoPiernas.piernas4 : null}{" "}
            {infoPiernas.piernas5 ? `X ${infoPiernas.piernas5}` : null}
            {infoPiernas.repe2 ? <span> / {infoPiernas.repe2}</span> : null}
          </h1>
        </div>
        <div className="columna-vacia-2">
          <h1 className="texto-tablas">{infoPiernas.cant2}</h1>
        </div>
      </div>
      <div className="columna-subtitulo">
        <div className="columna-vacia-1">
          <h1 className="texto-tablas">
            {infoPiernas.piernas6 ? infoPiernas.piernas6 : null}{" "}
            {infoPiernas.piernas7 ? `X ${infoPiernas.piernas7}` : null}
            {infoPiernas.repe3 ? <span> / {infoPiernas.repe3}</span> : null}
          </h1>
        </div>
        <div className="columna-vacia-2">
          <h1 className="texto-tablas">{infoPiernas.cant3}</h1>
        </div>
      </div>
      <div className="columna-subtitulo">
        <div className="columna-vacia-1">
          <h1 className="texto-tablas">
            {infoPiernas.piernas8 ? infoPiernas.piernas8 : null}{" "}
            {infoPiernas.piernas9 ? `X ${infoPiernas.piernas9}` : null}
            {infoPiernas.repe4 ? <span> / {infoPiernas.repe4}</span> : null}
          </h1>
        </div>
        <div className="columna-vacia-2">
          <h1 className="texto-tablas">{infoPiernas.cant4}</h1>
        </div>
      </div>
    </div>
  );
}
