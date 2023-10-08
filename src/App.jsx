import { useState } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"
import paciente from "./components/Paciente";

export default function App() {
    const [pacientes, setPacientes] = useState([]);

    return (
        <div className="container mx-auto mt-10">
            <Header />
            <div className="mt-12 flex md:flex">
                <Formulario 
                    pacientes = {pacientes}
                    setPacientes = {setPacientes}
                />
                <ListadoPacientes
                    pacientes = {pacientes}
                />
            </div>
        </div>
    )
}