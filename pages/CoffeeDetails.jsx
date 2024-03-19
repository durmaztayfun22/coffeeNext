import React, { useEffect, useState } from 'react'; // Importing React library for JSX and hooks
import { useParams } from 'react-router-dom'; // Importing useParams hook from react-router-dom
import axios from 'axios'; // Importing axios for HTTP requests
import NotFoundPage from '../public/fourZerofour'; // Importing NotFoundPage component
import '../styles/CoffeeDetails.css' // Importing CSS file for styling

// const api = 'https://strapidevelopment.onrender.com/api/coffees'; // API endpoint for fetching coffee data

const CoffeeDetails = ({ locale }) => {
    const { slug } = useParams(); // Extracting slug from URL parameters using useParams hook
    const [coffee, setCoffee] = useState(null); // State for storing coffee data
    const api = locale === 'tr' ? 'https://strapidevelopment.onrender.com/api/coffees?locale=tr' : 'https://strapidevelopment.onrender.com/api/coffees?locale=en';
    useEffect(() => {
        // Function to fetch coffee data
        const fetchData = async () => {
            try {
              const response = await axios.get(`${api}&slug=${slug}`);// Fetching coffee data with slug
                const coffeeData = response.data.data.find(item => item.attributes.slug === slug); // Finding coffee data with matching slug
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
          </div>
          <h2>{coffee?.attributes?.name}</h2> {/* Displaying coffee name */}
          <p>Description: {coffee?.attributes?.description}</p> {/* Displaying coffee description */}
          <p>Origin: {coffee?.attributes?.origin}</p> {/* Displaying coffee origin */}
          <p>Price: {coffee?.attributes?.price} 💲</p> {/* Displaying coffee price */}
        </div>
      </>
    )
}

export default CoffeeDetails; // Exporting the CoffeeDetails component
