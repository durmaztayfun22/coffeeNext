// Header.jsx'i dinamik olarak yükle

import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import '../../styles/Header.css';

export default function Header({ locale, setLocale }) {

    const [pageTitle, setPageTitle] = useState('Coffees');
    const [pageDescription, setPageDescription] = useState('We are coffee drinkers who dont overdo our Americanos. To make the best coffee, time, temperature and technique must be in place, but without quality beans roasted to perfection, its all for nothing.');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const buttonClass = isMobileMenuOpen ? 'hamburger-menu-btn hidden' : 'hamburger-menu-btn';
    const dropdownRef = useRef(null);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    useEffect(() => {
        // Sayfa üzerinde herhangi bir yere tıklandığında menüyü kapat
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        // Mobile menu durumu değiştiğinde uygun sınıfı ekleyip kaldırma
        if (isMobileMenuOpen) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
    }, [isMobileMenuOpen]);


    const toggleDropdown = () => {
        if (!isDropdownOpen) {
            setIsDropdownOpen(true);
        }
    };

    const toggleLocale = (selectedLocale) => {
        setLocale(selectedLocale);
        setIsDropdownOpen(false);
    };

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };


    function PageTitleUpdater({ setPageTitle, setPageDescription }) {
        const location = useLocation();
       
        useEffect(() => {
           const fetchPageTitle = () => {
             const path = location.pathname;
             switch (path) {
               case '/about':
                 setPageTitle(locale === 'tr' ? 'Hakkımızda' : 'About');
                 setPageDescription(null);
                 break;
               case '/contact':
                 setPageTitle(locale === 'tr' ? 'İletişim' : 'Contact');
                 setPageDescription(null);
                 break;  
               default:
                 setPageTitle(locale === 'tr' ? 'Kahveler' : 'Coffees');
                 setPageDescription(locale === 'tr' ? 'Bu, kahve içenlerin Americanolarını aşırıya kaçırmadığı bir dünya. En iyi kahveyi yapmak için, zaman, sıcaklık ve teknik yerinde olmalıdır, ancak mükemmel şekilde kavrulmuş kaliteli çekirdekler olmadan, bu tümü için bir hiçtir.' : 'We are coffee drinkers who dont overdo our Americanos. To make the best coffee, time, temperature and technique must be in place, but without quality beans roasted to perfection, its all for nothing.');
                 break;
             }
           };
       
           fetchPageTitle();
        }, [location, setPageTitle]);
       
        return null;
    }

    return(
        <>
            <div className="container">  
                <header className="header">
                    <div className="header-content">
                        <Link href="/">
                            <a className="title">
                                <img src="https://i.imgur.com/qscsMyf.png" alt="coffeeCup" />
                                <span className="fs-4">{locale === 'tr' ? 'Kahve' : 'Coffee'}</span>
                            </a>
                        </Link>

                        <button className={buttonClass} onClick={toggleMenu}>
                            <span className="hamburger-icon">&#9776;</span>
                        </button>

                        <div ref={menuRef} className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                            <ul className="ul">
                                <li className='language-li li' onClick={toggleDropdown} ref={dropdownRef} >
                                {locale === 'tr' ? 'Sayfa Dilini Çevir' : 'Language'}
                                {isDropdownOpen && (
                                    <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
                                    <span onClick={() => toggleLocale('en')}>English</span>
                                    <span onClick={() => toggleLocale('tr')}>TÜRKÇE</span>
                                    </div>
                                )}
                                </li>
                                <li className="li"><Link href="/"><a className="nav-link">{locale === 'tr' ? 'Ana Sayfa' : 'Home'}</a></Link></li>
                                <li className="li"><Link href="/about"><a className="nav-link">{locale === 'tr' ? 'Hakkında' : 'About'}</a></Link></li>
                                <li className="li"><Link href="/contact"><a className="nav-link">{locale === 'tr' ? 'İletişim' : 'Contact'}</a></Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className='headertitlebig'>
                        <h1>{pageTitle}</h1>
                    </div>
                    <div className='headerOP'>
                        <p> {pageDescription} </p>
                    </div>
                </header>
                <PageTitleUpdater setPageTitle={setPageTitle} setPageDescription={setPageDescription} />
            </div>
        </>
    )
}
