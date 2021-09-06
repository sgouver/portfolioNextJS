import Head from "next/head";
import Link from "next/link";

import Layout from "../components/Layout";
import AngularjsLanding from "../components/AngularjsLanding";

const AngularJS = () => (
    <Layout>
        <Head>
            <title>Angular JS - Projects</title>
            <meta name="description" content="Landing Page" />
        </Head>

        <div>
            <AngularjsLanding />

            <div id="main">
                <section id="angularjs-one">
                    <div className="inner">
                        <header className="major">
                            <h2>Inspired Thinking Group & Canopy Platform</h2>
                        </header>
                        <p>In our always-on world, marketing is being driven by complex data and an ever-increasing need to execute millions of unique customer interactions on a daily basis. Our powerful technology, Canopy : Deploy, and award-winning CRM team will help you cut through this multichannel mayhem and deliver hyper-personalised interactions that matter to every single customer.</p>
                        <Link href="https://www.itg.co.uk/technology/marketing-automation/"><a target="_blank" className="button">Read more</a></Link>
                    </div>
                </section>
                <section id="angularjs-two" className="spotlights">
                    <section>
                        <Link href="/generic">
                            <a className="image"><img src="/static/images/teamitg.png" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Front-End Web Developer</h3>
                                </header>
                                <p>As part of the Canopy team in Inspired Thinking Group, I have the great opportunity to contribute in the development and maintenance of the transformative Canopy application.</p>
                                <h5>Key duties:</h5>
                                <ul>
                                    <li>Development and maintenance of Canopy application (AngularJS).</li>
                                    <li>New features development.</li>
                                    <li>Design of new deployments.</li>
                                    <li>Debugging and deploying patches based on issues reported by the clients.</li>
                                    <li>New releases deployment with GIT (version control).</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
            
        </div>
    </Layout>
)

export default AngularJS