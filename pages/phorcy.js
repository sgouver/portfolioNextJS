import Head from "next/head";
import Link from 'next/link';

import Layout from '../components/Layout';
import PhorcyLanding from '../components/PhorcyLanding';

export default () => (
    <Layout>
        <Head>
            <title>Websites designed using Wordpress CMS</title>
            <meta name="description" content="Landing Page" />
        </Head>

        <div>
            <PhorcyLanding />

            <div id="main">
                <section id="javascript-one">
                    <div className="inner">
                        <header className="major">
                            <h2>Abstract of the Phorcy project</h2>
                        </header>
                        <p> 
                            The design and operation of modern ships rely heavily on the successful management of information and
                            amongst the various current and emerging challenges those associated with shipping safety maintain their paramount
                            importance. A fundamental prerequisite for effective compliance with the ever-expanding domain of SOLAS regulations
                            is the quick and reliable access to relevant information.
                        </p>
                        <p>
                            In this work, an innovative information platform is developed which through its specific reference to Chapter 3 of the
                            SOLAS Convention - Life-saving appliances and arrangements - and its applicability to Ro-Pax Ariadne (operated by
                            Hellenic Seaways) acts as demonstrative pilot for SOLAS familiarization.
                        </p>
                    </div>
                </section>
                <section id="javascript-two" className="spotlights">
                    <section>
                        <a className="image"><img src="/static/images/phorcy_com_2.png" alt="Political Analyst" /></a>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h4>Research paper</h4>
                                </header>
                                <p>Stefanos Gkouveris was the lead author in the research paper: “Development of a Multimedia Interactive Platform for SOLAS Familiarization”.</p>
                                <p>The research paper was the result of a collaboration between Dr. Artikis (Machine Learning), Dr.Tselentis (Environmental Mgmt.) & Dr.Tzannatos (Mech. Eng.).</p>
                                <header className="major">
                                    <h4>Platform</h4>
                                </header>
                                <p>To display the suggested solution mentioned in the research paper, a Front-end environment was developed using WorpPress.</p>
                                <p>A new more elaborate future version of Phorcy.com will be builed with NextJS and is currently under construction.</p>
                                <header className="major">
                                    <h4>Presentations</h4>
                                </header>
                                <ul>
                                    <li>In SOME 2018 conference at <a href="https://www.eef.edu.gr/en" target="_blank">Eugenides foundation</a></li>
                                    <li>In <a href="https://www.wmu.se/" target="_blank">World Maritime University</a> M.Sc. students at <a href="https://www.unipi.gr/unipi/en/" target="_blank">University of Piraeus</a>.</li>
                                </ul>
                                <ul className="actions">
                                    <li><Link href="http://phorcy.com/"><a target="_blank" className="button">Visit the platform</a></Link></li>
                                    <li><Link href="https://drive.google.com/open?id=1X69T4s1KtSxnxm9zsfe8pNMp8f7-4Xdq"><a target="_blank" className="button">Research paper</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </div>
    </Layout>
)
