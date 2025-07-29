import React from 'react';
import styles from '../styles/EduAndExp.module.css';

const EduAndExp = ({ lang }) => {
    const translations = {
        zh: {
            education: '學歷',
            experience: '經歷',
            educationBachelor: '淡江大學 風險管理與保險系',
            bachelorDegree: '學士',
            furtherEducation: '文化大學 Java 工程師養成班',
            furtherEducationDegree: '進修 - 學員',
            CKI: '兆豐產物保險(股)公司',
            CKIJobTitle: '海上保險部 - 核保/再保專員',
            KGI: '凱基人壽(股)公司',
            KGIJobTitle: '北區業務部 - 業務代表',
            CRIF: '中華徵信所(股)公司',
            CRIFJobTitle: '信用管理部 - 信用分析師',
            FirstTech: '仁維軟體科技有限公司',
            FirstTechJobTitle: '全端工程師',
            FirstTechPeriod: '2024.11 - 現今',
            FirstTechJobContentTitle: '工作項目',
            FirstTechJobContent1: 'IBM BAW 系統安裝及升級',
            FirstTechJobContent2: 'IBM BAW 系統流程設計',
            FirstTechJobContent3: 'WebSphere Server TLSv1.2升級',
            FirstTechJobContent4: '與用戶確認需求後，進行開發項目，如計數器設計、難字系統API串接、退費流程客製化系統開發等',
            FirstTechJobContent5: '同步客戶核心系統作業，包括電訪抽樣比例調整、退費資訊同步核心系統等',
            FirstTechTechnique: '使用技術',
        },
        en: {
            education: 'Education',
            experience: 'Experience',
            educationBachelor: 'Tamkang University, Department of Risk Management and Insurance',
            bachelorDegree: 'Bachelor\'s Degree',
            furtherEducation: 'Chinese Culture University, Java Developer Training Course',
            furtherEducationDegree: 'Further Education - Student',
            CKI: 'Chung Kuo Insurance Company, Limited',
            CKIJobTitle: 'Marine Insurance Department - Underwriting / Reinsurance Specialist',
            KGI: 'KGI Life Insurance Co. , Ltd.',
            KGIJobTitle: 'Northern Sales Department - Sales Representative',
            CRIF: 'China Credit information service, Ltd.',
            CRIFJobTitle: 'Credit Management Department - Credit Analyst',
            FirstTech: 'FirstTech Software Limited',
            FirstTechJobTitle: 'Full Stack Engineer',
            FirstTechPeriod: '2024.11 - Present',
            FirstTechJobContentTitle: 'Job Content',
            FirstTechJobContent1: 'Installation and upgrade of IBM BAW system',
            FirstTechJobContent2: 'Design of IBM BAW system processes',
            FirstTechJobContent3: 'Upgrade WebSphere Server to TLSv1.2',
            FirstTechJobContent4: 'Development projects after confirming requirements with users, such as counter design, rare character system API integration, and customized system development for refund business processes',
            FirstTechJobContent5: 'Synchronizing customer core system operations, including adjusting telemarketing sampling ratios and synchronizing refund information with the core system',
            FirstTechTechnique: 'Software Techniques',
        }
    };

  return (
    <div>
        <div className={styles.educationContainer}>
            <div className={styles.educationLeftColumn}>
                <div className={styles.subTitle}>
                    <h1>{translations[lang].education}</h1> {/*學歷*/}
                </div>
            </div>
            <div className={styles.educationrRightColumn}>
                <div className={styles.education}>
                    <div className={styles.educationPeriod}>2015.09 - 2019.06</div>
                    <div className={styles.educationBachelor}>{translations[lang].educationBachelor} | <br/>{translations[lang].bachelorDegree}</div> {/*淡江大學 風險管理與保險系 學士*/}
                </div>
                <div className={styles.education}>
                    <div className={styles.educationPeriod}>2024.06 - 2024.10</div>
                    <div className={styles.educationBachelor}>{translations[lang].furtherEducation} | <br/>{translations[lang].furtherEducationDegree}</div> {/*文化大學 Java 工程師養成班 進修 - 學員*/}
                </div>
            </div>
        </div>
        <hr className={styles.sectionDivider} />
        <div className={styles.experienceContainer}>
            <div className={styles.experienceLeftColumn}>
                <div className={styles.subTitle}>
                    <h1>{translations[lang].experience}</h1> {/*經歷*/}
                </div>
            </div>
            <div className={styles.experienceRightColumn}>
                <div className={styles.CKI}> {/*兆豐產物保險(股)公司*/}
                    <div className={styles.experiencePeriod}>2020.02 - 2021.04</div>
                    <div className={styles.experienceContent}>
                        <div>{translations[lang].CKI} | </div> 
                        <div>{translations[lang].CKIJobTitle}</div>
                    </div>
                </div>
                <div className={styles.KGI}> {/*凱基人壽(股)公司*/}
                    <div className={styles.experiencePeriod}>2021.04 - 2022-04</div>
                    <div className={styles.experienceContent}>
                        <div>{translations[lang].KGI} | </div>
                        <div>{translations[lang].KGIJobTitle}</div>
                    </div>
                </div>
                <div className={styles.CRIF}> {/*中華徵信所(股)公司*/}
                    <div className={styles.experiencePeriod}>2022.04 - 2024.06</div>
                    <div className={styles.experienceContent}>
                        <div>{translations[lang].CRIF} | </div>
                        <div>{translations[lang].CRIFJobTitle}</div>
                    </div>
                </div>
                <div className={styles.FirstTech}> {/*仁維軟體科技有限公司*/}
                    <div className={styles.experiencePeriod}>{translations[lang].FirstTechPeriod}</div>
                    <div className={styles.experienceContent}>
                        <div>{translations[lang].FirstTech} | </div>
                        <div>{translations[lang].FirstTechJobTitle}</div>
                        <div className={styles.experienceContentDetail}>
                            <div>● {translations[lang].FirstTechJobContentTitle} :</div>
                            <ol>
                                <li>{translations[lang].FirstTechJobContent1}</li>
                                <li>{translations[lang].FirstTechJobContent2}</li>
                                <li>{translations[lang].FirstTechJobContent3}</li>
                                <li>{translations[lang].FirstTechJobContent4}</li>
                                <li>{translations[lang].FirstTechJobContent5}</li>
                            </ol>
                            <div className={styles.technique}>
                                <div className={styles.techniqueTitle}>● {translations[lang].FirstTechTechnique} :</div>
                                <div>Java、Spring、Spring Boot、Hibernate、JPA、JSP、HTML、CSS、JavaScript、jQuery、Ajax、MS SQL Server、WebSphere、IBM BPM、IBM ODM、MS Office</div>
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