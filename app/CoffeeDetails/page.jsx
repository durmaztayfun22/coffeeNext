import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; // useParams yerine useRouter kullanın
import axios from 'axios';
import NotFoundPage from '../components/fourZerofour';
import '../../styles/CoffeeDetails.css';

export default function CoffeeDetails({ locale }) {
 const router = useRouter(); // useRouter Hook'unu kullanın
 const { slug } = router.query; // useParams yerine useRouter'ın query özelliğini kullanın
 const [coffee, setCoffee] = useState(null);
 const api = locale === 'tr' ? 'https://strapidevelopment.onrender.com/api/coffees?locale=tr' : 'https://strapidevelopment.onrender.com/api/coffees?locale=en';

 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${api}&slug=${slug}`);
        const coffeeData = response.data.data.find(item => item.attributes.slug === slug);
        setCoffee(coffeeData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
 }, [api, slug]);

 if (!coffee) {
    return <NotFoundPage />;
 }

 console.log(coffee);

 return (
    <>
      <div className='container' key={coffee?.id}>
        <div className='div-image'>
          <img src={`${coffee?.attributes?.imgUrl}`} alt={coffee?.attributes?.name} />
        </div>
        <h2>{coffee?.attributes?.name}</h2>
        <p>Description: {coffee?.attributes?.description}</p>
        <p>Origin: {coffee?.attributes?.origin}</p>
        <p>Price: {coffee?.attributes?.price} 💲</p>
      </div>
    </>
 );
}