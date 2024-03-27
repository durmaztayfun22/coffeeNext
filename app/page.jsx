import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import NotFoundPage from './components/fourZerofour';
import HomeContent from './components/HomeContent';
import LoadingPage from "./components/Loading";
import '../styles/App.css';
import React, { useState, useEffect} from 'react';
export default function App() { // useState ve useEffect kullanan bileşenlerin istemci tarafında çalışmasını sağlar
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
    <>
      <Header locale={locale} setLocale={setLocale}/>
      <Link href="/" ><HomeContent locale={locale}/></Link>
      <Link href="*"><NotFoundPage locale={locale}/></Link>
      <Footer locale={locale}/>
    </>
  );
}

