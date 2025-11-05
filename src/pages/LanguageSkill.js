import React from 'react';
import styles from '../styles/LanguageSkill.module.css';

const LanguageSkill = ({ lang }) => {
    const translations = {
        zh: {
            language: '語言表',
            chinese: '中文',
            english: '英文',
            taiwanese: '台語',
            hakka: '客語',
        },
        en: {
            language: 'Language',
            chinese: 'Chinese',
            english: 'English',
            taiwanese: 'Taiwanese',
            hakka: 'Hakka',
        }
    };
    
    return (
        <div className={styles.languageContainer}>
            <div className={styles.languageLeftColumn}>
                <div className={styles.title}>
                    <h1>{translations[lang].language}</h1> {/*語言表*/}
                </div>
            </div>
            <div className={styles.languageRightContainer}>
                <div>
                    <div className={styles.columnFontStyle}>{translations[lang].chinese}</div> {/*中文*/}
                    <div className={styles.bar}>
                        <div className={styles.chineseBar}/>
                    </div>
                    <div className={styles.columnFontStyle}>{translations[lang].english}</div> {/*英文*/}
                    <div className={styles.bar}>
                        <div className={styles.englishBar}/>
                    </div>
                    <div className={styles.columnFontStyle}>{translations[lang].taiwanese}</div> {/*台語*/}
                    <div className={styles.bar}>
                        <div className={styles.taiwaneseBar}/>
                    </div>
                    <div className={styles.columnFontStyle}>{translations[lang].hakka}</div> {/*客語*/}
                    <div className={styles.bar}>
                        <div className={styles.hakkaBar}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LanguageSkill;