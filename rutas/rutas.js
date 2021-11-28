//function para gestionar las rutas del proyecto
// necesita el objeto express para crear los endpoint
//endpoint:  ruta REST que expone colecciones/singleton/resultados operacion EN FORMATO JSON  

import { request, response } from "express"
import {addCancion, getCancion, getCancionById   , updateCancion ,  deleteCancion }   from '../controladores/ContactoController.js'



const rutas = (app) => {
    app.route('/canciones')
        .get( getCancion) 
        .post( addCancion)

    app.route('/canciones/:cancionid')
        .get(getCancionById )
        .put(updateCancion)
        .delete(deleteCancion   )
}

export default rutas