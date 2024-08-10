import { Schema, model } from 'mongoose';

const zomatoSchema = new Schema({
  'Restaurant ID': {
    type: String,
    default: 0,
  },
  'Restaurant Name': {
    type: String,
    default: 'Unknown',
  },
  'Country Code': {
    type: String,
    default: 0,
  },
  City: {
    type: String,
    default: 'Unknown',
  },
  Address: {
    type: String,
    default: 'Unknown',
  },
  Locality: {
    type: String,
    default: 'Unknown',
  },
  'Locality Verbose': {
    type: String,
    default: 'Unknown',
  },
  Longitude: {
    type: String,
    default: 0.0,
  },
  Latitude: {
    type: String,
    default: 0.0,
  },
  Cuisines: {
    type: String,
    default: 'Unknown',
  },
  'Average Cost for two': {
    type: String,
    default: 0,
  },
  Currency: {
    type: String,
    default: 'INR',
  },
  'Has Table booking': {
    type: String,
    default: 'No',
  },
  'Has Online delivery': {
    type: String,
    default: 'No',
  },
  'Is delivering now': {
    type: String,
    default: 'No',
  },
  'Switch to order menu': {
    type: String,
    default: 'No',
  },
  'Price range': {
    type: String,
    default: 1,
  },
  'Aggregate rating': {
    type: String,
    default: 0,
  },
  'Rating color': {
    type: String,
    default: 'Unknown',
  },
  'Rating text': {
    type: String,
    default: 'Not rated',
  },
  Votes: {
    type: String,
    default: 0,
  },
});

// restaurantSchema.statics.getPaginatedRestaurants = function (page) {
//   const resultsPerPage = 15;
//   return this.find({})
//     .lean()
//     .skip(page * resultsPerPage)
//     .limit(resultsPerPage);
// };

export const Restaurants = model('Restaurants', zomatoSchema);
