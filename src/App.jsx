import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import StateContextRutina from "./context/StateContextRutina";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Rutina from "./pages/Rutina";
import Footer from "./components/Footer";
import "./App.css";
import img from "../src/assets/img/agus1.jpg";
import axios from "axios";

export default function App() {

    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        // ESTO VA SI SE UTILIZA EL SHEETS.BEST
        // try {
        //   const response = await axios.get(
        //     "https://sheet.best/api/sheets/9cce3e16-a014-4a5a-94b2-5f623ad56b79"
        //   );
        //     setData(response.data);
        //   } catch (error) {
        //     console.error("Error fetching data from Google Sheets:", error);
        //   }
        // };
        // fetchData();
        try {
          const response = await axios.get(
            "https://sheets.googleapis.com/v4/spreadsheets/1sngfTAkI7hCRlewJbcxsWPml53bqrS9RbW7FLP1ATmg/values/form!A:G?key=AIzaSyCc9tJnswkxiwUD9exWd_oM1BdeopOewCA"
            );
            setData(response.data.values);
          } catch (error) {
            console.error("Error fetching data from Google Sheets:", error);
          }
        };
        fetchData();
      }, []);
      
    const data2 = [...data]
    data2.shift();

  const [inicio, setInicio] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setInicio(false);
    }, 1000);
  }, []);

  return (
    
    <StateContextRutina>
    {/* <div className={`inicio ${inicio ? "" : "inicio-out"}`}>
      <img src={img} alt="" className="img-presentacion" />
    </div> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home data={data}/>} />
          <Route path="/rutina" element={<Rutina />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </StateContextRutina>
    
  );
}
