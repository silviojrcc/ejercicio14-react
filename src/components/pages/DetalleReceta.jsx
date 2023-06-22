import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

const DetalleReceta = props => {
    return (
        <Container>
            <section>
                <article className='row d-flex justify-content-center align-items-center p-5'>
                    <img className='col-12 col-md-6' src="https://media.minutouno.com/p/140fd8e8277fd049b1d0bacf9caba8ce/adjuntos/150/imagenes/039/020/0039020458/guiso-lentejas-maikyjpg.jpg" alt="" />
                    <h2 className='col-12 col-md-6 my-3 text-center'>Guiso de lentejas</h2>
                </article>
                <article>
                    Para palear el frío, una opción conocida, rica y nutritiva es preparar un guiso de lentejas. En sus variedades, el guiso de lentejas puede incluir entre sus ingredientes chorizo, carne o hacerse de forma tradicional, aportando pocas calorías pero suficientes para calentar el cuerpo. El paso a paso para prepararlo y una receta plus: con bondiola y osobuco.
                </article>
                <article className='mt-4'>
                    <h3>Ingredientes</h3>
                    <hr />
                    <div>
                        <ul>
                            <li>Lentegas 500gr</li>
                            <li>Panceta 300gr</li>
                            <li>Chorizo Colorado 200gr</li>
                            <li>Cebolla 1 unidad</li>
                            <li>Zanahoria 300gr</li>
                            <li>Perejil a gusto</li>
                            <li>Ciboullete al gusto</li>
                            <li>Sal al gusto</li>
                            <li>Agua c/n</li>
                            <li>Aceite de oliva c/n</li>
                        </ul>
                    </div>
                </article>
                <article className='mt-4'>
                    <h3>Preparación</h3>
                    <hr />
                    <div>
                        <ol>
                            <li>En un recipiente con abundante agua colocar las lentejas y dejarlas remojar de un día para el otro.</li>
                            <li>Luego, cortar el ajo y la cebolla en brunoise, cortar la panceta y la zanahoria en trocitos, reservar.</li>
                            <li>En una olla, sofreír el ajo, la cebolla y la panceta, una vez que dore agregar el zapallo, la zanahoria, las lentejas remojadas y el agua. Dejar cocinar y luego agregar el chorizo colorado –previamente cortado en trocitos-.</li>
                            <li>Terminar de cocinar hasta que el grano esté blandito y echar perejil previamente cortado.</li>
                            <li>Ensamble del plato: Servir el guiso de lentejas en un plato hondo y perfumar con aceite de oliva y ciboullete.</li>
                        </ol>
                    </div>
                </article>
            </section>
        </Container>
    );
};

DetalleReceta.propTypes = {

};

export default DetalleReceta;