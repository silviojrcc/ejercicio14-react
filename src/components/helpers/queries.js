const URL_receta = import.meta.env.VITE_RECETA;
const URL_usuario = import.meta.env.VITE_USUARIO;

export const obtenerRecetas = async () => {
    try {
        const respuesta = await fetch(URL_receta);
        const listaRecetas = await respuesta.json();
        return listaRecetas;
    } catch (error) {
        console.log(error)
    }
}

export const crearReceta = async (receta) => {
    try {
        const respuesta = await fetch(URL_receta, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(receta)
        });
        return respuesta;
    } catch (error) {
        console.log(error)
    }
}

export const login = async (usuario) => {
    try {
        const respuesta = await fetch(URL_usuario);
        const listaUsuarios = await respuesta.json();
        const usuarioBuscado = listaUsuarios.find((itemUsuario) => itemUsuario.email === usuario.email);
        if (usuarioBuscado) {
            if (usuarioBuscado.password === usuario.password) {
                return usuarioBuscado
            } else {
                console.log('el password es incorrecto')
                return null
            }
        } else {
            console.log('el mail no existe')
            return null
        }
    } catch (error) {
        console.log(error)
    }
}