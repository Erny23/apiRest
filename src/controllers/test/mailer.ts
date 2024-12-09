import transporter from "../../config/nodemailer/nodemailer";
import { ReqRest } from "../../types/types";

const test:ReqRest = (req, res) => {
    const data = req.body;

    const mailOptions = {
        from: "e.fava13@gmail.com",
        to: "e.fava13@gmail.com",
        subject: "Nueva prueba",
        text: `Esto es una prueba: ${data}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Error al enviar el correo:", error);
            res.status(500).json({ error: "Error al enviar el correo" });
        } else {
            console.log("Correo enviado:", info.response);
            res.status(200).json({ message: "Correo enviado con éxito" });
        }
    });

    /*try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error("Error al enviar el correo:", error);
        res.status(500).json({ error: "Error al enviar el correo" });
    }*/
};

export default test;
