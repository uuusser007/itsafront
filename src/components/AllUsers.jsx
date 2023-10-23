import axios from "axios";
import React, { useEffect, useState } from "react";

const AllUsers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://itsa-api.onrender.com/itsa/users").then((res) => setData(res.data));
  }, []);


  return (
    <>

      <div style={{ background: "#F5F5F5" }} className="h-screen w-full p-10">
        <div className="container  px-2 m-auto">
          <h1 className="text-center font-bold ">USUARIOS REGISTRADOS </h1>
          <table className="m-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Nombre</th>
                <th className="px-4 py-2">Apellido</th>
                <th className="px-4 py-2">Email</th>
              </tr>
            </thead>
            {data.map((user) => (
              <tbody key={user.id}>
                <tr>
                  <td className="border px-4 py-2">{user.firstName}</td>
                  <td className="border px-4 py-2">{user.lastName}</td>
                  <td className="border px-4 py-2">{user.email}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </>
  );
};
export default AllUsers;
