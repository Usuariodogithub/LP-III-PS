import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import produtoRoutes from './models/Routes/produtoRoutes';
import itemRoutes from './models/Routes/itemRoutes';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/produtos', produtoRoutes);
app.use('/itens', itemRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Conecte-se ao banco de dados MongoDB
mongoose
  .connect('mongodb://localhost:27017/loja-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });
