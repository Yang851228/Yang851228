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
        <div id="aboutMe" name="aboutMe" class="aboutMe">
          <div className={styles.title}>
            <h1>關於我</h1>
          </div>
          <div className={styles.content}>
            <p>在淡江大學風險管理與保險系畢業後，我曾在多個領域累積了豐富的經驗，包括兆豐產物海上保險再保險人員、中國人壽業務以及中華徵信所信用分析師和參與ESG專案撰寫。
                <br/>
                <br/>
                這些多元化的工作經歷使我有機會接觸到各種不同的產業，並培養了我深入分析財務報表的能力。通過大量閱讀財報並將其應用於財務分析，我不斷吸收產業知識和資訊，這也激發了我對產業趨勢分析的濃厚興趣。
            </p>
          </div>
          <div className={styles.resumeDiv}>
            <a href="/assests/document/resume.pdf" download className={styles.resumeDownload}>履歷下載</a>
          </div>
        </div>
        <EduAndExp/>
        <ProgramSkill/>
        <LanguageSkill/>
        <div id="profolio">
          <Profolio/>
        </div>
        <div id="footer">
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default Home;