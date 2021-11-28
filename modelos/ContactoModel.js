import mongoose from 'mongoose'

//Definir  el esquema de persona:
const Schema = mongoose.Schema;

export const CancionSchema = new Schema({  
    nombreCancion: {
        type: String,
        required: "Ingrese nombre"
    },
    nombreAutor: {
        type: String,
        required: "apellido"
    },
    genero:{
        type: String
    },
    duracion: {
        type: String
    },
    fecha_creacion: {
        type:Date,
        default: Date.now
    }
 })
