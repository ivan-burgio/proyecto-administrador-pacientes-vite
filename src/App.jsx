import { useState } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

export default function App() {
    const [pacientes, setPacientes] = useState([]);
    const [paciente, setPaciente] = useState({});

    return (
        <div className="container mx-auto mt-10">
            <Header />
            <div className="mt-12 flex md:flex">
                <Formulario 
                    pacientes = {pacientes}
                    setPacientes = {setPacientes}
                    paciente = {paciente}
                    setPaciente={setPaciente}
                />
                <ListadoPacientes
                    pacientes = {pacientes}
                    setPaciente = {setPaciente}
                />
            </div>
        </div>
    )
}