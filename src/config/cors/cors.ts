// Definición de la lista blanca de orígenes permitidos
const whitelist: string[] = ["https://ernestodev.com"];

// Opciones de CORS
/*const corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};*/

export const corsOptions = {
  origin: function (origin: string | undefined, callback: (error: Error | null, allow: boolean) => void) {
    // Condición no segura
    /* !origin || whitelist.indexOf(origin) !== -1 */
    if (origin && whitelist.indexOf(origin) !== -1) {
      callback(null, true); // Permitir el origen
    } else {
      callback(new Error('Not allowed by CORS'), false); // No permitir el origen
    }
  }
};

export const localOptions = {
  origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
};
