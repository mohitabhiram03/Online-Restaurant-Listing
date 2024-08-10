import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';
import { Link } from 'react-router-dom';
import { MapPin, Star } from 'lucide-react';
import newimg from '../assets/images.jpg';
import { truncateString } from '../utils/utilMethods';




interface RestaurantListProps {
  selectedCountryCode: number; 
}

const RestaurantList: React.FC<RestaurantListProps> = ({ selectedCountryCode }) => {
  const [restaurants, setRestaurants] = useState<any[]>([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch("http://localhost:5000/restaurant/all");
        const data = await result.json();
        setRestaurants(data.restaurants);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);


  useEffect(() => {
    if (selectedCountryCode === 0) {
      setFilteredRestaurants(restaurants);
    } else {
      const filtered = restaurants.filter(restaurant => restaurant['Country Code'] === selectedCountryCode.toString());
      setFilteredRestaurants(filtered);
    }
  }, [selectedCountryCode, restaurants]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredRestaurants.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col">
      <div className="w-full min-h-[70vh] p-5 grid grid-cols-1 gap-10 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {isLoading ? (
          <div className="text-5xl">Loading...</div>
        ) : currentPosts.length === 0 ? (
          <div className="text-2xl text-gray-600">No restaurants found</div>
        ) : (
          currentPosts.map((restaurant) => (
            <Link to={`/${restaurant['Restaurant ID']}`} className="w-[320px] h-[350px] rounded-lg m-1 flex flex-col shadow-[0_1px_10px_1px_rgba(0,0,0,0.3)] overflow-hidden" key={restaurant['Restaurant ID']}>
              <img src={newimg} className="h-1/2 w-full object-cover" alt="Restaurant" />
              <div className="p-4 gap-y-1">
                <h2 className="text-2xl font-Libre">{truncateString(restaurant['Restaurant Name'], 20)}</h2>
                <div className="flex justify-between">
                  <div className="flex flex-row items-center text-zinc-500">
                    <MapPin size={20} strokeWidth={0.75} />
                    <p className="text-xs">{restaurant['City']}</p>
                  </div>
                  <div className="flex flex-row items-center gap-1 bg-green-400 text-white px-1 rounded-md">
                    <Star size={16} />
                    <p>{restaurant['Aggregate rating']}</p>
                  </div>
                </div>
                <div className="flex justify-end text-zinc-400 my-2">
                  <p className="text-xs">Average cost for two: ₹ {restaurant['Average Cost for two']}</p>
                </div>
                <p className="text-md">{restaurant['Cuisines']}</p>
              </div>
            </Link>
          ))
        )}
      </div>
      <Pagination postsPerPage={postsPerPage} totalPosts={filteredRestaurants.length} currentPage={currentPage} paginate={paginate} />
    </div>
  );
};

export default RestaurantList;
