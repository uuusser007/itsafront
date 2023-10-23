import React, { useEffect, useState } from "react";
import Pdf from "./Pdf";
import { PDFViewer } from "@react-pdf/renderer";
import axios from "axios";
import QRCode from "qrcode";

const Certificados = () => {
  function isValidURL(string) {
    try {
      new URL(string);
      return true;
    } catch (error) {
      return false;
    }
  }

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
          const description = "BENEFICIADO";
          const dataToEncode = `${description}: ${user.firstName} ${user.lastName}\nEmail: ${user.email}`;
          return QRCode.toDataURL(dataToEncode);
        }));
        setQrCodes(qrCodes);
        setLoading(false);
      } catch (error) {
        console.error("Error al generar códigos QR:", error);
        setLoading(false); // Asegurarse de que la carga termine incluso en caso de error
      }
    };

    generateQrCodes();
  }, [users]);

  if (loading) {
    return <div className="loading-screen">Cargando...</div>;
  }

  return (
    <>
 
      <div className="texto">
        {users.map((user, index) => (
          <PDFViewer key={user.id} width="100%" className="sm:h-screen lg:h-[800px]">
            <Pdf name={user.firstName} last={user.lastName} qr={qrCodes[index]} />
          </PDFViewer>
        ))}
      </div>
    </>
  );
};

export default Certificados;
