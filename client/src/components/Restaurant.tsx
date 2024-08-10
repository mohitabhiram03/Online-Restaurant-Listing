import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import newimg from '../assets/bigimg.jpg';


const Restaurant = () => {
    const { restaurantId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [restaurant, setRestaurant] = useState<any>({});

    useEffect(()=>{
        const fetchRestaurant = async () => {
            const result = (await  fetch(`http://localhost:5000/restaurant/getOne/${restaurantId}`)).json().then((res) => {
                setRestaurant({...res.data});
                // let x = {...res.data};
                // console.log(x['Restaurant Name'])
                setIsLoading(false);
            }).catch((error) => {console.log(error)})
        }
        fetchRestaurant();
    },[])
  return (
    
        isLoading ? (
            <div> Loading ...</div>
        ) : (
            <div className="flex flex-col px-56">
                {/* <div className="w-[calc(100vw-20px)] h-[10vh]"> */}
                    {/* Div for Image */}
                {/* </div> */}
                <div className="my-2">

                    <span>{restaurant['Locality']}</span>
                </div>
                    <img src={newimg} alt="Restaurant Image" className="w-[calc(60vw-20px)] px-0 mx-auto my-2"/>
                {/* <div className="flex flex-row justify-around w-[80vw]">
                </div> */}
                <div className="flex flex-row w-full justify-between px-[100px] items-center">
                    <h1 className="text-5xl">{restaurant['Restaurant Name']}</h1>
                    <span className="text-xl bg-lime-500 rounded-lg px-1">{restaurant['Aggregate rating']}</span>
                </div>
                <div className=' px-[100px] my-4'>
                    <h2 className = 'text-2xl'>Address</h2>
                    <span className="text-zinc-500">{restaurant['Address']}</span>
                </div>
                <div className="px-[100px] flex justify-around w-full my-8">
                    <span className={`px-4 py-1 text-white ${restaurant['Is devliering now'] ? 'bg-green-600': 'bg-red-500'} rounded-lg`}>Is Delivering Now</span>
                    <span className={`px-4 py-1 text-white ${restaurant['Has Table booking'] ? 'bg-green-600': 'bg-red-500'} rounded-lg`}>Has Table Booking</span>
                </div>
                <div className="px-[100px]">
                    <h2 className = 'text-2xl'>Cuisines</h2>
                    <span className = "text-zinc-500">{restaurant['Cuisines']}</span>
                </div>
            </div>
        )
    
  )
}

export default Restaurant

