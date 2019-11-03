import Link from 'next/link'

import Layout from '../components/Layout'
import Banner from '../components/Banner'

export default () => (
    <Layout>
        <div>
            <Banner />

            <div id="main">
                <section id="one" className="tiles">
                    <article>
                        <header className="major">
                            <h3>Angular JS</h3>
                            <p>
                                Development and UI/UX design of Canopy 3 
                                <br/>    
                                at Insipred Thinking Group.
                            </p>
                        </header>
                        <Link href="/angularJS"><a className="link primary"></a></Link>
                    </article>
                    <article>
                        <header className="major">
                            <h3>React JS</h3>
                            <p>
                            Development and UI/UX design of projects
                            <br/>    
                            for Udacity (Google - AT&T - GitHub) Scholarship.
                            </p>
                        </header>
                        <Link href="/reactJS"><a className="link primary"></a></Link>
                    </article>
                    <article>
                        <header className="major">
                            <h3>Vanilla Javascript and jQuery</h3>
                            <p>
                                Projects developed and designed 
                                <br/>    
                                using Vanilla Javascript or jQuery library.
                            </p>
                        </header>
                        <Link href="/javascript"><a className="link primary"></a></Link>
                    </article>
                    <article>
                        <header className="major">
                            <h3>WordPress CMS</h3>
                            <p>
                                Websites designed
                                <br/>    
                                using WordPress CMS.
                            </p>
                        </header>
                        <Link href="/wordpress"><a className="link primary"></a></Link>
                    </article>
                    <article>
                        <header className="major">
                            <h3>Phorcy.com</h3>
                            <p>
                                Research paper publication based on e-learning.
                                <br/>    
                                Development of a platform based on the concept.
                            </p>
                        </header>
                        <Link href="/phorcy"><a className="link primary"></a></Link>
                    </article>
                    <article>
                        <header className="major">
                            <h3>Virtual Tours</h3>
                            <p>
                                Developement of virtual Tours
                                <br/>
                            </p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                </section>
                <section id="two">
                    <div className="inner">
                        <header className="major">
                            <h2>Short bio</h2>
                        </header>
                        <p>
                            My background is in Mechanical Engineering and I worked for several years in the Maritime Industry.
                            <br/>
                            In 2014, I started gradually to shift career paths by developing WordPress sites and Virtual Tours.
                            <br/>
                            Following this path, allowed me to cooperate wth reputable Hotels and Companies. 
                            <br/>
                            During that period I became a <a href="https://www.google.com/streetview/contacts-tools/" target="_blank">Google trusted photographer</a> based in Athens and acquired a Google AdWords certification.
                            <br/>
                            In 2017, I received a <a href="https://www.udacity.com/scholarships" target="_blank">Udacity scholarship</a> for a Front-end Web Developer Nanodegree, sponsored by Google - AT&T - GitHub.
                            <br/>
                            At the same time, I took a bold decision to follow my passion for Front-end Web Development, relocating to the United Kingdom.
                            <br/>
                            Currently, I am working full-time as a Front-end Web Developer in London.
                        </p>
                    </div>
                </section>
            </div>

        </div>
    </Layout>
)
