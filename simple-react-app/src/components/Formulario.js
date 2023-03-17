import React, {useState, Fragment} from 'react'

const Formulario = () => {

    const [datos, setDatos] = useState({
        nombre: "",
        apellido: ""
    });

    const handleInputChange = (event) =>{
        // console.log(event.target.value);
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) =>{
        event.preventDefault();

        console.log(datos.nombre + " " + datos.apellido);

    }

    return (  
        <Fragment>
            <h2>Formulario</h2>
            <form className='row' onSubmit={enviarDatos}>
                <div className='col'>
                    <input
                        placeholder='Ingrese nombre'
                        className='form-control'
                        type="text"
                        name="nombre"
                        onChange={handleInputChange}
                    ></input>
                    <input
                            placeholder='Ingrese Apellido'
                            className='form-control'
                            type="text"
                            name="apellido"
                            onChange={handleInputChange}
                    ></input>
                    <button className='btn btn-primary' type='submit'>Enviar</button>
                </div>
            </form>

            <h3>{datos.nombre} - {datos.apellido}</h3>

        </Fragment>
        
    );
}
 
export default Formulario;