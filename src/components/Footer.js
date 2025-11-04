import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = ({ lang }) => {
    const translations = {
        zh: {
            contact: '聯絡我',
            phoneNumber: '手機號碼: +886-0928-820-962',
        },
        en: {
            contact: 'Contact Me',
            phoneNumber: 'Phone Number: +886-928-820-962',
        }
    };

    return (
        <div className={styles.footer} id="footer">
            <div className={styles.sbFooter + " " + styles.sectionPadding}>
                <div className={styles.sbFooterLinks}>
                    <div className={styles.sbFooterAbout}> 
                        <h2>{translations[lang].contact}</h2> {/*聯絡我*/}
                        <p>Email : sam303643@gmail.com</p>
                        <p className={styles.phoneNumber}>{translations[lang].phoneNumber}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;