import { useState } from "react";
import { contextoRutina } from "./contextoRutina";
import { format } from "date-fns";

export default function StateContextRutina({ children }) {
  // NOMBRE Y FECHA DE LA PERSONA
  const [info, setInfo] = useState([{}]);

  const agregarInfo = (nombre) => {
    const fecha = new Date();
    const fechaFormateada = format(fecha, "dd-MM-yyyy");
    setInfo([
      {
        nombre,
        fecha: fechaFormateada,
      },
    ]);
  };

  // EJERCICIOS DE ESPALDA PARA LA PERSONA

  const [infoLunes, setInfoLunes] = useState({});
  const agregarLunes = (info) => {
    setInfoLunes({
      eje0: info.eje0,
      eje1: info.eje1,
      eje2: info.eje2,
      eje3: info.eje3,
      eje4: info.eje4,
      eje5: info.eje5,
      eje6: info.eje6,
      eje7: info.eje7,
      eje8: info.eje8,
      eje9: info.eje9,
      cant0: info.cant0,
      cant1: info.cant1,
      cant2: info.cant2,
      cant3: info.cant3,
      cant4: info.cant4,
      repe0: info.repe0,
      repe1: info.repe1,
      repe2: info.repe2,
      repe3: info.repe3,
      repe4: info.repe4,
    });
  };
  // EJERCICIOS DE ESPALDA PARA LA PERSONA

  const [infoMartes, setInfoMartes] = useState({});
  const agregarMartes = (info) => {
    setInfoMartes({
      eje0: info.eje0,
      eje1: info.eje1,
      eje2: info.eje2,
      eje3: info.eje3,
      eje4: info.eje4,
      eje5: info.eje5,
      eje6: info.eje6,
      eje7: info.eje7,
      eje8: info.eje8,
      eje9: info.eje9,
      cant0: info.cant0,
      cant1: info.cant1,
      cant2: info.cant2,
      cant3: info.cant3,
      cant4: info.cant4,
      repe0: info.repe0,
      repe1: info.repe1,
      repe2: info.repe2,
      repe3: info.repe3,
      repe4: info.repe4,
    });
  };
  // EJERCICIOS DE ESPALDA PARA LA PERSONA

  const [infoMiercoles, setInfoMiercoles] = useState({});
  const agregarMiercoles = (info) => {
    setInfoMiercoles({
      eje0: info.eje0,
      eje1: info.eje1,
      eje2: info.eje2,
      eje3: info.eje3,
      eje4: info.eje4,
      eje5: info.eje5,
      eje6: info.eje6,
      eje7: info.eje7,
      eje8: info.eje8,
      eje9: info.eje9,
      cant0: info.cant0,
      cant1: info.cant1,
      cant2: info.cant2,
      cant3: info.cant3,
      cant4: info.cant4,
      repe0: info.repe0,
      repe1: info.repe1,
      repe2: info.repe2,
      repe3: info.repe3,
      repe4: info.repe4,
    });
  };
  // EJERCICIOS DE ESPALDA PARA LA PERSONA

  const [infoJueves, setInfoJueves] = useState({});
  const agregarJueves = (info) => {
    setInfoJueves({
      eje0: info.eje0,
      eje1: info.eje1,
      eje2: info.eje2,
      eje3: info.eje3,
      eje4: info.eje4,
      eje5: info.eje5,
      eje6: info.eje6,
      eje7: info.eje7,
      eje8: info.eje8,
      eje9: info.eje9,
      cant0: info.cant0,
      cant1: info.cant1,
      cant2: info.cant2,
      cant3: info.cant3,
      cant4: info.cant4,
      repe0: info.repe0,
      repe1: info.repe1,
      repe2: info.repe2,
      repe3: info.repe3,
      repe4: info.repe4,
    });
  };
  // EJERCICIOS DE ESPALDA PARA LA PERSONA

  const [infoViernes, setInfoViernes] = useState({});
  const agregarViernes = (info) => {
    setInfoViernes({
      eje0: info.eje0,
      eje1: info.eje1,
      eje2: info.eje2,
      eje3: info.eje3,
      eje4: info.eje4,
      eje5: info.eje5,
      eje6: info.eje6,
      eje7: info.eje7,
      eje8: info.eje8,
      eje9: info.eje9,
      cant0: info.cant0,
      cant1: info.cant1,
      cant2: info.cant2,
      cant3: info.cant3,
      cant4: info.cant4,
      repe0: info.repe0,
      repe1: info.repe1,
      repe2: info.repe2,
      repe3: info.repe3,
      repe4: info.repe4,
    });
  };

  const [dia, setDia] = useState("");

  const [eleccionMusculoLunes, setEleccionMusculoLunes] = useState([])
  const [eleccionMusculoMartes, setEleccionMusculoMartes] = useState([])
  const [eleccionMusculoMiercoles, setEleccionMusculoMiercoles] = useState([])
  const [eleccionMusculoJueves, setEleccionMusculoJueves] = useState([])
  const [eleccionMusculoViernes, setEleccionMusculoViernes] = useState([])

  return (
    <>
      <contextoRutina.Provider
        value={{
          info,
          agregarInfo,
          infoLunes,
          agregarLunes,
          infoMartes,
          agregarMartes,
          infoMiercoles,
          agregarMiercoles,
          infoJueves,
          agregarJueves,
          infoViernes,
          agregarViernes,
          dia,
          setDia,
          eleccionMusculoLunes,
          setEleccionMusculoLunes,
          eleccionMusculoMartes,
          setEleccionMusculoMartes,
          eleccionMusculoMiercoles,
          setEleccionMusculoMiercoles,
          eleccionMusculoJueves,
          setEleccionMusculoJueves,
          eleccionMusculoViernes,
          setEleccionMusculoViernes,
        }}
      >
        {children}
      </contextoRutina.Provider>
    </>
  );
}
