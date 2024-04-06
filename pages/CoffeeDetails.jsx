import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Importing useParams hook from react-router-dom
import axios from 'axios';
import NotFoundPage from './components/fourZerofour';
import '../styles/CoffeeDetails.css';

export default function CoffeeDetails({ locale }) {
  const { slug } = useParams(); // Extracting slug from URL parameters using useParams hook
    const [coffee, setCoffee] = useState(null); // State for storing coffee data
    const api = locale === 'tr' ? 'https://strapidevelopment.onrender.com/api/coffees?locale=tr' : 'https://strapidevelopment.onrender.com/api/coffees?locale=en';
    // const api = "https://postgresknex.vercel.app/coffees";
    useEffect(() => {
        // Function to fetch coffee data
        const fetchData = async () => {
            try {
              const response = await axios.get(`${api}&slug=${slug}`);// Fetching coffee data with slug
              const coffeeData = response.data.data.find(item => item.attributes.slug === slug); // Finding coffee data with matching slug
              // Burası api değiştiğinde kullanılacak
              // const response = await axios.get(`${api}?slug=${slug}`); // Fetching coffee data with slug
              // const coffeeData = response.data.find(item => item.slug === slug); // Finding coffee data with matching slug
              setCoffee(coffeeData); // Setting coffee data to state
            } catch (error) {
              console.log(error); // Logging any errors that occur during fetching
            }
        };

        fetchData(); // Calling fetchData function
    }, [api, slug]); // Dependency array to re-run effect when slug changes

    // Rendering NotFoundPage component if coffee data is not found
    if (!setCoffee) {
        return <NotFoundPage />;
    }

    console.log(coffee); // Logging coffee data

    return (
      <>
        <div className='container' key={coffee?.id}> {/* Container for coffee details */}
          <div className='div-image'> {/* Container for coffee image */}
            <img src={`${coffee?.attributes?.imgUrl}`} alt={coffee?.attributes?.name} /> {/* Displaying coffee image */}
            {/* Burası api değiştiğinde kullanılacak */}
            {/* <img src={`${coffee?.img_url}`} alt={coffee?.name} /> Displaying coffee image */}
          </div>
          <h2>{coffee?.attributes?.name}</h2> {/* Displaying coffee name */}
          <p>Description: {coffee?.attributes?.description}</p> {/* Displaying coffee description */}
          <p>Origin: {coffee?.attributes?.origin}</p> {/* Displaying coffee origin */}
          <p>Price: {coffee?.attributes?.price} 💲</p> {/* Displaying coffee price */}
          {/* Burası api değiştiğinde kullanılacak */}
          {/* <h2>{coffee?.name}</h2> Displaying coffee name */}
          {/* <p>Description: {coffee?.description}</p> Displaying coffee description */}
          {/* <p>Origin: {coffee?.origin}</p> Displaying coffee origin */}
          {/* <p>Price: {coffee?.price} 💲</p> Displaying coffee price */}
        </div>
      </>
    )
}