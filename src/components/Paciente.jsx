// SweerAlert
import swal from 'sweetalert';

function Paciente({ paciente, setPaciente, eliminarPaciente }) {
    const { nombreMascota, nombrePropietario, email, fechaAlta, sintomas, id} = paciente;

    const handleEliminar = () => {
        swal({
            title: "Estas seguro?",
            text: `Vas a eliminar al paciente ${nombrePropietario} y su mascota ${nombreMascota}`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                eliminarPaciente(id)
                swal("Paciente eliminado con exito!", {
                icon: "success",
                });
            }
        });
    }
    return ( 
        <div className="ml-3 mb-3 mr-3 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre: {""}
                <span className="font-normal normal-case">{nombreMascota}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre del propietario: {""}
                <span className="font-normal normal-case">{nombrePropietario}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Email: {""}
                <span className="font-normal normal-case">{email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha de alta: {""}
                <span className="font-normal normal-case">{fechaAlta}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Sintomas: {""}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>

            <div className="flex justify-between mt-10">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                    onClick={() => setPaciente(paciente)}
                >Editar</button>
                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                    onClick={handleEliminar}
                >Eliminar</button>
            </div>
        </div>
    );
}

export default Paciente;