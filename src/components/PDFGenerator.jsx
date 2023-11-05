import React, { useContext, useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "../assets/css/PDFGenerator.css";
import ContenidoPDF from "./ContenidoPDF";
import { contextoRutina } from "../context/contextoRutina";

export default function PdfGenerator() {
  const { info } = useContext(contextoRutina);

  const contentRef = useRef();

  const generatePdf = () => {
    // html2canvas(document.getElementById("divpdf")).then((canvas) => {
    //   const imagen = canvas.toDataURL("image/jpg");
    //   console.log(imagen);

    //   const docu = new jsPDF({
    //     orientation: "horizontal",
    //     unit: "mm",
    //     format: [297, 210],
    //   });
    //   docu.addImage(imagen, "PNG", 0, 0, 297, 210);
    //   console.log(docu);
    //   docu.save(`Rutina-${info[0].nombre}.pdf`);
    // });

    // LA FORMA DE UTILIZACION DEL HTML2CANVAS ES QUE HACE UN SCREENSHOT DEL DIV QUE SE LE ASIGNA Y ESO LO UTILIZA COMO UNA IMAGEN Y LUEGO SE PEGA LA IMAGEN EN EL JSPDF

    const doc = new jsPDF({
      orientation: "horizontal",
      unit: "mm",
      format: [594, 420],
    });
    const content = contentRef.current;

    doc.html(content, {
      callback: function (pdf) {
        doc.deletePage(2);
        pdf.save(`Rutina-${info[0].nombre}.pdf`);
      },
    });
    
  };

  return (
    <>
      <div className="pdf-general">
        <div className="div-pdf">
          <div ref={contentRef}>
            <div className="pdf-cuerpo-general">
              <ContenidoPDF />
            </div>
          </div>
        </div>
        <button className="btn-pdf btn btn-danger" onClick={generatePdf}>
          Generar PDF
        </button>
      </div>
    </>
  );
}
