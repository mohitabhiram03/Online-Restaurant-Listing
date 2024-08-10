import express from 'express';
import dotenv from 'dotenv';
import { mongoConnector } from '../utils/mongoConnector.js';
// import { restaurantRouter } from './routes/zomatoRouter.js';
import { restaurantRouter } from '../routes/zomatoRouter.js';
import cors from 'cors';

dotenv.config({ path: './.env' });

// constants
const app = express();
const PORT = process.env.PORT || 3000;

// database connection
const mongoUrl = process.env.MONGODB_URL;
mongoConnector(mongoUrl);

// middlewares
app.use(
  cors({
    origin: 'http://localhost:5173',
  })
);
app.use(express.json());
app.use('/restaurant', restaurantRouter);

// routes
app.get('/', (req, res) => {
  res.status(200).send('Hello world');
});

app.listen(PORT, () => console.log(`successfully started server on http://localhost:${PORT}`));