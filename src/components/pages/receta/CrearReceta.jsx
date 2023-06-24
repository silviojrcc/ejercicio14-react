import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { crearReceta } from "../../helpers/queries";
import Swal from "sweetalert2";

const CrearReceta = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (recetaNueva) => {

        const recetaAGuardar = {
            ...recetaNueva,
            ingredientesReceta: recetaNueva.ingredientesReceta.split(","),
            pasosReceta: recetaNueva.pasosReceta.split("\n")
        }

        crearReceta(recetaAGuardar).then((respuesta) => {
            if (respuesta && respuesta.status === 201) {
                Swal.fire("Receta creada", `La receta ${recetaNueva.nombreReceta} se ha creado correctamente`, "success");
                reset();
            } else {
                Swal.fire("Error", `La receta ${recetaNueva.nombreReceta} no se ha creado correctamente`, "error");
            }
        });
    };

    return (
        <section className="container main">
            <h1 className="display-4 mt-5">Nueva Receta</h1>
            <hr />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formNombreProdcuto">
                    <Form.Label>Nombre receta</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ej: Cafe"
                        {...register("nombreReceta", {
                            required: "Debe ingresar el nombre de la receta",
                            minLength: {
                                value: 3,
                                message: "El nombre debe tener al menos 3 caracteres"
                            },
                            maxLength: {
                                value: 20,
                                message: "El nombre debe tener máximo 20 caracteres"
                            }
                        })}
                    />
                    <Form.Text className="text-danger">
                        {errors.nombreReceta?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPrecio">
                    <Form.Label>Descripción receta</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={3}
                        {...register("descripcionReceta", {
                            required: "Debe ingresar la descripción de la receta",
                            minLength: {
                                value: 10,
                                message: "La descripción debe tener al menos 10 caracteres"
                            },
                            maxLength: {
                                value: 200,
                                message: "La descripción debe tener máximo 200 caracteres"
                            }
                        })} />
                    <Form.Text className="text-danger">
                        {errors.descripcionReceta?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPrecio">
                    <Form.Label>Ingredientes, separados por coma ( , )</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={3}
                        {...register("ingredientesReceta", {
                            required: "Debe ingresar los ingredientes de la receta",
                            minLength: {
                                value: 10,
                                message: "Los ingredientes deben tener al menos 10 caracteres"
                            },
                            maxLength: {
                                value: 200,
                                message: "Los ingredientes deben tener máximo 200 caracteres"
                            }
                        })} />
                    <Form.Text className="text-danger">
                        {errors.ingredientesReceta?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPrecio">
                    <Form.Label>Pasos, separados por salto de línea</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={3} 
                        {...register("pasosReceta", {
                            required: "Debe ingresar los pasos de la receta",
                            minLength: {
                                value: 10,
                                message: "Los pasos deben tener al menos 10 caracteres"
                            },
                            maxLength: {
                                value: 200,
                                message: "Los pasos deben tener máximo 200 caracteres"
                            }
                        })}/>
                    <Form.Text className="text-danger">
                        {errors.pasosReceta?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formImagen">
                    <Form.Label>Imagen URL*</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese la url de una imagen"
                        {...register("imagenReceta", {
                            required: "Debe ingresar la imagen de la receta",
                        })}
                    />
                    <Form.Text className="text-danger">
                        {errors.imagenReceta?.message}
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