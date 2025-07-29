import styles from '../styles/Home.module.css';
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import ProgramSkill from './ProgramSkill';
import LanguageSkill from './LanguageSkill';
import Profolio from './Profolio';
import EduAndExp from './EduAndExp';

const Home = () => {
  const [lang, setLang] = useState('zh');

  const translations = {
    zh: {
      jobTitle: 'Java 工程師',
      aboutMe: '關於我',
      aboutMeContent: '不僅擁有多年保險與財務背景，並為突破自我與提升專業，於2024年開始選擇轉職程式開發，透過積極學習新的技術，結合過往經驗，挑戰不同的職涯方向，以拓展技能版圖。',
      resumeDownload: '履歷下載',
    },
    en: {
      jobTitle: 'Java Developer',
      aboutMe: 'About Me',
      aboutMeContent: 'With a solid background in insurance and finance, I made a career switch to software development in 2024 to broaden my boundaries and elevate my professional growth. By continuous learning new technologies and leveraging my past experiences, I strive to broaden my career horizons and expand my skill set.',
      resumeDownload: 'Download Resume',
    }
  };

  return (
    <div>
      <Header lang={lang} onLangChange={setLang} />
      <div className={styles.mainContent}>
        <div>
          <div className={styles.photoContainer}>
            <img src={`${process.env.PUBLIC_URL}/assests/image/Home.jpg`} className={styles.photo} alt="" />
            <div className={styles.name}>
              <h1>蕭揚 Shuan</h1>
              <div>
                <h3>{translations[lang].jobTitle}</h3>
              </div>
            </div>
            {/* <img src={`${process.env.PUBLIC_URL}/assests/image/Shuan.png`} className={styles.ShuanPhote} alt=""/> */}
          </div>
          <div className={styles.aboutMe} id="aboutMe">
            <div className={styles.aboutMeLeftColumn}>
              <div className={styles.title}>
                <h1>{translations[lang].aboutMe}</h1>
              </div>
            </div>
            <div className={styles.aboutMeRightColumn}>
              <div className={styles.content}>
                <p>{translations[lang].aboutMeContent}</p>
              </div>
            </div>
          </div>
          <div className={styles.resumeDiv}>
            <a href={`${process.env.PUBLIC_URL}/assests/document/resume.pdf`} download className={styles.resumeDownload}>{translations[lang].resumeDownload}</a>
          </div>
        </div>
        <hr className={styles.sectionDivider} />
        <EduAndExp lang={lang} />
        <hr className={styles.sectionDivider} />
        <ProgramSkill lang={lang} />
        <hr className={styles.sectionDivider} />
        <LanguageSkill lang={lang} />
        <hr className={styles.sectionDivider} />
        <Profolio lang={lang} />
        <Footer lang={lang} />
      </div>
    </div>
  );
}

export default Home;