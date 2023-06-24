import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { obtenerReceta } from '../helpers/queries';


const DetalleReceta = () => {

    const [receta, setReceta] = useState({})
    const { id } = useParams()
    useEffect(() => {
        obtenerReceta(id).then(respuesta => {
            setReceta(respuesta)
        })
    },[])


    return (
        <Container>
            <section>
                <article className='row d-flex justify-content-center align-items-center p-5'>
                    <img className='col-12 col-md-6' src={receta.imagenReceta} alt={receta.nombreReceta} />
                    <h2 className='col-12 col-md-6 my-3 text-center'>{receta.nombreReceta}</h2>
                </article>
                <article>
                    {receta.descripcionReceta}
                </article>
                <article className='mt-4'>
                    <h3>Ingredientes</h3>
                    <hr />
                    <div>
                        <ul>
                            {receta.ingredientesReceta?.map((ingrediente) => {
                                return <li key={ingrediente}>{ingrediente}</li>
                            })}
                        </ul>
                    </div>
                </article>
                <article className='mt-4'>
                    <h3>Preparación</h3>
                    <hr />
                    <div>
                        <ol>
                            {receta.pasosReceta?.map((paso) => {
                                return <li key={paso}>{paso}</li>
                            })}
                        </ol>
                    </div>
                </article>
            </section>
        </Container>
    );
};


export default DetalleReceta;