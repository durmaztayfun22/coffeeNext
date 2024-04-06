import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/HomeContent.css'
import Modal from './Modal';
import NotFoundPage from './fourZerofour';
import { Link } from 'react-router-dom';

export default function HomeContent({ locale }) {
  const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [filteredData, setFilteredData] = useState([]);
    //Burası api değiştiğinde kullanılacak 
    // const [selectedCategory, setSelectedCategory] = useState(null);

    const api = locale === 'tr' ? 'https://strapidevelopment.onrender.com/api/coffees?locale=tr' : 'https://strapidevelopment.onrender.com/api/coffees?locale=en';
    // const api = "https://postgresknex.vercel.app/coffees";  //Burası api değiştiğinde kullanılacak 

    const fetchData = async () => {
      try {
        const response = await axios.get(api);
        const veri = await response.data;
        setData(veri);
        } catch (error) {
            console.log(error);
        }    
    };
  
    useEffect(() => {
      fetchData();
    }, [locale]);

    if(!data){
      return <NotFoundPage />;
    }

    const handleCategoryClick = (category) => {

      // Seçilen kategoriye göre filtreleme yap
      const filteredItems = data.data.filter(item => item.attributes.rich[0]?.children[0]?.text.includes(category));
      // Filtrelenmiş verileri state'e ata
      setFilteredData(filteredItems);
    };

    //Burası api değiştiğinde kullanılacak 
    // const handleCategoryClick = (category) => {
    //   setSelectedCategory(category);
    //   // Kategoriye göre filtreleme
    //   const filteredItems = data.filter(item => {
    //      // item.rich'in tanımlı olduğunu kontrol et
    //      if (item.rich) {
    //          // Her bir item için rich dizisini döngüye al
    //          return item.rich.some(richItem => {
    //              // richItem.children'in tanımlı olduğunu kontrol et
    //              if (richItem.children) {
    //                  // richItem'in children dizisini döngüye al
    //                  return richItem.children.some(child => {
    //                      // child'in text özelliğini kontrol et ve kategoriye göre filtreleme
    //                      const categories = child.text.split(', '); // Kategorileri ayır
    //                      return categories.includes(category); // Kategoriye göre filtreleme
    //                  });
    //              }
    //              return false;
    //          });
    //      }
    //      return false;
    //   });
    //   setFilteredData(filteredItems);
    //  };

    const handleImageClick = (src, alt) => {
      setSelectedImage({ src, alt });
      setShowModal(true)
    }
  
    const handleCloseModel = () => {
      setShowModal(false)
    }
  
    return (
      <>
        <div className="sıralama">
          <ul>
            <li className={filteredData === "Strong Coffees" ? "selected" : ""} onClick={() => handleCategoryClick("Strong Coffees")}>{locale === 'tr' ? 'Sert Kahveler' : 'Strong Coffees'}</li>
            <li className={filteredData === "Soft Coffees" ? "selected" : ""} onClick={() => handleCategoryClick("Soft Coffees")}>{locale === 'tr' ? 'Yumuşak Kahveler' : 'Soft Coffees'}</li>
            <li className={filteredData === "Milk Coffees" ? "selected" : ""} onClick={() => handleCategoryClick("Milk Coffees")}>{locale === 'tr' ? 'Sütlü Kahveler' : 'Milk Coffees'}</li>
            <li className={filteredData === "Coffees Without Milk" ? "selected" : ""} onClick={() => handleCategoryClick("Coffees Without Milk")}>{locale === 'tr' ? 'Sütsüz Kahveler' : 'Coffees Without Milk'}</li>
            <li className={filteredData === "Hot Coffees" ? "selected" : ""} onClick={() => handleCategoryClick("Hot Coffees")}>{locale === 'tr' ? 'Sıcak Kahveler' : 'Hot Coffees'}</li>
            <li className={filteredData === "Cold Coffees" ? "selected" : ""} onClick={() => handleCategoryClick("Cold Coffees")}>{locale === 'tr' ? 'Soğuk Kahveler' : 'Cold Coffees'}</li>
          </ul>
        </div>

        {/* Burası api değiştiğinde kullanılacak */}
        {/* <div className="card-container">
          {(filteredData?.length > 0 ? filteredData : data)?.map((item) => {
            return (
              <div key={item?.id} className="card">
                <div className="card-img" id='image' onClick={() => handleImageClick(`${item?.img_url}`, item?.slug)}>
                  <img src={`${item?.img_url}`} alt={item?.name} className="img-fluid" />
                </div>
                <Link to={`/coffeeDetails/${item?.slug}`}>
                  <div className="card-body">
                    <div className='item-container' id='container'>
                      <div className='item-details'>
                        <h2 className="card-title">{item?.name}</h2>
                        <p className='card-text'>Description: {item?.description}</p>
                        <p className='card-text'>Origin: {item?.origin}</p>
                        <span className='card-text price'>Price: {item?.price}💲</span>
                      </div>
                    </div>
                  </div>
                </Link>
                {showModal && selectedImage && (
                  <Modal src={selectedImage.src} alt={selectedImage.alt} onClose={handleCloseModel}/>
                )}
              </div>
            );
          })}
        </div> */}

        <div className="card-container">
          {(filteredData?.length > 0 ? filteredData : data?.data)?.map((item) => {
              return (
                <div key={item?.id} className="card">
                  <div className="card-img" id='image' onClick={() => handleImageClick(`${item?.attributes?.imgUrl}`, item?.attributes?.slug)}>
                    <img src={`${item?.attributes?.imgUrl}`} alt={item?.attributes?.name} className="img-fluid" />
                  </div>
                  <Link to={`/coffeeDetails/${item?.attributes?.slug}`}>
                    <div className="card-body">
                      <div className='item-container' id='container'>
                        <div className='item-details'>
                          <h2 className="card-title">{item?.attributes?.name}</h2>
                          <p className='card-text'>Description: {item?.attributes?.description}</p>
                          <p className='card-text'>Origin: {item?.attributes?.origin}</p>
                          <span className='card-text price'>Price: {item?.attributes?.price}💲</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                  {showModal && selectedImage && (
                    <Modal src={selectedImage.src} alt={selectedImage.alt} onClose={handleCloseModel}/>
                  )}
                </div>
              );
          })}
        </div>       
      </>
    );
}
