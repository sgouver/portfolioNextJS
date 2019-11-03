import Head from "next/head";
import Link from 'next/link';

import Layout from '../components/Layout';
import JavascriptLanding from '../components/JavascriptLanding';

export default () => (
    <Layout>
        <Head>
            <title>Vanilla JavaScript and jQuery</title>
            <meta name="description" content="Landing Page" />
        </Head>

        <div>
            <JavascriptLanding />

            <div id="main">
                <section id="javascript-one">
                    <div className="inner">
                        <header className="major">
                            <h2>About the projects</h2>
                        </header>
                        <p>These projects have been developed during the Udacity Nanodegree of Front-end Web Development. 
                        The Nanodegree funded by <strong>Google - AT&T - Github</strong>.
                        The eligbility of the scholarship recipients was decided after a three months coding challenge.</p>
                    </div>
                </section>
                <section id="javascript-two" className="spotlights">
                    <section>
                        <a className="image"><img src="/static/images/restaurant_reviews.png" alt="Restaurant Reviews" /></a>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Restaurant Reviews</h3>
                                </header>
                                <ul>
                                    <h5>The project is a responsive Restaurant Review site :</h5>
                                    <li>For an improved future css experience two new css files have been created for the responsive features of each page.</li>
                                    <li>Leaflet has been locally installed due to functionality issues. Installed imagemin to compress image and move newly created to the comp folder.</li>
                                    <li>Installed gulp-image-resize (with imagemagick & graphicsmagick) to resize the images for the mobile and tablet use.</li>
                                    <li>Modified js and responsive css to dynamically select the correct image according to user's device.</li>
                                    <li>A service worker has been installed for off-line view and lie-fi issues.</li>
                                    <br/>
                                    <h5>ARIA implementation</h5>
                                    <li>Dynamically set alt image attributes</li>
                                    <li>Set labels where needed</li>
                                    <li>Set tabindex for improved navigation</li>
                                    <li>100% in Google Chrome a11y Audit</li>
                                    <li>Website test devices : Galaxy S5, IPad, Desktop</li>
                                </ul>

                                <ul className="actions">
                                    <li><Link href="https://github.com/sgouver/restaurant-review"><a target="_blank" className="button">Github</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link href="/generic">
                            <a className="image"><img src="/static/images/chess_maching_game.png" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Chess Matching Game</h3>
                                </header>

                                <ul>
                                    <h4>The project is a memory game, with a chess theme.</h4>
                                    <h5>Rules :</h5>
                                    
                                    <li>A user selects a card and opens a chess piece</li>
                                    <li>If the second card is similar then the two chess pieces stay on top.</li>
                                    <li>The game ends when the user finds all the eight different matching compilations.</li>
                                    <li>A modal pop-up window open up to show the score of the user.</li>
                                    <br/>

                                    <h5>Score calculation:</h5>
                                    <li>Score is based on the player Moves</li>
                                    <li>If there are more than 16, a star is removed.</li>
                                    <li>The game ends when the user finds all the eight different matching compilations.</li>
                                    <li>If there are more than 30, a second star is removed.</li>
                                </ul>
                                <ul className="actions">
                                    <li><Link href="https://github.com/sgouver/memory-game"><a target="_blank" className="button">Github</a></Link></li>
                                    <li><Link href="https://sgouver.github.io/memory-game/"><a target="_blank" className="button">Live</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <a className="image"><img src="/static/images/arcade_game.png" alt="Restaurant Reviews" /></a>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Arcade game</h3>
                                </header>
                                <ul>
                                    <h4>The project is an arcade game, with a borat theme.</h4>
                                    <h5>Rules :</h5>
                                    <li>Player can not move off screen</li>
                                    <li> Bugs cross the screen</li>
                                    <li>Vehicle-player collisions happen logically (not too early or too late)</li>
                                    <li>'Success' pop-up window appear when player wins</li>
                                    <li>'Fail' pop-up window appear when player collide</li>                              
                                </ul>

                                <ul className="actions">
                                    <li><Link href="https://github.com/sgouver/arcade-game"><a target="_blank" className="button">Github</a></Link></li>
                                    <li><Link href="https://sgouver.github.io/arcade-game/"><a target="_blank" className="button">Live</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </section>
                
            </div>
        </div>
    </Layout>
)
