import nodemailer from "nodemailer";

const isProduction = process.env.NODE_ENV === "production";

// Configuración del transportador de Nodemailer
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // Servidor SMTP de Gmail
    port: 587, // Puerto SMTP de Gmail
    secure: false, // Habilita la conexión segura (SSL/TLS)
    //service: "gmail", // Servicio de correo
    auth: {
        user: "e.fava13@gmail.com",//process.env.EMAIL_USER,
        pass: "xdha idsy tczm qkfm",//process.env.EMAIL_PASS,
    },
    tls: {
        rejectUnauthorized: isProduction // Deshabilita la verificación del certificado
    }
});

export default transporter;
