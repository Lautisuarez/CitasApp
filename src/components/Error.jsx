function Error({ mensaje }) {
    return ( 
        <div className="bg-red-700 text-white text-center p-3 mb-3 uppercase rounded-md">
            <p>{mensaje}</p>
        </div>
    );
}

export default Error;