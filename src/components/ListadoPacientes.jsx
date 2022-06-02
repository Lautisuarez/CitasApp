// COMPONENTES
import Paciente from "./Paciente";


function ListadoPacientes({ pacientes, setPaciente, eliminarPaciente }) {
    return (  
        <div className="md:w-1/2 lg:w-3/5">
            { // Mostramos cierto mensaje dependiendo de si hay pacientes cargados o no
                pacientes && pacientes.length ? (
                    <>
                        <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
                        <p className="text-xl mt-5 mb-10 text-center">
                            Administra tus {""}
                            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                        </p>

                        <div className="md:h-screen overflow-y-scroll">
                            { // Recorremos el array de pacientes y le cargamos los datos al componente Paciente 
                            pacientes.map( paciente => (
                                <Paciente 
                                    key={paciente.id}
                                    paciente={paciente}
                                    setPaciente={setPaciente}
                                    eliminarPaciente={eliminarPaciente}
                                />
                            ))}
                        </div>
                    </>
                ) : (
                    <>
                        <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                        <p className="text-xl mt-5 mb-10 text-center">
                            Comienza agregando pacientes {""}
                            <span className="text-indigo-600 font-bold">y apareceran aca</span>
                        </p>
                    </>
                )
            }
        </div>
    );
}

export default ListadoPacientes;