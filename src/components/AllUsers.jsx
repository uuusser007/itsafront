import axios from "axios";
import React, { useEffect, useState } from "react";

const AllUsers = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://itsa-api.onrender.com/itsa/users")
      .then((res) => {
        setData(res.data);
        setLoading(false); // Marcar que la carga ha terminado
      })
      .catch((error) => {
        console.error("Error al cargar usuarios:", error);
        setLoading(false); // Marcar que la carga ha terminado incluso en caso de error
      });
  }, []);

  return (
    <div style={{ background: "#F5F5F5" }} className="h-screen w-full pt-10">
      <div className="container px-1 m-auto">
        <h1 className="text-center font-bold">USUARIOS REGISTRADOS</h1>
        {loading ? (
          <div className="text-center my-4  ">Cargando...</div>
        ) : (
          <table className="m-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Nombre</th>
                <th className="px-4 py-2">Apellido</th>
                <th className="px-4 py-2">Email</th>
              </tr>
            </thead>
            {data.map((user) => (
              <tbody key={user.id} className="w-full">
                <tr className="w-min">
                  <td className="border px-1 py-2">{user.firstName}</td>
                  <td className="border px-1 py-2">{user.lastName}</td>
                  <td className="border px-1 py-2">{user.email}</td>
                </tr>
              </tbody>
            ))}
          </table>
        )}
      </div>
    </div>
  );
};

export default AllUsers;
