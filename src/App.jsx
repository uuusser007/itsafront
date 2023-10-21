import { HashRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import AllUsers from "./components/AllUsers";
import Register from "./components/Register";
import Certificados from "./components/Certificados";

function App() {
  return (
    <HashRouter>
      <>
      <header className="w-full h-fit bg-slate-500 flex items-center">
            <nav className="w-full h-14 bg-slate-500 flex items-center container m-auto p-2 text-white max-w-5xl justify-between">
              Registro de estudiantes
              <ul className="flex gap-4 cursor-pointer ">
                 <Link to={'/registro'}>
                <li className="rounded-md p-2">registro</li>
                </Link>
                <Link to={'/users'}>
                 <li className="rounded-md p-2">registrados</li>
                </Link>
                <Link to={'/certificados'}>
                <li className="rounded-md p-2">certificados</li>
                </Link>
              </ul>
            </nav>
          </header>
        <Routes>
          <Route path="/users" element={<AllUsers />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/certificados" element={<Certificados />} />
        </Routes>
      </>
    </HashRouter>
  );
}
export default App;
