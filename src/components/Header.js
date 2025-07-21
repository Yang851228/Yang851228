import React from 'react';
// import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';
// import logo_icon from '../assets/logo.png';

const Header = () => {
    const handlePortfolioClick = (e) => {
        e.preventDefault();
        setTimeout(() => {
            document.getElementById('profolio').scrollIntoView({ behavior: 'smooth' });
        }, 50);
    };

    return (
        <div className={styles.headerSTY}>
            {/* <img src={logo_icon} alt="Logo" className={styles.logo} /> */}
            <span className="logo"></span>
            <ul>
                {/* <li><Link to="/FinanceList">首頁</Link></li>
                <li><Link to="/OrderList">關於我</Link></li>
                <li><Link to="/about">作品集</Link></li> */}
                {/* <li>首頁</li> */}
                <li><a href="#aboutMe">關於我</a></li>
                <li><a href="#profolio" onClick={handlePortfolioClick}>作品集</a></li>
                <li><a href="https://github.com/Yang851228">Github</a></li>
                <li><a href="#footer">聯絡我</a></li>
                <li>繁體中文/ENG</li>
            </ul>
        </div>
    );
};

export default Header;
