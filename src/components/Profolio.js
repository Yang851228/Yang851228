import React, { useState, useEffect } from 'react';
import styles from '../styles/Profolio.module.css';


const Profolio = ({ lang }) => {
    const [financialModal, setFinancialModal] = useState(false);
    const [movieModal, setMovieModal] = useState(false);

    const translations = {
        zh: {
            portfolio: '專案作品集',
            responsibilities: '負責項目',
            githubLink: '前往Github查看專案',
            portfolioName1: '理財管家',
            financialHousekeeperdescription: '理財管家是一款個人財務管理應用，旨在幫助用戶追蹤和管理消費，設置財務目標，並根據個人需求提供 AI 分析與建議。透過自動化的消費數據整合與投資策略生成，用戶可以更直觀地掌握財務狀況，並制定短期與長期的財務規劃',
            financialHousekeeperjob1: '前端 - 記帳系統刻劃',
            financialHousekeeperjob2: '前端 - 明細查詢刻劃',
            financialHousekeeperjob3: '前端 - 升級頁面刻劃',
            financialHousekeeperjob4: '後端 - 記帳系統運用及資料庫串接',
            financialHousekeeperjob5: '後端 - 明細查詢串接及資料庫調用',
            financialHousekeeperjob6: '後端 - Dto 方式實踐總存款運算',
            financialHousekeeperjob7: '後端 - 串接 Gemini AI 及模擬用戶紀錄',
            financialHousekeeperjob8: '後端 - LinePay API串接',
            portfolioName2: '電影院-購物車',
            moviedescription: '此專案為實作電影購票頁面，包含電影首頁、登入、註冊、購買電影票並劃位、購物車、第三方登入、第三方支付(綠界、LinePay)、管理員系統等，旨在提升使用者購票頁面',
            moviejob1: '前端 - 座位表刻劃',
            moviejob2: '前端 - 結帳頁面刻劃',
            moviejob3: '後端 - 座位表串接及資料庫操作',
            moviejob4: '後端 - LinePay API串接',
        },
        en: {
            portfolio: 'Portfolio',
            responsibilities: 'Responsibilities of the Project',
            githubLink: 'View Project on Github',
            portfolioName1: 'Financial Housekeeper',
            financialHousekeeperdescription: 'Financial Housekeeper is a personal finance management application designed to help users track and manage expenses, set financial goals, and provide AI analysis and suggestions based on individual needs. Through automated expense data integration and investment strategy generation, users can gain a clearer understanding of their financial status and develop both short-term and long-term financial plans.',
            financialHousekeeperjob1: 'Frontend - Account Tracking System Implementation',
            financialHousekeeperjob2: 'Frontend - Detail Query Implementation',
            financialHousekeeperjob3: 'Frontend - Upgrade Page Implementation',
            financialHousekeeperjob4: 'Backend - Account Tracking System Utilization and Database Integration',
            financialHousekeeperjob5: 'Backend - Detail Query Integration and Database Access',
            financialHousekeeperjob6: 'Backend - Total Deposit Calculation Using DTO Method',
            financialHousekeeperjob7: 'Backend - Gemini AI Integration and User Record Simulation',
            financialHousekeeperjob8: 'Backend - LinePay API Integration',
            portfolioName2: 'Movie Project - Shopping Cart',
            moviedescription: 'This project implements a movie ticket purchasing page, including movie homepage, login, registration, purchasing movie tickets and seat selection, shopping cart, third-party login, third-party payment , such as ECPay, LinePay, and admin system, aiming to enhance user experience of ticket purchasing page.',
            moviejob1: 'Frontend - Seating Chart Implementation',
            moviejob2: 'Frontend - Checkout Page Implementation',
            moviejob3: 'Backend - Seating Chart Integration and Database Integration',
            moviejob4: 'Backend - LinePay API Integration',
        }
    };

    // 開啟彈窗
    const openModal = (type, e) => {
        if (e) e.preventDefault?.();
        if (type === 'financial') setFinancialModal(true);
        if (type === 'movie') setMovieModal(true);
    };

    // 關閉彈窗
    const closeAllModals = () => {
        setFinancialModal(false);
        setMovieModal(false);
    };
     
    // 允許ESC鍵關閉彈窗
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') {
                closeAllModals();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    return (
        <div className={styles.profolioContainer} id="profolio">
            <div className={styles.profolioLeftColumn}>
                <div className={styles.title}>
                    <h1>{translations[lang].portfolio}</h1> {/*專案作品集*/}
                </div>
            </div>
            <div className={styles.profolioRightColumn}>
                <div className={styles.firstInnerContainer}> {/*理財管家*/}
                    <div className={styles.firstInnerLeftColumn}>
                        <div className={styles.card} onClick={(e) => openModal('financial', e)}>
                            <img src={`${process.env.PUBLIC_URL}/assests/image/Portfolio-1.jpg`} className={styles.photo} alt=""/>
                            <div className={styles.overlay}>
                                <div className={styles.titleH4}>
                                    <h4>{translations[lang].portfolioName1}</h4> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.firstInnerRightColumn}>
                        <h3>{translations[lang].portfolioName1}</h3> 
                        <p>{translations[lang].financialHousekeeperdescription}</p>
                    </div>
                </div>
                <div className={styles.firstInnerContainer}> {/*電影院-購物車*/}
                    <div className={styles.firstInnerLeftColumn}>
                        <div className={styles.card} onClick={(e) => openModal('movie', e)}>
                            <img src={`${process.env.PUBLIC_URL}/assests/image/Portfolio-2.png`} className={styles.photo} alt=""/>
                            <div className={styles.overlay}>
                                <div className={styles.titleH4}>
                                    <h4>{translations[lang].portfolioName2}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.firstInnerRightColumn}>
                        <h3>{translations[lang].portfolioName2}</h3>
                        <p>{translations[lang].moviedescription}</p>
                    </div>
                </div>
            </div>

            {financialModal && (
                <div className={styles.modalOverlay} onClick={closeAllModals}>
                    <div className={styles.FinancialModalContent} onClick={(e) => e.stopPropagation()}>
                        <span onClick={closeAllModals} className={styles.closeButton}>×</span>
                        <div className={styles.FinancialLogoContainer}>
                            <img src={`${process.env.PUBLIC_URL}/assests/image/FinancialLogo.png`} className={styles.FinancialLogo} alt=""/>
                        </div>
                        <div>
                            <h2>{translations[lang].responsibilities}</h2>
                        </div>
                        <div>
                            <ol>
                                <li>{translations[lang].financialHousekeeperjob1}</li>
                                <li>{translations[lang].financialHousekeeperjob2}</li>
                                <li>{translations[lang].financialHousekeeperjob3}</li>
                                <li>{translations[lang].financialHousekeeperjob4}</li>
                                <li>{translations[lang].financialHousekeeperjob5}</li>
                                <li>{translations[lang].financialHousekeeperjob6}</li>
                                <li>{translations[lang].financialHousekeeperjob7}</li>
                                <li>{translations[lang].financialHousekeeperjob8}</li>
                            </ol>
                        </div>
                        <div className={styles.financialProjectLink}>
                            <a href="https://github.com/financialhousekeeper/.github" target="_blank" rel="noopener noreferrer">{translations[lang].githubLink}</a>
                        </div>
                    </div>
                </div>
            )}

            {movieModal && (
                <div className={styles.modalOverlay} onClick={closeAllModals}>
                    <div className={styles.movieModalContent} onClick={(e) => e.stopPropagation()}>
                        <span onClick={closeAllModals} className={styles.closeButton}>×</span>
                        <div className={styles.MovieLogoContainer}>
                            <img src={`${process.env.PUBLIC_URL}/assests/image/MovieLogo.png`} className={styles.MovieLogo} alt=""/>
                        </div>
                        <div>
                            <h2>{translations[lang].responsibilities}</h2>
                        </div>
                        <div>
                            <ol>
                                <li>{translations[lang].moviejob1}</li>
                                <li>{translations[lang].moviejob2}</li>
                                <li>{translations[lang].moviejob3}</li>
                                <li>{translations[lang].moviejob4}</li>
                            </ol>
                        </div>
                        <div className={styles.movieProjectLink}>
                            <a href="https://github.com/happy010203/ConcertProject" target="_blank" rel="noopener noreferrer">{translations[lang].githubLink}</a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Profolio;