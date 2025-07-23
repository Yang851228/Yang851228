import React from 'react';
import styles from '../styles/EduAndExp.module.css';

const EduAndExp = () => {
  return (
    <div>
        <div className={styles.educationContainer}>
            <div className={styles.educationLeftColumn}>
                <div className={styles.subTitle}>
                    <h2>學歷</h2>
                </div>
            </div>
            <div className={styles.educationrRightColumn}>
                <div className={styles.education}>
                    <div className={styles.educationPeriod}>2015.09 - 2019.06</div>
                    <div className={styles.educationBachelor}>淡江大學 風險管理與保險系 | <br/> 學士</div>
                </div>
                <div className={styles.education}>
                    <div className={styles.educationPeriod}>2024.06 - 2024.10</div>
                    <div className={styles.educationBachelor}>文化大學Java工程師養成班 | <br/> 進修 - 學員</div>
                </div>
            </div>
        </div>
        <hr className={styles.sectionDivider} />
        <div className={styles.experienceContainer}>
            <div className={styles.experienceLeftColumn}>
                <div className={styles.subTitle}>
                    <h2>工作經驗</h2>
                </div>
            </div>
            <div className={styles.experienceRightColumn}>
                <div className={styles.CKI}>
                    <div className={styles.experiencePeriod}>2020.02 - 2021.04</div>
                    <div className={styles.experienceContent}>
                        <div>兆豐產物保險(股)公司 | </div>
                        <div>海上保險部 - 核保/再保專員</div>
                    </div>
                </div>
                <div className={styles.KGI}>
                    <div className={styles.experiencePeriod}>2021.04 - 2022-04</div>
                    <div className={styles.experienceContent}>
                        <div>凱基人壽(股)公司 | </div>
                        <div>北區業務部 - 業務代表</div>
                    </div>
                </div>
                <div className={styles.CRIF}>
                    <div className={styles.experiencePeriod}>2022.04 - 2024.06</div>
                    <div className={styles.experienceContent}>
                        <div>中華徵信所(股)公司 | </div>
                        <div>信用管理部 - 信用分析師</div>
                    </div>
                </div>
                <div className={styles.FirstTech}>
                    <div className={styles.experiencePeriod}>2024.11 - 現今</div>
                    <div className={styles.experienceContent}>
                        <div>仁維軟體科技有限公司 | </div>
                        <div>全端工程師</div>
                        <div className={styles.experienceContentDetail}>
                            <div>工作項目:</div>
                            <ol>
                                <li>IBM BAW 系統安裝及升級</li>
                                <li>IBM BAW 系統流程設計</li>
                                <li>WebSphere Server TLSv1.2升級</li>
                                <li>與用戶確認需求後，進行開發項目，如計數器設計、難字系統API串接、退費流程客製化系統開發等</li>
                                <li>同步客戶核心系統作業，包括電訪抽樣比例調整、退費資訊同步核心系統等</li>
                            </ol>
                            <div className={styles.technique}>
                                <div>使用技術:</div>
                                <div>Java、Spring、Spring Boot、Hibernate、JSP、HTML、CSS、JavaScript、jQuery、Ajax、MS SQL Server、WebSphere、IBM BPM、JPA、MS Office</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default EduAndExp;