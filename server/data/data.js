import mongoose from 'mongoose';
import fs from 'fs';
import { parse } from 'csv-parse';
import { mongoConnector } from '../utils/mongoConnector.js';
import { Restaurants } from '../models/zomatoSchema.js'; 
import dotenv from 'dotenv';


dotenv.config({ path: './.env' });

const PATH = './data/zomato.csv';
const mongoUrl = process.env.MONGODB_URL;

mongoConnector(mongoUrl);

const db = mongoose.connection;
db.once('open', () => console.log('Connected to MongoDB'));

const results = [];

const mapCsvRowToSchema = data => {
  return {
    'Restaurant ID': data[0],
    'Restaurant Name': data[1],
    'Country Code': data[2],
    City: data[3],
    Address: data[4],
    Locality: data[5],
    'Locality Verbose': data[6],
    Longitude: data[7],
    Latitude: data[8],
    Cuisines: data[9],
    'Average Cost for two': data[10],
    Currency: data[11],
    'Has Table booking': data[12],
    'Has Online delivery': data[13],
    'Is delivering now': data[14],
    'Switch to order menu': data[15],
    'Price range': data[16],
    'Aggregate rating': data[17],
    'Rating color': data[18],
    'Rating text': data[19],
    Votes: data[20],
  };
};

fs.createReadStream(PATH)
  .pipe(parse({ delimiter: ',', from_line: 2 }))
  .on('data', data => {
    results.push(mapCsvRowToSchema(data));
  })
  .on('end', () => {
    Restaurants.insertMany(results)
      .then(() => {
        console.log('Data successfully loaded into MongoDB');
        mongoose.connection.close();
      })
      .catch(err => {
        console.error('Error loading data into MongoDB:', err);
        mongoose.connection.close();
      });
  });

