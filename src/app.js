import express from 'express'
import config from './config'

import routes from './routes/routes'

const app = express()


//settings
app.set('port', config.port)

// Middleware de registro de tiempo y recursos
const logMiddleware = (req, res, next) => {
    const start = new Date(); // Tiempo de inicio de la consulta

    res.on("finish", () => {
        const end = new Date(); // Tiempo de finalización de la consulta
        const elapsed = end - start; // Tiempo transcurrido en milisegundos
        const memory = process.memoryUsage().heapUsed; // Uso de memoria en bytes

        console.log(`Tiempo de consulta: ${elapsed} ms`);
        console.log(`Uso de memoria: ${memory} bytes`);
    });

    next();
};

// Aplicar middleware a todas las rutas
app.use(logMiddleware);

app.use(routes)
export default app