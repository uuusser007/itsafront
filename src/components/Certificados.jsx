import React, { useEffect, useState } from "react";
import Pdf from "./Pdf";
import { PDFViewer } from "@react-pdf/renderer";
import axios from "axios";
import QRCode from "qrcode";
const Certificados = () => {
  // Función que verifica si una cadena es una URL válida
function isValidURL(string) {
  try {
    new URL(string);
    return true;
  } catch (error) {
    return false;
  }
}

  const ip = "http://192.168.100.158:8000/itsa/users";
  const [users, setUsers] = useState([]);
  const [qrCodes, setQrCodes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://itsa-api.onrender.com/itsa/users").then((res) => setUsers(res.data));
  }, []);

  useEffect(() => {
    const generateQrCodes = async () => {
      try {
        const qrCodes = await Promise.all(users.map((user) => {
          // Crear el mensaje personalizado para el código QR
          const description="BENEFICIADO"
          const dataToEncode =`\ ${description}: ${user.firstName} ${user.lastName}\nEmail: ${user.email}`;
          console.log(dataToEncode);
          return QRCode.toDataURL(dataToEncode);
        }));
        setQrCodes(qrCodes);
        setLoading(false); // Marcar que la carga ha terminado
      } catch (error) {
        console.error("Error al generar códigos QR:", error);
      }
    };
    

    generateQrCodes();
  }, [users]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <div className="texto">
        {users.map((user, index) => (
          <PDFViewer key={user.id} width="100%" height="800px">
            <Pdf name={user.firstName} last={user.lastName} qr={qrCodes[index]} />
          </PDFViewer>
        ))}
      </div>
    </>
  );
};
export default Certificados