import React from 'react';
import styles from '../styles/Profolio.module.css';


const Profolio = () => {
    return (
        <div>
            <div className={styles.title}>
                <h1>作品集</h1>
            </div>
            <div>
                <div>
                    <img src="/assets/image/logo.png" alt=""/>
                    <div>
                        <h4>理財管家</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default Profolio;