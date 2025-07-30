import React from 'react';
// import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';

const Header = ({ lang, onLangChange }) => {
    const translations = {
        en: {
            aboutMe: 'About Me',
            profolio: 'Portfolio',
            footer: 'Contact Me',
            language: 'ZH/ENG',
        },
        zh: {
            aboutMe: '關於我',
            profolio: '作品集',
            footer: '聯絡我',
            language: '繁體中文/ENG',
        }
    };

    // 切換語言模式
    const toggleLang = () => {
        onLangChange(lang === 'zh' ? 'en' : 'zh');
    };

    // 跳轉至aboutMe
    const handleAboutMeClick = (e) => {
        e.preventDefault();
        const aboutMe = document.getElementById('aboutMe');
        const headerHeight = document.getElementById('header').offsetHeight;
        if (aboutMe) {
            const aboutMePosition = aboutMe.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: aboutMePosition - headerHeight,
                behavior: 'smooth',
            });
        }
    };

    // 跳轉至profolio
    const handlePortfolioClick = (e) => {
        e.preventDefault();
        const profolio = document.getElementById('profolio');
        const headerHeight = document.getElementById('header').offsetHeight;
        if (profolio) {
            const profolioPosition = profolio.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: profolioPosition - headerHeight,
                behavior: 'smooth',
            });
        }
    };

    // 跳轉至footer
    const handleFooterClick = (e) => {
        e.preventDefault();
        setTimeout(() => {
            document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
        }, 50);
    };

    return (
        <div className={styles.headerSTY} id="header">
            <span className="logo"></span>
            <ul>
                {/* <li><Link to="/FinanceList">首頁</Link></li>
                <li><Link to="/OrderList">關於我</Link></li>
                <li><Link to="/about">作品集</Link></li> */}
                {/* <li>首頁</li> */}

                {/* <li><a href="#aboutMe" onClick={handleAboutMeClick}>關於我</a></li>
                <li><a href="#profolio" onClick={handlePortfolioClick}>作品集</a></li>
                <li><a href="https://github.com/Yang851228">Github</a></li>
                <li><a href="#footer" onClick={handleFooterClick}>聯絡我</a></li>
                <li>繁體中文/ENG</li> */}

                <li><a href="#aboutMe" onClick={handleAboutMeClick}>{translations[lang].aboutMe}</a></li>
                <li><a href="#profolio" onClick={handlePortfolioClick}>{translations[lang].profolio}</a></li>
                <li><a href="https://github.com/Yang851228">Github</a></li>
                <li><a href="#footer" onClick={handleFooterClick}>{translations[lang].footer}</a></li>
                <li onClick={toggleLang}>繁中/ENG</li>
            </ul>
        </div>
    );
};

export default Header;
