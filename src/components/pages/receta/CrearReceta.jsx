import { Form, Button } from "react-bootstrap";

const CrearReceta = () => {
    return (
        <section className="container main">
            <h1 className="display-4 mt-5">Nueva Receta</h1>
            <hr />
            <Form>
                <Form.Group className="mb-3" controlId="formNombreProdcuto">
                    <Form.Label>Nombre receta</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ej: Cafe"
                    />
                    <Form.Text className="text-danger">
                        error
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPrecio">
                    <Form.Label>Descripción receta</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                    <Form.Text className="text-danger">
                        error
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPrecio">
                    <Form.Label>Ingredientes, separados por coma ( , )</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                    <Form.Text className="text-danger">
                        error
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPrecio">
                    <Form.Label>Pasos, separados por salto de línea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                    <Form.Text className="text-danger">
                        error
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formImagen">
                    <Form.Label>Imagen URL*</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
                    />
                    <Form.Text className="text-danger">
                        error
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Guardar
                </Button>
            </Form>
        </section>
    );
};

export default CrearReceta;