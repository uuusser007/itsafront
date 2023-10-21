import React, { useEffect, useState } from "react";
import Pdf from "./Pdf";
import { PDFViewer } from "@react-pdf/renderer";
import axios from "axios";
const Certificados = () => {

  const ip= "http://192.168.100.158:8000/itsa/users";
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("https://itsa-api.onrender.com/itsa/users").then((res) => setUsers(res.data));

  }, []);
  return (
<>
   <div className="texto">
   { 
   users.map((user)=>(
     <PDFViewer key={user.id} width="100%" height="800px" >
        <Pdf name={user.firstName} last={user.lastName} />
    </PDFViewer>
   ))
  }

  </div>
</>
  );
};

export default Certificados;
