import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

export default function App() {
    return (
        <div className="container mx-auto mt-10">
            <Header />
            <div className="mt-12 flex md:flex">
                <Formulario />
                <ListadoPacientes />
            </div>
        </div>
    )
}