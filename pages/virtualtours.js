import Head from "next/head";
import Link from 'next/link';

import Layout from '../components/Layout';
import VirtualtoursLanding from '../components/VirtualtoursLanding';

export default () => (
    <Layout>
        <Head>
            <title>Websites designed using Wordpress CMS</title>
            <meta name="description" content="Landing Page" />
        </Head>

        <div>
            <VirtualtoursLanding />

            <div id="main">
                <section id="javascript-one">
                    <div className="inner">
                        <header className="major">
                            <h2>About the projects</h2>
                        </header>
                        <p>The below 360 degree virtual tours have been developed using various technics. The portfolio mostly consists Hotels and restaurants.</p>
                    </div>
                </section>
                <section id="javascript-two" className="spotlights">
                    <section>
                        <a className="image"><img src="static/images/CAPSIS_OUT_OF_THE_BLUE.png" alt="Capsis Elite Resort" /></a>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Out of the Blue - Capsis Elite Resort</h3>
                                    <h4><span className="stars">★★★★★</span></h4>
                                </header>
                                <p>Set on its own private peninsula in Crete and affording spectacular Aegean Sea views, the Out of the Blue, Capsis Elite Resort is a luxury beach resort offering medical wellness, all-suite hotels, bungalows, private-pool villas and extensive leisure facilities.</p>
                                <p>Capsis virtual tour project has been one of the most challenging projects. The project has over 150 panoramnic pictures and the UI design focuses on navigating efficiently to the correct panoramic picture. The final project received positive feedback and is currently used not only by the Hotel's visitors but also as a presentation tool in the company conferences.</p>

                                <ul className="actions">
                                    <li><Link href="https://virtualtourprojects.bitbucket.io/out-of-the-blue/"><a target="_blank" className="button">Visit</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link href="/generic">
                            <a className="image"><img src="static/images/HILTON_ATHENS.jpg" alt="Hilton of Athens" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Hilton of Athens</h3>
                                    <h4><span className="stars">★★★★★</span></h4>
                                </header>

                                <p>Hilton Athens is more than a hotel - it's a legacy. A favorite among locals and guests alike, our landmark hotel is a destination itself as the hub for Athens’ business, cultural and social life.</p>
                                <p>This is one of the most recent Virtual Tour projects. There was a particular focus on the responsiveness and accessibility of the platform. To achieve the desired results, <a href="https://github.com/google/marzipano" target="_blank">martzipano.js</a> (open source library) was used. The code is using custom JavaScript, HTML, CSS code and is under version control (GIT) for easy maintenance and control.</p>
                                <ul className="actions">
                                    <li><Link href="https://www.hiltonathens.gr/360tour/"><a target="_blank" className="button">Visit</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <a className="image"><img src="static/images/CACTUS_ROYAL.png" alt="Cactus Royal Hotel" /></a>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Cactus Royal</h3>
                                    <h4><span className="stars">★★★★★</span></h4>
                                </header>
                                <p>In an area of natural beauty, on the sea-side road of Stalis next to the most celebrated sandy beach of the area, the five-star holiday resort of Cactus Royal arises majestically.</p>

                                <ul className="actions">
                                    <li><Link href="https://virtualtourprojects.bitbucket.io/electra"><a target="_blank" className="button">Visit</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <a className="image"><img src="static/images/ELECTRA_HOTEL.png" alt="Electra Hotel" /></a>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Electra Hotel</h3>
                                    <h4><span className="stars">★★★★</span>★</h4>
                                </header>
                                <p>Inviting and welcoming, the Electra Athens, in the city’s commercial district is the place to stay whether you are here for business or pleasure.</p>

                                <ul className="actions">
                                    <li><Link href="https://virtualtourprojects.bitbucket.io/electra"><a target="_blank" className="button">Visit</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <a className="image"><img src="static/images/CACTUS_VILLAGE.png" alt="Cactus Village Hotel" /></a>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Cactus Village</h3>
                                    <h4><span className="stars">★★★★</span>★</h4>
                                </header>
                                <p>Inviting and welcoming, the Electra Athens, in the city’s commercial district is the place to stay whether you are here for business or pleasure.</p>

                                <ul className="actions">
                                    <li><Link href="https://virtualtourprojects.bitbucket.io/cactus-village/"><a target="_blank" className="button">Visit</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <a className="image"><img src="static/images/POSEIDON.png" alt="Poseidon Hotel" /></a>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Poseidon Hotel</h3>
                                    <h4><span className="stars">★★★★</span>★</h4>
                                </header>
                                <p>Poseidon Athens Hotel provides the ultimate destination for holidays in the Greek capital.</p>
                                <p>Poseidon was the one the first virtual tour projects. The focus was to highlight the seaside element and the stunning views the location provides.</p>

                                <ul className="actions">
                                    <li><Link href="https://virtualtourprojects.bitbucket.io/poseidon/"><a target="_blank" className="button">Visit</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <a className="image"><img src="static/images/CACTUS_BEACH.png" alt="Athens Atrium" /></a>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Cactus Beach</h3>
                                    <h4><span className="stars">★★★★</span>★</h4>
                                </header>
                                <p>Known for its comfort, personal service and classic elegance, Athens Atrium Hotel & Jacuzzi Suites is one of the most promising 4 star hotels in Athens.</p>
                                <p>This was the first virtual tour project. The virtual tour main goal was to highlight the warm and friendly environment of the Hotel.</p>

                                <ul className="actions">
                                    <li><Link href="https://virtualtourprojects.bitbucket.io/cactus-beach/"><a target="_blank" className="button">Visit</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <a className="image"><img src="static/images/ATHENS_ATRIUM.png" alt="Athens Atrium" /></a>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Athens Atrium</h3>
                                    <h4><span className="stars">★★★★</span>★</h4>
                                </header>
                                <p>Known for its comfort, personal service and classic elegance, Athens Atrium Hotel & Jacuzzi Suites is one of the most promising 4 star hotels in Athens.</p>
                                <p>This was the first virtual tour project. The virtual tour main goal was to highlight the warm and friendly environment of the Hotel.</p>

                                <ul className="actions">
                                    <li><Link href="https://virtualtourprojects.bitbucket.io/athens-atrium"><a target="_blank" className="button">Visit</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <a className="image"><img src="static/images/ILISSOS.png" alt="Illisos Hotel"/></a>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Illisos Hotel</h3>
                                    <h4><span className="stars">★★★★</span>★</h4>
                                </header>
                                <p>Hotel Ilissos has been providing the best of Athenian hospitality for over 35 years, and is situated just a stone’s throw from the historical and commercial center of Athens.</p>

                                <ul className="actions">
                                    <li><Link href="https://virtualtourprojects.bitbucket.io/ilissos/"><a target="_blank" className="button">Visit</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <a className="image"><img src="static/images/TEI_OF_ATHENS.png" alt="Technological Educational Institute of Athens" /></a>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Technological Educational Institute of Athens</h3>
                                </header>
                                <p>Founded in 1983 it originated from one of the first five Centres for Higher Technical Education established in 1974. The Technological Educational Institute of Athens offered a wide range of undergraduates and postgraduates studies. On 1 March 2018 the institute was merged with TEI of Piraeus forming the newly established University of West Attica.</p>
                                <p>The project was a part of a thesis. All the important indoor and outdoor areas of the institute are depicted. The virtual tour has audio guidance and aims to introduce new students and visitors to the facilities.</p>
                                <p>The virtual tour of the technical institute of Athens is hosted in the institute servers.</p>

                                <ul className="actions">
                                    <li><Link href="http://www.teiath.gr/ateia360/EN/ATHENS.html"><a target="_blank" className="button">Visit</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <a className="image"><img src="static/images/TEI_OF PIRAEUS.png" alt="Piraeus University of Applied Sciences" /></a>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Piraeus University of Applied Sciences -  Workshop</h3>
                                </header>
                                <p>The Piraeus University of Applied Sciences, also known as Technological Education Institute of Piraeus (TEIPIR), was a public higher education institute supervised by the Ministry of Education and Research</p>
                                <p>The project is a part of a Thesis. The scope was to develop an e-learning introductory platform for the institutes workshop. The platform is using virtual tours with intergrated voice overs, videos and an archive of worlkshop's documentation.</p>

                                <ul className="actions">
                                    <li><Link href="https://virtualtourprojects.bitbucket.io/tei-piraeus/"><a target="_blank" className="button">Visit</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </div>
    </Layout>
)
