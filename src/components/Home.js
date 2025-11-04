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
      aboutMeContent: '不僅擁有多年保險與財務背景，且為突破自我與提升專業，於2024年開始選擇轉職程式開發，透過積極學習新的技術，結合過往經驗，挑戰不同的職涯方向，以拓展技能版圖。並藉由持續學習與實作，致力於成為能夠以科技解決問題、創造價值的跨領域專業人才。',
      resumeDownload: '履歷下載',
    },
    en: {
      jobTitle: 'Java Developer',
      aboutMe: 'About Me',
      aboutMeContent: 'With several years of experience in insurance and finance, I made the decision in 2024 to transition into software development in pursuit of personal growth and professional advancement. Through proactive learning and adopting new technologies, I combine my previous expertise with technical skills to explore new career directions and broaden my capabilities. By continuously learning and gaining hands-on experience, I am dedicated to becoming a cross-disciplinary professional who leverages technology to solve problems and create value.',
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
            {/* <img src={`${process.env.PUBLIC_URL}/assests/image/Shuan.png`} className={styles.ShuanPhoto} alt=""/> */}
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