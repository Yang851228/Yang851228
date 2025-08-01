import React from 'react';
import styles from '../styles/ProgramSkill.module.css';

const ProgramSkill = ({ lang }) => {
    const translations = {
        zh: {
            programSkill: '程式語言技能表',
        },
        en: {
            programSkill: 'Programming Skill',
        }
    };
    
    return (
        <div className={styles.programmingContainer}>
            <div className={styles.programmingLeftColumn}>
                <div className={styles.title}>
                    <h1>{translations[lang].programSkill}</h1> {/*程式語言技能表*/}
                </div>
            </div>
            <div className={styles.programmingRightColumn}>
                    <div>
                    <div className={styles.columnFontStyle}>Java</div>
                    <div className={styles.bar}>
                        <div className={styles.javaBar}/>
                    </div>
                    <div className={styles.columnFontStyle}>SQL</div>
                    <div className={styles.bar}>
                        <div className={styles.sqlBar}/>
                    </div>
                    <div className={styles.columnFontStyle}>JSP</div>
                    <div className={styles.bar}>
                        <div className={styles.jspBar}/>
                    </div>
                    <div className={styles.columnFontStyle}>React</div>
                    <div className={styles.bar}>
                        <div className={styles.reactBar}/>
                    </div>
                    <div className={styles.columnFontStyle}>Python</div>
                    <div className={styles.bar}>
                        <div className={styles.pythonBar}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProgramSkill;