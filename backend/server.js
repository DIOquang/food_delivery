import 'dotenv/config'; // npm install dotenv

import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';
import 'dotenv/config';

const app = express();
const port = 4000;


app.use(express.json());
app.use(cors());

// db connection
connectDB();

// api endpoints
app.use('/api/food', foodRouter);
app.use('/images', express.static('uploads'));
app.use('/api/user', userRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);


app.get('/', (req, res) => {
  res.send('API working!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

// mongodb+srv://traungo456:admin@cluster0.rj0r81m.mongodb.net/?
// token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZTdjMjBkOWRlOTYyNmQ0OGI4NTcwYiIsImlhdCI6MTc0MzM0MzMzMX0.QmZa2Hz-zBKEHg8bpoqRblZgw8Lkm8JBiygFrhjMAEs