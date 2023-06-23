const URL_usuario = import.meta.env.VITE_USUARIO;
const URL_receta = import.meta.env.VITE_PRODUCTO;

export const crearReceta = async (receta)=>{
    try {
        const respuesta = await fetch(URL_receta, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(receta)
        });
        return respuesta;
    }catch(error){
        console.log(error)
    }
}