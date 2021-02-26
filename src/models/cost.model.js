import { Schema, model } from 'mongoose';

const costSchema = new Schema(
  {
    name: {
      type: String
    },
    order: {
      type: Schema.Types.ObjectId,
      ref: 'order'
    },
    pay: {
      type: String,
      default: null
    },
    price: {
      type: String
    },
    mode: {
      type: String
    },
    comment: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

export default model('Cost', costSchema);
