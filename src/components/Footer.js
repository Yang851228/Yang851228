import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.sbFooter + " " + styles.sectionPadding}>
                <div className={styles.sbFooterLinks}>
                    <div className={styles.sbFooterAbout}> 
                        <h3>我的聯絡資訊</h3>
                        <p>我的Email: sam303643@gmail.com</p>
                        <p>我的手機: 0928-820-962</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;