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

            FirstTech: '仁維軟體科技有限公司',
            FirstTechJobTitle: '全端工程師',
            FirstTechPeriod: '2024.11 - 現今',
            FirstTechJobContentTitle: '工作項目',
            FirstTechJobContent1: '與用戶確認需求後，以Java Spring MVC架構進行項目開發，如計數器設計、難字系統API串接、退費流程客製化系統開發等',
            FirstTechJobContent2: '透過暫存資料庫與定期排程機制，支援核心系統同步作業，包括電訪抽樣比例調整、退費資訊同步核心系統等',
            FirstTechJobContent3: '透過JPA、MyBatis等技術操作MS SQL Server及Db2資料庫，並以POJO模式接/送參數',
            FirstTechJobContent4: 'JSP、HTML、CSS、JavaScript、jQuery、Ajax、Bootstrap等技術開發前端頁面',
            FirstTechJobContent5: 'IBM BAW 系統安裝及升級',
            FirstTechJobContent6: 'IBM BAW 系統流程設計',
            FirstTechJobContent7: 'WebSphere Server TLSv1.2升級',
            FirstTechJobContent8: 'Spec規格討論與確認',
            FirstTechTechnique: '使用技術',

            CRIF: '中華徵信所(股)公司',
            CRIFJobTitle: '信用管理部 - 信用分析師',
            CRIFJobContentTitle: '工作項目',
            CRIFJobContent1:'個體公司報告撰寫',
            CRIFJobContent2:'產業趨勢報告撰寫',
            CRIFJobContent3:'研讀財/年報，並分析財務公司狀況',

            KGI: '凱基人壽(股)公司',
            KGIJobTitle: '北區業務部 - 業務代表',
            KGIJobContentTitle: '工作項目',
            KGIJobContent1:'提供投資理財、保險等建議服務',
            KGIJobContent2:'協助客戶安排稅務規劃',

            CKI: '兆豐產物保險(股)公司',
            CKIJobTitle: '海上保險部 - 核保/再保專員',
            CKIJobContentTitle: '工作項目',
            CKIJobContent1:'負責企業承保及再保專案，如中油、台糖、台塑集團、群創等大型企業客戶',
            CKIJobContent2:'協談部門年度再保合約',
        },
        en: {
            education: 'Education',
            experience: 'Experience',
            educationBachelor: 'Tamkang University, Department of Risk Management and Insurance',
            bachelorDegree: 'Bachelor\'s Degree',
            furtherEducation: 'Chinese Culture University, Java Developer Training Course',
            furtherEducationDegree: 'Further Education - Student',

            FirstTech: 'FirstTech Software Limited',
            FirstTechJobTitle: 'Full Stack Engineer',
            FirstTechPeriod: '2024.11 - Present',
            FirstTechJobContentTitle: 'Job Content',
            FirstTechJobContent1: 'After confirming user\'s requirements, the project was developed by using the Java Spring MVC framework, such as design of counter, rare character system API integration, and customized system development for refund business processes',
            FirstTechJobContent2: 'By utilizing a staging database and scheduled jobs, make the system support synchronization with customer core system, including adjusting telemarketing sampling ratios and synchronizing refund information with the core system.',
            FirstTechJobContent3: 'Using technologies such as JPA and MyBatis to interact with MS SQL Server and Db2, with parameters passed to and received from the system in a POJO-based model.',
            FirstTechJobContent4: 'Developed front-end pages using technologies such as JSP, HTML, CSS, JavaScript, jQuery, Ajax, and Bootstrap.',
            FirstTechJobContent5: 'Installation and upgrade of IBM BAW system',
            FirstTechJobContent6: 'Design of IBM BAW system processes',
            FirstTechJobContent7: 'Upgrade WebSphere Server to TLSv1.2',
            FirstTechJobContent8: 'Discussing and confirming product specifications',
            FirstTechTechnique: 'Software Techniques',

            CRIF: 'China Credit information service, Ltd.',
            CRIFJobTitle: 'Credit Management Department - Credit Analyst',
            CRIFJobContentTitle: 'Job Content',
            CRIFJobContent1: 'Writing individual company reports',
            CRIFJobContent2: 'Writing industry trend reports',
            CRIFJobContent3: 'Studying financial and annual reports as well as analyzing the financial status of companies',

            KGI: 'KGI Life Insurance Co. , Ltd.',
            KGIJobTitle: 'Northern Sales Department - Sales Representative',
            KGIJobContentTitle: 'Job Content',
            KGIJobContent1: 'Provide investment, financial management, insurance and other advisory services',
            KGIJobContent2: 'Assist customers in arranging tax planning',

            CKI: 'Chung Kuo Insurance Company, Limited',
            CKIJobTitle: 'Marine Insurance Department - Underwriting / Reinsurance Specialist',
            CKIJobContentTitle: 'Job Content',
            CKIJobContent1: 'Responsible for corporate underwriting and reinsurance projects, such as large corporate clients including CPC, Taiwan Sugar, Formosa Plastics Group, Innolux Group, etc.',
            CKIJobContent2: 'Assisting negotiation of the department\'s annual reinsurance contracts',
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
                    <div className={styles.educationPeriod}>2024.06 - 2024.10</div>
                    <div className={styles.educationBachelor}>{translations[lang].furtherEducation} | <br/>{translations[lang].furtherEducationDegree}</div> {/*文化大學 Java 工程師養成班 進修 - 學員*/}
                </div>
                <div className={styles.education}>
                    <div className={styles.educationPeriod}>2015.09 - 2019.06</div>
                    <div className={styles.educationBachelor}>{translations[lang].educationBachelor} | <br/>{translations[lang].bachelorDegree}</div> {/*淡江大學 風險管理與保險系 學士*/}
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
                                <li>{translations[lang].FirstTechJobContent6}</li>
                                <li>{translations[lang].FirstTechJobContent7}</li>
                                <li>{translations[lang].FirstTechJobContent8}</li>
                            </ol>
                            <div className={styles.technique}>
                                <div className={styles.techniqueTitle}>● {translations[lang].FirstTechTechnique} :</div>
                                <div className={styles.techniqueDetail}>Java、Spring、Spring Boot、Hibernate、JPA、MyBatis、JSP、HTML、CSS、JavaScript、jQuery、Ajax、MS SQL Server、Db2、Oracle、WebSphere、IBM BPM、IBM ODM、MS Office</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.CRIF}> {/*中華徵信所(股)公司*/}
                    <div className={styles.experiencePeriod}>2022.04 - 2024.06</div>
                    <div className={styles.experienceContent}>
                        <div>{translations[lang].CRIF} | </div>
                        <div>{translations[lang].CRIFJobTitle}</div>
                        <div className={styles.experienceContentDetail}>
                            <div>{translations[lang].CRIFJobContentTitle} :</div>
                            <ol>
                                <li>{translations[lang].CRIFJobContent1}</li>
                                <li>{translations[lang].CRIFJobContent2}</li>
                                <li>{translations[lang].CRIFJobContent3}</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className={styles.KGI}> {/*凱基人壽(股)公司*/}
                    <div className={styles.experiencePeriod}>2021.04 - 2022.04</div>
                    <div className={styles.experienceContent}>
                        <div>{translations[lang].KGI} | </div>
                        <div>{translations[lang].KGIJobTitle}</div>
                        <div className={styles.experienceContentDetail}>
                            <div>{translations[lang].KGIJobContentTitle} :</div>
                            <ol>
                                <li>{translations[lang].KGIJobContent1}</li>
                                <li>{translations[lang].KGIJobContent2}</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className={styles.CKI}> {/*兆豐產物保險(股)公司*/}
                    <div className={styles.experiencePeriod}>2020.02 - 2021.04</div>
                    <div className={styles.experienceContent}>
                        <div>{translations[lang].CKI} | </div> 
                        <div>{translations[lang].CKIJobTitle}</div>
                        <div className={styles.experienceContentDetail}>
                            <div>{translations[lang].CKIJobContentTitle} :</div>
                            <ol>
                                <li>{translations[lang].CKIJobContent1}</li>
                                <li>{translations[lang].CKIJobContent2}</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default EduAndExp;