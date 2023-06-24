import { useEffect, useState } from 'react';
import CardReceta from './CardReceta';
import { Container } from 'react-bootstrap';
import { obtenerRecetas } from '../../helpers/queries';
import Swal from "sweetalert2";

const RecetasList = () => {

    const [recetas, setRecetas] = useState([]);

    useEffect(() => {
        obtenerRecetas().then((respuesta) => {
            if (respuesta) {
                console.log(respuesta);
                setRecetas(respuesta);
            } else {
                Swal.fire("Oops...", "No hay recetas registradas", "error");
                setRecetas([]);
            }
        })
    }, []);

    return (
        <Container className={`rounded border border-dark p-3 my-5`}>
            <h4 className='text-center'>{recetas.length >= 1 ? "Recetas" : "No hay recetas registradas"}</h4>
            {recetas.length >= 1 && (
                <div className='d-flex row justify-content-around mt-4'>
                    {recetas.map((receta) => (
                        <CardReceta key={receta.id} receta={receta} />
                    ))}
                </div>
            )}
        </Container>
    );
};

export default RecetasList;