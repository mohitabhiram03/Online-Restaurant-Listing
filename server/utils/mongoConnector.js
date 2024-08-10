import mongoose from 'mongoose';

const mongoConnector = mongoURI => {
  mongoose
    .connect(mongoURI, {
      dbName: 'zomato',
      serverSelectionTimeoutMS: 50000,
      socketTimeoutMS: 45000,
    })
    .then(data => console.log(`Connected to ${data.connection.host}`))
    .catch(err => console.log(err));
};

export { mongoConnector };