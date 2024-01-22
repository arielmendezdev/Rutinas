export default function Home({data}) {

  
  
  return (
    <div>
      <h1 className='text-6xl font-serif flex justify-center h-96 align-items-center'>Bienvenidos</h1>
      {/* <h1>Google Sheets Data</h1> */}
      <div className="flex justify-center w-75 gap-10 mx-auto mt-5">
      </div>




    </div>
  );

}

  























{/* <div>
    <h1>Asistencias</h1>
    {data.map((row, index) =>
      row[2] === "Asistiré" ? (
        <div
          key={index}
          className=" p-4 flex flex-col w-80 justify-center border mx-auto mt-4 align-items-center"
        >
          <h1>{`${row[1].toUpperCase()} - ${row[3]}`}</h1>
          <h4>{row[4]}</h4>
        </div>
      ) : null
    )}
  </div>
  <div>
    <h1>Inasistencias</h1>
    {data.map((row, index) =>
      row[2] === "No asistiré" ? (
        <div
          key={index}
          className=" p-4 flex flex-col justify-center border mx-auto mt-4 align-items-center"
        >
          
          <h1>{`${row[1].toUpperCase()} - ${row[3]}`}</h1>
          
          <h4>{row[4]}</h4>
          
        </div>
      ) : null
    )}
  </div> */}

  {/* ESTO VA SI SE UTILIZA EL SHEETS.BEST */}
  {/* <div>
    <h1>Asistirán</h1>
    {data.map((row, index) =>
      row.Asistencia === "Asistiré" ? (
        <div
          key={index}
          className="h-12 p-4 flex justify-center border mx-auto mt-4 align-items-center"
        >
          <h1>{`${row.Nombre.toUpperCase()} - ${row.Ciudad}`}</h1>
        </div>
      ) : null
    )}
  </div>
  <div>
    <h1>No asistirán</h1>
    {data.map((row, index) =>
      row.Asistencia === "No asistiré" ? (
        <div
          key={index}
          className="h-12 p-4 flex justify-center border mx-auto mt-4 align-items-center"
        >
          <h1>{`${row.Nombre.toUpperCase()} - ${row.Ciudad}`}</h1>
        </div>
      ) : null
    )}
  </div> */}