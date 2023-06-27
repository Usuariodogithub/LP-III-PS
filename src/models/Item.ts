import { Schema, model, Document } from 'mongoose';
import { IProduto } from './Produto';

interface IItem extends Document {
  quantidade: number;
  dataChegadaNoEstoque: Date;
  produto: IProduto['_id'];
}

const ItemSchema = new Schema({
  quantidade: {
    type: Number,
    required: true,
  },
  dataChegadaNoEstoque: {
    type: Date,
    required: true,
  },
  produto: {
    type: Schema.Types.ObjectId,
    ref: 'Produto',
    required: true,
  },
});

export default model<IItem>('Item', ItemSchema);
