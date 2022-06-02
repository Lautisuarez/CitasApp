import {useState, useEffect} from "react";
// COMPONENTES
import Error from "./Error";

function Formulario({ pacientes, setPacientes, paciente, setPaciente }) {
    const [nombreMascota, setNombreMascota] = useState("");
    const [nombrePropietario, setnombrePropietario] = useState("");
    const [email, setEmail] = useState("");
    const [fechaAlta, setFechaAlta] = useState("");
    const [sintomas, setSintomas] = useState("");

    const [error, setError] = useState(false);

    useEffect(() => {
        if(Object.keys(paciente).length > 0){
            setNombreMascota(paciente.nombreMascota);
            setnombrePropietario(paciente.nombrePropietario);
            setEmail(paciente.email);
            setFechaAlta(paciente.fechaAlta);
            setSintomas(paciente.sintomas);
        }
    }, [paciente]);

    const handleSubmit = e => {
        e.preventDefault();
        
        if([nombreMascota, nombrePropietario, email, fechaAlta, sintomas].includes("")){
            setError(true);
            return;
        } 
        setError(false);

        const generarId = () => {
            const random = Math.random().toString(36).substring(2);
            const fecha = Date.now().toString(36);

            return random+fecha
        }
        const objetoPaciente = {
            nombreMascota,
            nombrePropietario,
            email,
            fechaAlta,
            sintomas
        }

        if(paciente.id){
            // Editando paciente
            objetoPaciente.id = paciente.id;
            // Recorremos el array de pacientes y buscamos el paciente con el id a editar y lo reemplazamos por el editado
            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
            setPacientes(pacientesActualizados)
            setPaciente({}) // Limpiamos el state
        } else {
            // Nuevo paciente
            objetoPaciente.id = generarId();
            setPacientes([...pacientes, objetoPaciente])
        }

        // Limpiamos los campos
        setNombreMascota('');
        setnombrePropietario('');
        setEmail('');
        setFechaAlta('');
        setSintomas('');
    }

    return ( 
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Administrar pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Añade paciente y {""}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>
            {/* --- FORMULARIO --- */}
            <form 
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-3"
                onSubmit={handleSubmit}
            >
                { error && <Error mensaje='Todos los campos son obligatorios'/>}
                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota:</label>
                    <input 
                        id="mascota"
                        type="text" 
                        placeholder="Nombre de la mascota" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombreMascota}
                        onChange={e => setNombreMascota(e.target.value) }
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario:</label>
                    <input 
                        id="propietario"
                        type="text" 
                        placeholder="Nombre del propietario" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombrePropietario}
                        onChange={e => setnombrePropietario(e.target.value) }
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email:</label>
                    <input 
                        id="email"
                        type="email" 
                        placeholder="Email contacto propietario" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={e => setEmail(e.target.value) }
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Fecha de alta:</label>
                    <input 
                        id="alta"
                        type="date" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={fechaAlta}
                        onChange={e => setFechaAlta(e.target.value) }
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas:</label>
                    <textarea 
                        id="sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Describe los sintomas"
                        value={sintomas}
                        onChange={e => setSintomas(e.target.value) }
                    />
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-700 cursor-pointer transition-all"
                    value={ paciente.id ? 'Editar paciente' : 'Agregar paciente'}
                />
            </form>
        </div>
     );
}

export default Formulario;