// Opciones de CORS (básico)
export const localOptions = {
  origin: ["http://localhost:3000", "http://127.0.0.1:3000", "http://localhost:8080", "http://127.0.0.1:8080"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
};

// Definición de la lista blanca de orígenes permitidos
const whitelist: string[] = ["https://ernestodev.com", "http://localhost:3000", "http://127.0.0.1:3000","http://localhost:8080", "http://127.0.0.1:8080"];

// Opciones de CORS (dinámico)
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
