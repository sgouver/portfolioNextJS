import Head from "next/head";
import Link from 'next/link';

import Layout from '../components/Layout';
import WordpressLanding from '../components/WordpressLanding';

const Wordpress = () => (
    <Layout>
        <Head>
            <title>Websites designed using Wordpress CMS</title>
            <meta name="description" content="Landing Page" />
        </Head>

        <div>
            <WordpressLanding />

            <div id="main">
                <section id="javascript-one">
                    <div className="inner">
                        <header className="major">
                            <h2>About the projects</h2>
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
                    <section>
                        <Link href="/generic">
                            <a className="image"><img src="/static/images/pnp_gr.png" alt="Planning and Prospects" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>pnp.gr</h3>
                                </header>

                                <p>Planning and Prospects is a well-established financial services firm. Located in the heart of Athens, PNP has accumulated a significant number of prestigious clients.</p>
                                <p>The website was developed having in mind the existing history of the company and high expertise of the individuals.</p>
                                <p>To highlight the above elements, there was a photoshooting of the personnel and a dedicated page to convey a short bio for each individual. 
                                A logo was also designed as well as mail signatures and business cards, resulting to an overall re-branding of the firm.</p>
                                <ul className="actions">
                                    <li><Link href="http://pnp.gr/"><a target="_blank" className="button">Visit</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <a className="image"><img src="/static/images/nod_gr.png" alt="Nautical Club of Delfinario" /></a>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>nod.gr</h3>
                                </header>
                                <p>Nautical Club of Delfinario is a sea activities club based on Pireaus.</p>
                                <p>The structure of the website is focusing on club's activities and a dedicated page to inform members about the recent news.</p>
                                <p>Blue and yellow colours were used to convey the sea and sun elements of the activities and club's location.</p>

                                <ul className="actions">
                                    <li><Link href="http://nod.gr/"><a target="_blank" className="button">Visit</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <a className="image"><img src="/static/images/odontiatriko_kentro_com.png" alt="Restaurant Reviews" /></a>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>odontiatriko-kentro.com</h3>
                                </header>
                                <p>Developed a website of a dental centre. The dental centre has modern equipment and a variety of dental specialisations.</p>
                                <p>To properly convey the friendly and welcoming atmosphere of the dental centre, a photoshooting was done on the various different spaces.</p>
                                <p>There was also a redesign of existing logo in order to be used in a higher quality. </p>

                                <ul className="actions">
                                    <li><Link href="http://odontiatriko-kentro.com/"><a target="_blank" className="button">Visit</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <a className="image"><img src="/static/images/xamogela_gr.png" alt="Xamogela Kidengarden website" /></a>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>xamogela.gr</h3>
                                </header>
                                <p>A redesign of a preschool (kindergarten) existing website.</p>
                                <p>The overall design is using a large pallet to present the joyful and dreamy environment of the kindergarten. A large range of activities was displayed through video and photo mediums.</p>
                                <p>The website is highly focused on SEO and on the social media interconnectivity.</p>

                                <ul className="actions">
                                    <li><Link href="http://xamogela.gr/"><a target="_blank" className="button">Visit</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <a className="image"><img src="/static/images/maritime_unipi_gr.png" alt="Restaurant Reviews" /></a>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>maritime.unipi.gr</h3>
                                </header>
                                <p>A portal created for the M.Sc. in Maritime Studies for the University of Piraeus.</p>
                                <p>The website is based on the principle to help students' easy access vital studying elements effectively. There are detailed guidelines of the curriculum, professors bios and newsfeeds.</p>
                                <p>This project also required a LAMP server to be build using dedicated servers by the ministry of education. </p>

                                <ul className="actions">
                                    <li>
                                        <a target="_blank" className="button">Currently inactive</a>
                                    </li>
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

export default Wordpress