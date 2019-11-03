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
                            <h2>About the project</h2>
                        </header>
                        <p>A list of Wordpress based websites. The Websites were developed having in mind the SEO, responsivness and accesibility.</p>
                    </div>
                </section>
                <section id="javascript-two" className="spotlights">
                    <section>
                        <a className="image"><img src="/static/images/political-analyst_com.png" alt="Political Analyst" /></a>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>political-analist.com</h3>
                                </header>
                                <p>Developed blog/portfolio website for Mr. Ilyas Roubanis, who is a political analyst and journalist.</p>
                                <p>To achieve the best SEO results the <strong>political-analyst.com</strong> domain was acquired.
                                Since Mr. Roubanis is working on international basis, the <strong>.com</strong> suffix was preferred.</p>
                                <p>The design is imitating a newspaper and trying to subvert from a typical blog site while placing the portfolio aspect as a second layer. 
                                Typography and colours are also adjusted to help the readers to focus on the content.</p>

                                <ul className="actions">
                                    <li><Link href="http://political-analyst.com/"><a target="_blank" className="button">Visit</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </div>
    </Layout>
)
