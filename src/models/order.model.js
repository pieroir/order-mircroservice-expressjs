import { Schema, model } from 'mongoose';

const orderSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user'
    },
    pay: {
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

export default model('Order', orderSchema);
