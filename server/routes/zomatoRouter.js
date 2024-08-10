// import express from 'express';
// import { getRestaurantById, getAllRestaurants } from '../controllers/zomatoController.js';

// const restaurantRouter = express.Router();

// restaurantRouter.get('/getOne/:restaurantid', getRestaurantById);
// restaurantRouter.get('/all', getAllRestaurants);

// export { restaurantRouter };
import express from 'express';
import { getRestaurantById, getAllRestaurants } from '../controllers/zomatoController.js';

const restaurantRouter = express.Router();

restaurantRouter.get('/getOne/:restaurantid', getRestaurantById);
restaurantRouter.get('/all', getAllRestaurants);

export { restaurantRouter };
