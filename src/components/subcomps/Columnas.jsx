export default function Columnas({ dia, info, eleccionMusculo }) {

  return (
    <div className="columnas">
      <div className="columna-titulo">
        <h1 className="">{dia}</h1>
      </div>

      <div className="columna-subtitulo">
        <div className="columna1">
          <h1 className="texto-subtitulo">Ejercicio: {eleccionMusculo.map((elec, i)=> {
          return (
            <span key={i}>{elec} </span>
            )
        })}</h1>
        </div>
        <div className="columna2">
          <h1 className="texto-subtitulo">Series</h1>
        </div>
      </div>
      <div className="columna-subtitulo">
        <div className="columna-vacia-1">
          <h1 className="texto-tablas">
            {info.eje0 ? info.eje0 : null}{" "}
            {info.eje1 ? `X ${info.eje1}` : null}
            {info.repe0 ? <span> / {info.repe0}</span> : null}
          </h1>
        </div>
        <div className="columna-vacia-2">
          <h1 className="texto-tablas">{info.cant0}</h1>
        </div>
      </div>
      <div className="columna-subtitulo">
        <div className="columna-vacia-1">
          <h1 className="texto-tablas">
            {info.eje2 ? info.eje2 : null}{" "}
            {info.eje3 ? `X ${info.eje3}` : null}
            {info.repe1 ? <span> / {info.repe1}</span> : null}
          </h1>
        </div>
        <div className="columna-vacia-2">
          <h1 className="texto-tablas">{info.cant1}</h1>
        </div>
      </div>
      <div className="columna-subtitulo">
        <div className="columna-vacia-1">
          <h1 className="texto-tablas">
            {info.eje4 ? info.eje4 : null}{" "}
            {info.eje5 ? `X ${info.eje5}` : null}
            {info.repe2 ? <span> / {info.repe2}</span> : null}
          </h1>
        </div>
        <div className="columna-vacia-2">
          <h1 className="texto-tablas">{info.cant2}</h1>
        </div>
      </div>
      <div className="columna-subtitulo">
        <div className="columna-vacia-1">
          <h1 className="texto-tablas">
            {info.eje6 ? info.eje6 : null}{" "}
            {info.eje7 ? `X ${info.eje7}` : null}
            {info.repe3 ? <span> / {info.repe3}</span> : null}
          </h1>
        </div>
        <div className="columna-vacia-2">
          <h1 className="texto-tablas">{info.cant3}</h1>
        </div>
      </div>
      <div className="columna-subtitulo">
        <div className="columna-vacia-1">
          <h1 className="texto-tablas">
            {info.eje8 ? info.eje8 : null}{" "}
            {info.eje9 ? `X ${info.eje9}` : null}
            {info.repe4 ? <span> / {info.repe4}</span> : null}
          </h1>
        </div>
        <div className="columna-vacia-2">
          <h1 className="texto-tablas">{info.cant4}</h1>
        </div>
      </div>
    </div>
  );
}
