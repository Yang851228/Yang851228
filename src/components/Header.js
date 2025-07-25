import React from 'react';
// import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';

const Header = () => {
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
                <li><a href="#aboutMe" onClick={handleAboutMeClick}>關於我</a></li>
                <li><a href="#profolio" onClick={handlePortfolioClick}>作品集</a></li>
                <li><a href="https://github.com/Yang851228">Github</a></li>
                <li><a href="#footer" onClick={handleFooterClick}>聯絡我</a></li>
                <li>繁體中文/ENG</li>
            </ul>
        </div>
    );
};

export default Header;
