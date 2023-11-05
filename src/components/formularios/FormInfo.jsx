import { useContext, useState } from "react";
import { contextoRutina } from "../../context/contextoRutina";

export default function FormInfo() {
  const { agregarInfo } = useContext(contextoRutina);
  const [nombre, setNombre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarInfo(nombre.toUpperCase());
    setNombre("");
  };

  return (
    <form action="" onSubmit={handleSubmit} className="form-info form-control">
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Nombre y Apellido"
        className="form-control"
      />
      <button className="btn">Guardar</button>
    </form>
  );
}
