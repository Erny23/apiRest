import transporter from "../../config/nodemailer/nodemailer";
import { ReqRest } from "../../types/types";

const mailer:ReqRest = async (req, res) => {
    const { firstName, lastName, company, email, phone, message } = req.body;

    // Validar que se recibieron los datos
    if (!firstName || !lastName || !company || !email || !phone || !message) {
        return res.status(400).json({ error: "Faltan datos requeridos" });
    }

    // Configuración del correo
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: "ernestofava@ernestodev.com, e.fava13@gmail.com",
        subject: "Portafolio - Nuevo contacto",
        html: `
            <h1 style="font-size: large; font-weight: bold;">
                Recibimos un nuevo contacto interesado: 
            </h1>
            <ul>
                <li>
                    <div style="display: flex;">
                        <span>Nombre: </span>
                        <span style="margin-left: 3px;">${firstName}</span>
                        <span style="margin-left: 3px;">${lastName}</span>
                    </div>
                </li>
                <li>Empresa: ${company}</li>
                <li>Email: ${email}</li>
                <li>Teléfono: ${phone}</li>
                <li>Mensaje: ${message}</li>
            </ul>
        `,
    };

    try {
        // Enviar el correo
        await transporter.sendMail(mailOptions);
        res.status(200).json({ 
            message: "¡Muchas gracias por contactarme! Estoy emocionado de conocer más sobre tu proyecto. Revisaré tu mensaje lo antes posible y te responderé a la brevedad." 
        });
    } catch (error) {
        console.error("Error al enviar el correo:", error);
        res.status(500).json({ error: "Error al enviar el correo" });
    }
};

export default mailer;
