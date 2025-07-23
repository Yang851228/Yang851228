import React, { useState, useEffect } from 'react';
import styles from '../styles/Profolio.module.css';


const Profolio = () => {
    const [financialModal, setFinancialModal] = useState(false);
    const [movieModal, setMovieModal] = useState(false);

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
        <div className={styles.profolioContainer}>
            <div className={styles.profolioLeftColumn}>
                <div className={styles.title}>
                    <h2>專案作品集</h2>
                </div>
            </div>
            <div className={styles.profolioRightColumn}>
                <div className={styles.firstInnerContainer}>
                    <div className={styles.firstInnerLeftColumn}>
                        <div className={styles.card} onClick={(e) => openModal('financial', e)}>
                            <img src="/assests/image/Portfolio-1.jpg" className={styles.photo} alt=""/>
                            <div className={styles.overlay}>
                                <div className={styles.titleH4}>
                                    <h4>理財管家</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.firstInnerRightColumn}>
                        <h4>理財管家</h4>
                        <p>財務管家是一款個人財務管理應用，旨在幫助用戶追蹤和管理消費，設置財務目標，並根據個人需求提供 AI 分析與建議。透過自動化的消費數據整合與投資策略生成，用戶可以更直觀地掌握財務狀況，並制定短期與長期的財務規劃</p>
                    </div>
                </div>
                <div className={styles.firstInnerContainer}>
                    <div className={styles.firstInnerLeftColumn}>
                        <div className={styles.card} onClick={(e) => openModal('movie', e)}>
                            <img src="/assests/image/Portfolio-2.png" className={styles.photo} alt=""/>
                            <div className={styles.overlay}>
                                <div className={styles.titleH4}>
                                    <h4>電影院-購物車</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.firstInnerRightColumn}>
                        <h4>電影院-購物車</h4>
                        <p>此專案為實作電影購票頁面，包含電影首頁、登入、註冊、購買電影票並劃位、購物車、第三方登入、第三方支付(綠界、LinePay)、管理員系統等，旨在提升使用者購票頁面</p>
                    </div>
                </div>
            </div>

            {financialModal && (
                <div className={styles.modalOverlay} onClick={closeAllModals}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <span onClick={closeAllModals} className={styles.closeButton}>×</span>
                        <div>
                            <h2>負責項目</h2>
                        </div>
                        <div>
                            <ol>
                                <li>前端 - 記帳系統刻劃</li>
                                <li>前端 - 明細查詢刻劃</li>
                                <li>前端 - 升級頁面刻劃</li>
                                <li>後端 - 記帳系統運用及資料庫串接</li>
                                <li>後端 - 明細查詢串接及資料庫調用</li>
                                <li>後端 - Dto 方式實踐總存款運算</li>
                                <li>後端 - 串接 Gemini AI 及模擬用戶紀錄</li>
                                <li>後端 - LinePay API串接</li>
                            </ol>
                        </div>
                        <div className={styles.projectLink}>
                            <a href="https://github.com/financialhousekeeper/.github" target="_blank" rel="noopener noreferrer">前往Github查看專案</a>
                        </div>
                    </div>
                </div>
            )}

            {movieModal && (
                <div className={styles.modalOverlay} onClick={closeAllModals}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <span onClick={closeAllModals} className={styles.closeButton}>×</span>
                        <div>
                            <h2>負責項目</h2>
                        </div>
                        <div>
                            <ol>
                                <li>前端 - 座位表刻劃</li>
                                <li>前端 - 結帳頁面刻劃</li>
                                <li>後端 - 座位表串接及資料庫操作</li>
                                <li>後端 - LinePay API串接</li>
                            </ol>
                        </div>
                        <div className={styles.projectLink}>
                            <a href="https://github.com/happy010203/ConcertProject" target="_blank" rel="noopener noreferrer">前往Github查看專案</a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Profolio;