import { Schema, model } from 'mongoose';

const orderStatusSchema = new Schema(
  {
    order: {
      type: Schema.Types.ObjectId,
      ref: 'order'
    },
    status: {
      type: Schema.Types.ObjectId,
      ref: 'status'
    },
    isActive: {
      type: Boolean,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

export default model('OrderStatus', orderStatusSchema);
