import React, { useState } from "react";
// import { GoogleMap, LoadScript } from '@react-google-maps/api';
import '../styles/Contact.css'
import axios from "axios";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const api = 'https://strapidevelopment.onrender.com/api/forms';


export default function Contact({ locale }) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [mail, setMail] = useState('');
  const [description, setDescription] = useState('');

  const ContactMessage = async(e) => {
    e.preventDefault();

    const formData = {
      data: {
          name: name,
          surname: surname,
          phone: phone,
          mail: mail,
          description: description
      }
      
    };

    console.log(formData);

    try {
      const response = await axios.post(api, formData, { 
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response)
      console.log('veriler gönderildi');

      if(response.status === 200){
        toast.success('Form submitted successfully!');
        setName('');
        setSurname('');
        setPhone('');
        setMail('');
        setDescription('');
      }
    } catch (error) {
      toast.error('Your form could not be sent.');
      console.log(error);
    }
  }
  
  return ( 
    <main>
      <div className="ConAll">
        <div className="Con-Body">
          <div className="Con-Body-Text">
            <div className="Con-TextH3">
              <h3 className="Con-Text-h3">{locale === 'tr' ? 'En İyi Kahve Tercihleri İçin Bize Ulaşın' : 'Contact Us For The Best Coffee Preferences'}</h3>
            </div>
            <div className="Con-TextP">
              <p className="Con-Text-p">{locale === 'tr' ? 'İletişime geçin, sizden haber almak isteriz.' : 'Get in touch, we’d love to hear from you.'}</p>
              <p className="Con-Text-p">{locale === 'tr' ? 'Damak tadınıza en uygun kahveyi seçelim.' : 'Lets choose the best coffee to suit your taste.'}</p>
              <p className="Con-Text-p">{locale === 'tr' ? 'En iyi kahveler her zaman en iyi aromaya sahip olanlardır.' : 'The best coffees are always the ones with the best flavour.'}</p>
            </div>
          </div>
          <div className="Con-BodyImg">
            <img src="https://gcdnb.pbrd.co/images/PdDQJf37lwrX.jpg?o=1" alt="Support" className="Con-Body-img" />
          </div>
        </div>
        <div className="Con-Body-ContactUS">
          <div className="Con-Body-ContactUS-Form">
            <div className="coffeeSticker-1">
              <img src="https://gcdnb.pbrd.co/images/9O6dRPgRg0IZ.png?o=1" alt="coffeeSticker-1" />
            </div>
            <div className="Con-Body-ContactUS-Form-title">
              <h3>{locale === 'tr' ? 'Bizimle İletişime Geçin' : 'Contact US'}</h3>
            </div>
            <ul>
              <li>
                <input className="name" value={name} onChange={e => setName(e.target.value)} type="text" name="name" id="name" placeholder={locale === 'tr' ? 'ADINIZ' : 'NAME'} required/>
                <input className="surname" value={surname} onChange={e => setSurname(e.target.value)} type="text" name="surname" id="surname" placeholder={locale === 'tr' ? 'SOYADINIZ' : 'SURNAME'} required />
              </li>
              <li>
                <input className="phone" value={phone} onChange={e => setPhone(e.target.value)} type="text" name="phone" id="phone" placeholder={locale === 'tr' ? 'TELEFON NUMARANIZ' : 'PHONE'} required />
                <input className="mail" value={mail} onChange={e => setMail(e.target.value)} type="text" name="mail" id="mail" placeholder={locale === 'tr' ? 'MAIL ADRESINIZ' : 'MAIL'} required />
              </li>
              <li>
                <input className="description" value={description} onChange={e => setDescription(e.target.value)} type="text" name="description" id="description" placeholder={locale === 'tr' ? 'AÇIKLAMA' : 'DESCRIPTION'} required />
              </li>
            </ul>
            <button className="Con-Body-ContactUS-Button" onClick={ContactMessage}>{locale === 'tr' ? 'Mesajı Gönder' : 'SEND MESSAGE'}</button>
            <div className="coffeeSticker-2">
              <img src="https://gcdnb.pbrd.co/images/6yxw8nS2525P.png?o=1" alt="coffeeSticker-2" />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </main>
  );
}

//-------------------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------------------------
// Kahve Formu
// Kahve içeceğiniz sıklık nedir?
// Tat tercihiniz nasıldır? (Tatlı, ekşi, acı, vb.)
// Diğer içeceklerde hangi tatları tercih edersiniz?
// Kahvenizin yoğunluğunu nasıl tercih edersiniz? (Hafif, orta, yoğun)
// Kahve aromalarında hangi çeşitleri seversiniz? (Çikolata, vanilya, meyvemsi, fındık, vb.)
// Şeker veya kremalı içecekleri tercih ediyor musunuz?
// Hangi sıcaklıkta içmeyi tercih edersiniz?
// Kahve içerken genellikle hangi çikolata, kurabiye veya atıştırmalıkları tercih edersiniz?
// Kahve türlerinden hangilerini daha önce denediniz (örneğin, Amerikano, espresso, latte, cappuccino, gibi)?
// Diğer içeceklerde alerjiniz veya hassasiyetiniz var mı?