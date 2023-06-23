const URL_receta = import.meta.env.VITE_RECETA;

export const obtenerRecetas = async ()=>{
    try {
        const respuesta = await fetch(URL_receta);
        const listaRecetas = await respuesta.json();
        return listaRecetas;
    }catch(error){
        console.log(error)
    }
}

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