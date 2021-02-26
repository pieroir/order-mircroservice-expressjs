import { Schema, model } from 'mongoose';

const productGroupSchema = new Schema(
  {
    name: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

export default model('ProductGroup', productGroupSchema);
