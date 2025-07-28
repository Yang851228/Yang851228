import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer} id="footer">
            <div className={styles.sbFooter + " " + styles.sectionPadding}>
                <div className={styles.sbFooterLinks}>
                    <div className={styles.sbFooterAbout}> 
                        <h2>聯絡資訊</h2>
                        <p>Email: sam303643@gmail.com</p>
                        <p className={styles.phoneNumber}>手機號碼: +886-0928-820-962</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;