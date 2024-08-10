import { Restaurants } from '../models/zomatoSchema.js';


const getRestaurantById = async (req, res) => {
  const { restaurantid } = req.params;

  if (!restaurantid) {
    return res.status(400).json({ message: 'please provide restaurant id' });
  }

  const restaurant = await Restaurants.findOne({ 'Restaurant ID': restaurantid });
  return res.status(200).json({ data: restaurant });
};

// const getAllRestaurants = async (req, res) => {
//     const restaurants = await Restaurants.find();
//     console.log(restaurants);
//   return res.status(200).json({ restaurants: restaurants });
// };

const getAllRestaurants = async (req, res) => {
  try {
    let restaurants;
    if (req.query.countryCode) {
      restaurants = await Restaurants.find({ 'Country Code': req.query.countryCode });
    } else {
      restaurants = await Restaurants.find();
    }
    return res.status(200).json({ restaurants });
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};


export { getRestaurantById, getAllRestaurants };
