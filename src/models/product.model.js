import { Schema, model } from 'mongoose';

const productSchema = new Schema(
  {
    name: {
      type: String
    },
    isActive: {
      type: Boolean
    },
    group: {
      type: Schema.Types.ObjectId,
      ref: 'productGroup'
    },
    body: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

export default model('Product', productSchema);
