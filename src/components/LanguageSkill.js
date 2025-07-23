import React from 'react';
import styles from '../styles/LanguageSkill.module.css';

const LanguageSkill = () => {
    
    return (
        <div className={styles.languageContainer}>
            <div className={styles.languageLeftColumn}>
                <div className={styles.title}>
                    <h2>語言表</h2>
                </div>
            </div>
            <div className={styles.languageRightContainer}>
                <div>
                    <div className={styles.columnFontStyle}>中文</div>
                    <div className={styles.bar}>
                        <div className={styles.chineseBar}/>
                    </div>
                    <div className={styles.columnFontStyle}>英文</div>
                    <div className={styles.bar}>
                        <div className={styles.englishBar}/>
                    </div>
                    <div className={styles.columnFontStyle}>台語</div>
                    <div className={styles.bar}>
                        <div className={styles.taiwaneseBar}/>
                    </div>
                    <div className={styles.columnFontStyle}>客語</div>
                    <div className={styles.bar}>
                        <div className={styles.hakkaBar}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LanguageSkill;