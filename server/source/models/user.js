import mongoose, { Schema } from 'mongoose';

import { hash, compare } from '../middlewares/bcrypt';

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

UserSchema.pre('save', function(next) {
  if (!this.isModified('password')) {
    return next();
  }

  this.password = hash(this.password);
  return next();
});

UserSchema.methods.comparePassword = function(text) {
  return compare(text, this.password);
};

UserSchema.set('toJSON',
  {
    virtuals: true,
    transform: (doc, ret) => { delete ret._id; delete ret.__v; },
  }
);

export default mongoose.model(MODEL_NAME, UserSchema, COLLECTION_NAME);