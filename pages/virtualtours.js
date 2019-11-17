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
                                    <li><Link href=""><a target="_blank" className="button">Visit</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link href="/generic">
                            <a className="image"><img src="static/images/HILTON_ATHENS.jpg" alt="Planning and Prospects" /></a>
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
                        <a className="image"><img src="static/images/TEI_OF_ATHENS.png" alt="TEI of Athens" /></a>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>TEI of Athens</h3>
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
                        <a className="image"><img src="static/images/POSEIDON.png" alt="Restaurant Reviews" /></a>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Poseidon Hotel</h3>
                                    <h4><span className="stars">★★★★</span>★</h4>
                                </header>
                                <p>Poseidon Athens Hotel provides the ultimate destination for holidays in the Greek capital.</p>
                                <p>Poseidon was the one the first virtual tour projects. The focus was to highlight the seaside element and the stunning views the location provides.</p>

                                <ul className="actions">
                                    <li><Link href=""><a target="_blank" className="button">Visit</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <a className="image"><img src="static/images/ATHENS_ATRIUM.png" alt="Xamogela Kidengarden website" /></a>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Athens Atrium</h3>
                                    <h4><span className="stars">★★★★</span>★</h4>
                                </header>
                                <p>Known for its comfort, personal service and classic elegance, Athens Atrium Hotel & Jacuzzi Suites is one of the most promising 4 star hotels in Athens.</p>
                                <p>This was the first virtual tour project. The virtual tour main goal was to highlight the warm and friendly environment of the Hotel.</p>

                                <ul className="actions">
                                    <li><Link href=""><a target="_blank" className="button">Visit</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <a className="image"><img src="static/images/ELECTRA_HOTEL.png" alt="Restaurant Reviews" /></a>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Electra Hotel</h3>
                                </header>
                                <p>A portal created for the M.Sc. in Maritime Studies for the University of Piraeus.</p>
                                <p>The website is based on the principle to help students' easy access vital studying elements effectively. There are detailed guidelines of the curriculum, professors bios and newsfeeds.</p>
                                <p>This project also required a LAMP server to be build using dedicated servers by the ministry of education. </p>

                                <ul className="actions">
                                    <li><Link href="http://horizon.net.gr/VR/Electra/Hotel.html"><a target="_blank" className="button">Visit</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <a className="image"><img src="/static/images/odontiatros-kentro_gr.png" alt="Dentist Athens" /></a>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>odontiatros-kentro.gr</h3>
                                </header>
                                <p>A small dental care at the heart of Athens. While this small dental care was at the city centre, the customer base was declining every year.</p>
                                <p>The reason was the difficulty to be discovered by patients. 
                                The domain name was selected based on the geographical location to optimise SEO and the non-verbose simple design is aiming to attract patients of different income base.</p>
                                <ul>
                                    Additional actions:
                                    <li>Logo was designed</li>
                                    <li>Created domained based email</li>
                                    <li>Custom email signature</li>
                                    <li>Designed and printed business cards</li>
                                    <li>Added on Google maps</li>
                                    <li>Dental care photoshooting</li>
                                    <li>Appointment scheduling though the portal</li>
                                    <li>Physical label designed and placed on building's ground floor</li>
                                </ul>

                                <p>Overall the actions resulted to an <strong>50%</strong> increase in medical appointments per year and the site is steadily on Google Search first search page.</p>

                                <ul className="actions">
                                    <li><Link href="http://odontiatros-kentro.gr/"><a target="_blank" className="button">Visit</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </div>
    </Layout>
)
