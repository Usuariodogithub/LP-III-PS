import express, { Request, Response } from 'express';
import Item from '../Item';

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const { quantidade, dataChegadaNoEstoque, produto } = req.body;
    const item = new Item({ quantidade, dataChegadaNoEstoque, produto });
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/produto/:produtoId', async (req: Request, res: Response) => {
  try {
    const { produtoId } = req.params;
    const itens = await Item.find({ produto: produtoId });
    res.json(itens);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
