import styles from '../styles/Home.module.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ProgramSkill from './ProgramSkill';
import LanguageSkill from './LanguageSkill';
import Profolio from './Profolio';
import EduAndExp from './EduAndExp';

const Home = () => {
  return (
    <div>
      <Header/>
      <div className={styles.mainContent}>
        <div>
          <div className={styles.photoContainer}>
          <img src={`${process.env.PUBLIC_URL}/assests/image/Home.jpg`} className={styles.photo} alt=""/>
          <div className={styles.name}>
              <h1>蕭揚 Shuan</h1>
              <div>
                  <h3>Java 工程師</h3>
              </div>
          </div>
          {/* <img src={`${process.env.PUBLIC_URL}/assests/image/Shuan.png`} className={styles.ShuanPhote} alt=""/> */}
          </div>
          <div className={styles.aboutMe} id="aboutMe">
            <div className={styles.aboutMeLeftColumn}>
              <div className={styles.title}>
                <h1>關於我</h1>
              </div>
            </div>
            <div className={styles.aboutMeRightColumn}>
              <div className={styles.content}>
                <p>不僅擁有多年保險與財務背景，並為突破自我與提升專業，於2024年開始選擇轉職程式開發，透過積極學習新的技術，結合過往經驗，挑戰不同的職涯方向，以拓展技能版圖。</p>
              </div>
            </div>
          </div>
          <div className={styles.resumeDiv}>
            <a href={`${process.env.PUBLIC_URL}/assests/document/resume.pdf`} download className={styles.resumeDownload}>履歷下載</a>
          </div>
        </div>
        <hr className={styles.sectionDivider} />
        <EduAndExp/>
        <hr className={styles.sectionDivider} />
        <ProgramSkill/>
        <hr className={styles.sectionDivider} />
        <LanguageSkill/>
        <hr className={styles.sectionDivider} />
        <Profolio/>
        <Footer/>
      </div>
    </div>
  );
}

export default Home;