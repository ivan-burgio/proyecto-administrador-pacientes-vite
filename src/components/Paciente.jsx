export default function paciente() {
    return (
        <div className="m-5 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre: {''}
                <span className="font-normal normal-case">Poroto</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Propietario: {''}
                <span className="font-normal normal-case">Ivan</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Email: {''}
                <span className="font-normal normal-case">correo@correo.com</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha Alta: {''}
                <span className="font-normal normal-case">6 de Junio de 2022</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Sintomas: {''}
                <span className="font-normal normal-case">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste et omnis modi provident ab ipsum nisi animi vitae totam sed distinctio iusto repellat deleniti tenetur, debitis harum accusamus possimus repellendus.</span>
            </p>
        </div>
    )
}