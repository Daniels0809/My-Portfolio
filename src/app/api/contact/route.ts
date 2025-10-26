import dbConnection from "@/lib/dbconection";
import Contacts from "@/database/models/contactme";

// POST → Crear contacto
export async function POST(req: Request) {
  try {
    await dbConnection();

    const body = await req.json();
    const { name, email, message } = body;

    const newContact = new Contacts({ name, email, message });
    const savedContact = await newContact.save();

    return new Response(
      JSON.stringify({
        ok: true,
        createId: savedContact._id,
      }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error en POST /api/contact:", error);
    return new Response(
      JSON.stringify({ ok: false, message: "Error en el servidor" }),
      { status: 500 }
    );
  }
}

// (opcional) GET → Listar contactos
export async function GET() {
  try {
    await dbConnection();

    const contacts = await Contacts.find();

    return new Response(JSON.stringify({ ok: true, data: contacts }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error en GET /api/contact:", error);
    return new Response(
      JSON.stringify({ ok: false, message: "Error en el servidor" }),
      { status: 500 }
    );
  }
}
