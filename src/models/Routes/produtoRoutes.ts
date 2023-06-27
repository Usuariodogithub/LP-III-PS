import express, { Request, Response } from 'express';
import Produto from '../Produto';

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const { descricao, perecivel } = req.body;
    const produto = new Produto({ descricao, perecivel });
    await produto.save();
    res.status(201).json(produto);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Produto.findByIdAndDelete(id);
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
