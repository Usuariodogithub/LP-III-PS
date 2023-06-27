import { Schema, model, Document } from 'mongoose';

interface IProduto extends Document {
  descricao: string;
  perecivel: boolean;
}

const ProdutoSchema = new Schema({
  descricao: {
    type: String,
    required: true,
  },
  perecivel: {
    type: Boolean,
    required: true,
  },
});

export default model<IProduto>('Produto', ProdutoSchema);
