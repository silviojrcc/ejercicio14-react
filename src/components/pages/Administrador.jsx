import { Container, Button, Table } from 'react-bootstrap';
import RecetaListItem from './receta/RecetaListItem';

const Administrador = () => {
    return (
        <Container className='main'>
            <div>
                <h1>Recetas cargadas</h1>
                <Button>Agregar receta</Button>
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
                    <RecetaListItem/>
                    <RecetaListItem/>
                    <RecetaListItem/>
                    <RecetaListItem/>
                    <RecetaListItem/>
                    <RecetaListItem/>
                </tbody>
            </Table>
        </Container>
    );
};

export default Administrador;