import { Container, Table } from 'react-bootstrap';
import RecetaListItem from './receta/RecetaListItem';
import { useState, useEffect } from 'react';
import { obtenerRecetas } from '../helpers/queries';
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";

const Administrador = () => {

    const [recetas, setRecetas] = useState([]);

    useEffect(() => {
        obtenerRecetas().then((respuesta) => {
            if(respuesta){
                console.log(respuesta);
                setRecetas(respuesta);
            } else {
               Swal.fire("Oops...", "No hay recetas registradas", "error"); 
               setRecetas([]);
            }
        })
    }, []);

    return (
        <Container className='main'>
            <div>
                <h1>Recetas cargadas</h1>
                <Link className="btn btn-primary" to='/administrador/crear-receta'>Agregar receta</Link>
            </div>
            <hr />
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Imagen</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {recetas.map((receta) => (
                        <RecetaListItem key={receta.id} receta={receta} />
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default Administrador;