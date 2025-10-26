import { Schema, model, Model } from "mongoose";

const contactSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    message: {
        type: String,
    }

});

// Utiliza un patrón singleton para garantizar que solo se compile una instancia del modelo
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let Contacts: Model<any>;
try {
    // Intenta compilar el modelo solo una vez
    Contacts = model("contacts");
// eslint-disable-next-line @typescript-eslint/no-unused-vars
} catch (error) {
    // Si el modelo ya está compilado, úsalo
    Contacts = model("contacts", contactSchema);
}

export default Contacts;