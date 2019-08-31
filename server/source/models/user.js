import mongoose, { Schema } from 'mongoose';

export const MODEL_NAME = 'user';
export const COLLECTION_NAME = 'users';

/**
 * @property {string} login user login
 * @property {string} password user password
 */
const UserSchema = new Schema({
  login: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  }
}, { timestamps: true });

export default mongoose.model(MODEL_NAME, UserSchema, COLLECTION_NAME);