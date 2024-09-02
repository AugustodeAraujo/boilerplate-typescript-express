import express from 'express';
import swaggerUi from 'swagger-ui-express';
import routes from './routes';
import swaggerDocument from './swagger-output.json';

const app = express();

app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
