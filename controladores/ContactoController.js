import mongoose from 'mongoose'
import { CancionSchema } from '../modelos/ContactoModel.js'

// //crear objeto persona basada en el schema:
const Cancion = mongoose.model('Cancion' , CancionSchema)

//crear accion para registrar nueva Persona:

 export const addCancion =  (request, response) => {
    //creando nueva persona:
    let c = new Cancion(request.body)
    //grabar la nueva persona
    c.save((error, p) => {
        if (error) {
            response.send(error)
        } else {
            response.json(c)
        }
    })
}















//crear accion para listar personas

export const getCancion=  (request, response) => {
    Cancion.find({}, (error, contactos) =>{
        if (error) {
            response.send(error)
        } else {
            response.json(contactos)
        }
    })
};

// // accion para obtener una persona por su id

export const getCancionById =  (request, response) => {
    Cancion.findById(request.params.cancionid, (error, contacto) =>{
        if (error) {
            response.send(error)
        } else {
            response.json(contacto)
        }
    })
}

// // accion para actualizar persona por id

export const updateCancion =  (request, response) => {
    Cancion.findOneAndUpdate({_id: request.params.cancionid},
        request.body ,
        {
            new:true
        },
        (error, persona)=>{
            if (error) {
                response.send(error)
            } else {
                response.json(persona)
            }
        })
}

// // delete

export const deleteCancion =  (request, response) => {
    Cancion.deleteOne({_id: request.params.cancionid},
        (error, contacto)=>{
            if (error) {
                response.send(error)
            } else {
                response.json({mensaje: "borrado melo"})
            }
        })
}