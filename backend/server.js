import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';

const app = express();
const port = 4000;


app.use(express.json());
app.use(cors());

// db connection
connectDB();

// api endpoints
app.use('/api/food', foodRouter);
app.use('/images', express.static('uploads'));


app.get('/', (req, res) => {
  res.send('API working!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

// mongodb+srv://traungo456:admin@cluster0.rj0r81m.mongodb.net/?