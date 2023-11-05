import { useContext, useState } from "react";
import { ejercicios } from "../../datos/datos";
import {
  Hombros,
  Pecho,
  Espalda,
  Piernas,
  Brazos,
  Cantidad,
  Repeticiones,
} from "../../datos/datos";
import Select from "react-select";
import { contextoRutina } from "../../context/contextoRutina";
import eliminar from "../../assets/img/eliminar.png";

export default function Form() {
  const { agregarBrazos } = useContext(contextoRutina);
  const { agregarPecho } = useContext(contextoRutina);
  const { agregarEspalda } = useContext(contextoRutina);
  const { agregarHombros } = useContext(contextoRutina);
  const { agregarPiernas } = useContext(contextoRutina);

  const [eje0, setEje0] = useState();
  const [eje1, setEje1] = useState();
  const [eje2, setEje2] = useState();
  const [eje3, setEje3] = useState();
  const [eje4, setEje4] = useState();
  const [eje5, setEje5] = useState();
  const [eje6, setEje6] = useState();
  const [eje7, setEje7] = useState();
  const [eje8, setEje8] = useState();
  const [eje9, setEje9] = useState();

  const [cant0, setCant0] = useState();
  const [cant1, setCant1] = useState();
  const [cant2, setCant2] = useState();
  const [cant3, setCant3] = useState();
  const [cant4, setCant4] = useState();

  const [repe0, setRepe0] = useState();
  const [repe1, setRepe1] = useState();
  const [repe2, setRepe2] = useState();
  const [repe3, setRepe3] = useState();
  const [repe4, setRepe4] = useState();

  const info = {
    eje0,
    eje1,
    eje2,
    eje3,
    eje4,
    eje5,
    eje6,
    eje7,
    eje8,
    eje9,
    cant0,
    cant1,
    cant2,
    cant3,
    cant4,
    repe0,
    repe1,
    repe2,
    repe3,
    repe4,
  };

  const hundleSubmit = (e) => {
    e.preventDefault();
    if (seleccion == "Brazos") {
      agregarBrazos(info);
    }
    if (seleccion == "Pecho") {
      agregarPecho(info);
    }
    if (seleccion == "Espalda") {
      agregarEspalda(info);
    }
    if (seleccion == "Hombros") {
      agregarHombros(info);
    }
    if (seleccion == "Piernas") {
      agregarPiernas(info);
    }
  };

  const eliminarFila1 = () => {
    setCant0();
    setRepe0();
    setEje0();
    setEje1();
  };
  const eliminarFila2 = () => {
    setCant1();
    setRepe1();
    setEje2();
    setEje3();
  };
  const eliminarFila3 = () => {
    setCant2();
    setRepe2();
    setEje4();
    setEje5();
  };
  const eliminarFila4 = () => {
    setCant3();
    setRepe3();
    setEje6();
    setEje7();
  };
  const eliminarFila5 = () => {
    setCant4();
    setRepe4();
    setEje8();
    setEje9();
  };

  const [select, setSelect] = useState([]);

  const hundleChange = () => {
    if (seleccion === "Espalda") {
      setSelect(Espalda);
    }
    if (seleccion == "Pecho") {
      setSelect(Pecho);
    }
    if (seleccion == "Hombros") {
      setSelect(Hombros);
    }
    if (seleccion == "Piernas") {
      setSelect(Piernas);
    }
    if (seleccion == "Brazos") {
      setSelect(Brazos);
    }
  };

  const [seleccion, setSeleccion] = useState();

  return (
    <div className="form">
      <form
        action=""
        className="form-control container-form"
        onSubmit={hundleSubmit}
      >
        <div className="flex gap-4 p-2">
          <Select
            options={ejercicios}
            onChange={(e) => setSeleccion(e.value)}
          />
          <button className="btn btn-sm btn-dark" onClick={hundleChange}>
            Cambiar
          </button>
        </div>
        <div className="filas-form">
          <div className="form-cantidad">
            <h1 className="text-serie">Series</h1>
            <div className="width-select">
              <Select
                defaultValue={{ label: "", value: "" }}
                options={Cantidad}
                onChange={(e) => setCant0(e.value)}
              />
            </div>
          </div>
          <div className="form-ejercicios">
            <Select value={eje0} options={select} onChange={(e) => setEje0(e.value)} />
          </div>
          <div className="flex align-items-center">
            <h1>X</h1>
          </div>
          <div className="form-ejercicios">
            <Select options={select} onChange={(e) => setEje1(e.value)} />
          </div>
          <div className="form-repeticiones">
            <Select
              className="form-repeticiones"
              defaultValue={{ label: "", value: "" }}
              options={Repeticiones}
              onChange={(e) => setRepe0(e.value)}
            />
          </div>
          <button onClick={() => eliminarFila1()} className="btn-eliminar">
            <img src={eliminar} alt="" className="btn-eliminar-form" />
          </button>
        </div>
        <div className="filas-form">
          <div className="form-cantidad">
            <h1 className="text-serie">Series</h1>
            <div className="width-select">
              <Select
                defaultValue={{ label: "", value: "" }}
                options={Cantidad}
                onChange={(e) => setCant1(e.value)}
              />
            </div>
          </div>
          <div className="form-ejercicios">
            <Select options={select} onChange={(e) => setEje2(e.value)} />
          </div>
          <div className="flex align-items-center">
            <h1>X</h1>
          </div>
          <div className="form-ejercicios">
            <Select options={select} onChange={(e) => setEje3(e.value)} />
          </div>
          <div className="form-repeticiones">
            <Select
              defaultValue={{ label: "", value: "" }}
              options={Repeticiones}
              onChange={(e) => setRepe1(e.value)}
            />
          </div>
          <button onClick={() => eliminarFila2()} className="btn-eliminar">
            <img src={eliminar} alt="" className="btn-eliminar-form" />
          </button>
        </div>
        <div className="filas-form">
          <div className="form-cantidad">
            <h1 className="text-serie">Series</h1>
            <div className="width-select">
              <Select
                defaultValue={{ label: "", value: "" }}
                options={Cantidad}
                onChange={(e) => setCant2(e.value)}
              />
            </div>
          </div>
          <div className="form-ejercicios">
            <Select options={select} onChange={(e) => setEje4(e.value)} />
          </div>
          <div className="flex align-items-center">
            <h1>X</h1>
          </div>
          <div className="form-ejercicios">
            <Select options={select} onChange={(e) => setEje5(e.value)} />
          </div>
          <div className="form-repeticiones">
            <Select
              defaultValue={{ label: "", value: "" }}
              options={Repeticiones}
              onChange={(e) => setRepe2(e.value)}
            />
          </div>
          <button onClick={() => eliminarFila3()} className="btn-eliminar">
            <img src={eliminar} alt="" className="btn-eliminar-form" />
          </button>
        </div>
        <div className="filas-form">
          <div className="form-cantidad">
            <h1 className="text-serie">Series</h1>
            <div className="width-select">
              <Select
                defaultValue={{ label: "", value: "" }}
                options={Cantidad}
                onChange={(e) => setCant3(e.value)}
              />
            </div>
          </div>
          <div className="form-ejercicios">
            <Select options={select} onChange={(e) => setEje6(e.value)} />
          </div>
          <div className="flex align-items-center">
            <h1>X</h1>
          </div>
          <div className="form-ejercicios">
            <Select options={select} onChange={(e) => setEje7(e.value)} />
          </div>
          <div className="form-repeticiones">
            <Select
              defaultValue={{ label: "", value: "" }}
              options={Repeticiones}
              onChange={(e) => setRepe3(e.value)}
            />
          </div>
          <button onClick={() => eliminarFila4()} className="btn-eliminar">
            <img src={eliminar} alt="" className="btn-eliminar-form" />
          </button>
        </div>
        <div className="filas-form">
          <div className="form-cantidad">
            <h1 className="text-serie">Series</h1>
            <div className="width-select">
              <Select
                defaultValue={{ label: "", value: "" }}
                options={Cantidad}
                onChange={(e) => setCant4(e.value)}
              />
            </div>
          </div>
          <div className="form-ejercicios">
            <Select options={select} onChange={(e) => setEje8(e.value)} />
          </div>
          <div className="flex align-items-center">
            <h1>X</h1>
          </div>
          <div className="form-ejercicios">
            <Select options={select} onChange={(e) => setEje9(e.value)} />
          </div>
          <div className="form-repeticiones">
            <Select
              defaultValue={{ label: "", value: "" }}
              options={Repeticiones}
              onChange={(e) => setRepe4(e.value)}
            />
          </div>
          <button onClick={() => eliminarFila5()} className="btn-eliminar">
            <img src={eliminar} alt="" className="btn-eliminar-form" />
          </button>
        </div>
        <button className="btn btn-sm my-2 w-25 btn-success mx-auto">
          Guardar
        </button>
      </form>
    </div>
  );
}