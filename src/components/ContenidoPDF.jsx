import ColumnasHombros from "../components/subcomps/ColumnaHombros";
import ColumnasBrazos from "../components/subcomps/ColumnaBrazos";
import ColumnasPiernas from "../components/subcomps/ColumnaPiernas";
import ColumnaEspalda from "../components/subcomps/ColumnaEspalda";
import ColumnaPecho from "../components/subcomps/ColumnaPecho";
import ColumnaInfo from "../components/subcomps/ColumnaInfo";

export default function ContenidoPDF() {
  return (
    <div className="rutina-general">
      <div className="filas">
        <ColumnaInfo />
        <div className="espacio-eliminar"></div>
        <ColumnaPecho dia="Miercoles" ejercicio="Pecho" />
      </div>
      <div className="filas">
        <ColumnaEspalda dia="Lunes" ejercicio="Espalda" />
        <div className="espacio-eliminar"></div>
        <ColumnasHombros dia="Jueves" ejercicio="Hombros" />
      </div>
      <div className="filas">
        <ColumnasPiernas dia="Martes" ejercicio="piernas" />
        <div className="espacio-eliminar"></div>
        <ColumnasBrazos dia="Viernes" ejercicio="brazos" />
      </div>
    </div>
  );
}
