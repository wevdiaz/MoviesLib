import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";

import './App.css'

function App() {

  return (
    <div className="App">
      <h2>Novo Projeto</h2>
      <Navbar />
      
      <Outlet />
    </div>
  )
}

export default App
