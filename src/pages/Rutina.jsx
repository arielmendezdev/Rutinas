import "../assets/css/Rutina.css";
import Form from "../components/formularios/Form";
import FormInfo from "../components/formularios/FormInfo";
import PdfGenerator from "../components/PDFGenerator";

export default function Rutina() {

  return (
    <div className="">

      <FormInfo />
      <div className="caja-formularios">
        <Form />
        {/* <FormPecho />
        <FormEspalda />
        <FormHombros />
        <FormPiernas />
        <FormBrazos /> */}
      </div>
      <div className="">
        <PdfGenerator />
      </div>
    </div>
  );
}

