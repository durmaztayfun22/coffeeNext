import React, { useState, useEffect } from 'react';
import Footer from '../public/Footer';
import Header from '../public/Header';
import About from './About'; 
import Contact from './Contact'; 
import NotFoundPage from '../public/fourZerofour';
import HomeContent from '../public/HomeContent';
import CoffeeDetails from './CoffeeDetails';
import LoadingPage from "../public/Loading";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../styles/App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true); // Yeni durum değişkeni
  const [locale, setLocale] = useState("en");

  useEffect(() => {
    setIsLoading(true); // Veri yüklenirken true olarak ayarla
    const timer = setTimeout(() => {
      setIsLoading(false); // Veri yüklenmesi tamamlandığında false olarak ayarla
    }, 4500); // 3 saniye sonra

    return () => clearTimeout(timer); // Temizleme işlemi
  }, []);

  if (isLoading) {
    return <LoadingPage />; // Veri yüklenirken LoadingPage göster
  }

  return (
      <Router>
        <Header locale={locale} setLocale={setLocale} />
        <Routes >
          <Route path="/" element={<HomeContent locale={locale}/>} />
          <Route path="/about" element={<About locale={locale}/>} />
          <Route path="/contact" element={<Contact locale={locale}/>} />
          <Route path="/coffeeDetails/:slug" element={<CoffeeDetails locale={locale}/>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer locale={locale} />
      </Router>
  );
}

export default App;
