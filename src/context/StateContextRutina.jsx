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

  // EJERCICIOS DE PECHO PARA LA PERSONA

  const [infoPecho, setInfoPecho] = useState({});

  const agregarPecho = (info) => {
    setInfoPecho({
      pecho0: info.eje0,
      pecho1: info.eje1,
      pecho2: info.eje2,
      pecho3: info.eje3,
      pecho4: info.eje4,
      pecho5: info.eje5,
      pecho6: info.eje6,
      pecho7: info.eje7,
      pecho8: info.eje8,
      pecho9: info.eje9,
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

  const [infoEspalda, setInfoEspalda] = useState({});
  const agregarEspalda = (info) => {
    setInfoEspalda({
      espalda0: info.eje0,
      espalda1: info.eje1,
      espalda2: info.eje2,
      espalda3: info.eje3,
      espalda4: info.eje4,
      espalda5: info.eje5,
      espalda6: info.eje6,
      espalda7: info.eje7,
      espalda8: info.eje8,
      espalda9: info.eje9,
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

  const [infoHombros, setInfoHombros] = useState({});
  const agregarHombros = (info) => {
    setInfoHombros({
      hombros0: info.eje0,
      hombros1: info.eje1,
      hombros2: info.eje2,
      hombros3: info.eje3,
      hombros4: info.eje4,
      hombros5: info.eje5,
      hombros6: info.eje6,
      hombros7: info.eje7,
      hombros8: info.eje8,
      hombros9: info.eje9,
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

  const [infoPiernas, setInfoPiernas] = useState({});
  const agregarPiernas = (info) => {
    setInfoPiernas({
      piernas0: info.eje0,
      piernas1: info.eje1,
      piernas2: info.eje2,
      piernas3: info.eje3,
      piernas4: info.eje4,
      piernas5: info.eje5,
      piernas6: info.eje6,
      piernas7: info.eje7,
      piernas8: info.eje8,
      piernas9: info.eje9,
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

  const [infoBrazos, setInfoBrazos] = useState({});
  const agregarBrazos = (info) => {
    setInfoBrazos({
      brazos0: info.eje0,
      brazos1: info.eje1,
      brazos2: info.eje2,
      brazos3: info.eje3,
      brazos4: info.eje4,
      brazos5: info.eje5,
      brazos6: info.eje6,
      brazos7: info.eje7,
      brazos8: info.eje8,
      brazos9: info.eje9,
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

  return (
    <>
      <contextoRutina.Provider
        value={{
          info,
          agregarInfo,
          infoPecho,
          agregarPecho,
          infoEspalda,
          agregarEspalda,
          infoHombros,
          agregarHombros,
          infoBrazos,
          agregarBrazos,
          infoPiernas,
          agregarPiernas,
        }}
      >
        {children}
      </contextoRutina.Provider>
    </>
  );
}
