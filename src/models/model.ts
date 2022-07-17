import mongoose, { Schema, Document } from 'mongoose';
// ------------------------------

export interface Subscriber {
  firstName: string;
  lastName: string;
  picture: string;
  gender: string;
  dateOfBirth: string;
  profession: string;
  shoeSize: number;
  hairColor: number;
  hairLength: number;
  braSize: number;
  waistSize: number;
  height: number;
  weight: number;
  cast: string;
}

export interface SubscriberModel extends Subscriber, Document {}

const subscriberSchema: Schema = new Schema({
  firstName: {
    type: 'string',
    required: true,
  },
  lastName: {
    type: 'string',
    required: true,
  },
  picture: {
    type: 'string',
  },
  gender: {
    type: 'string',
    required: true,
  },
  dateOfBirth: {
    type: 'string',
    required: true,
  },
  profession: {
    type: 'string',
    required: true,
  },
  shoeSize: {
    type: 'number',
    required: true,
  },
  hairColor: {
    type: 'number',
    required: true,
  },
  hairLength: {
    type: 'number',
    required: true,
  },
  braSize: {
    type: 'number',
    required: true,
  },
  waistSize: {
    type: 'number',
    required: true,
  },
  height: {
    type: 'number',
    required: true,
  },
  weight: {
    type: 'number',
    required: true,
  },
  cast: {
    type: 'string',
    required: true,
  },
});

export default mongoose.model<SubscriberModel>('Subscriber', subscriberSchema);
