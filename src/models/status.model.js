import { Schema, model } from 'mongoose';

const statusSchema = new Schema(
  {
    name: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

export default model('Status', statusSchema);
