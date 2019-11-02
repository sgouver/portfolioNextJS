import Head from "next/head"
import Link from 'next/link'

import Layout from '../components/Layout'
import ReactjsLanding from '../components/ReactjsLanding'

export default () => (
    <Layout>
        <Head>
            <title>Landing Page</title>
            <meta name="description" content="Landing Page" />
        </Head>

        <div>
            <ReactjsLanding />

            <div id="main">
                <section id="reactjs-one">
                    <div className="inner">
                        <header className="major">
                            <h2>About the projects</h2>
                        </header>
                        <p>These projects have been developed during the Udacity Nanodegree of Front-end Web Development. 
                        The Nanodegree funded by <strong>Google - AT&T - Github</strong>.
                        The eligbility of the scholarship recipients was decided after a three months coding challenge.</p>
                    </div>
                </section>
                <section id="reactjs-two" className="spotlights">
                    <section>
                        <a className="image"><img src="/static/images/wotw.png" alt="" /></a>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Wonders of the World</h3>
                                </header>
                                <p>The application is an interactive map with all the locations of the old and new Wonders of World. The left side bar has a list of the wonders and a Search bar can narrow down the results. When user selects a wonder, a dynamic card is pops up with brief information and link for a detailed description.</p>
                                <p>ReactJS is using Google Maps API to generate and point the location of the wonders. When a wonder is selected, there is a call to Wikipedia API to retrieve a summary of the wonder. The filtration on the sidebar has been achived by using Regular Expressions.</p>
                                <ul className="actions">
                                    <li><Link href="https://sgouver.github.io/wotw/"><a target="_blank" className="button">Live</a></Link></li>
                                    <li><Link href="https://github.com/sgouver/wotw"><a target="_blank" className="button">Github</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link href="/generic">
                            <a className="image"><img src="/static/images/myreads.png" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>My Reads App</h3>
                                </header>
                                <p>The project is a responsive personal library App created by React. User can set the status of his readings. 
                                    There are three different status states:
                                    <ol>
                                        <li>Currently reading</li>
                                        <li>Want to read</li>
                                        <li>Reading</li>
                                    </ol>
                                    In Search user can find new books and add them to a status that will be transfered and remain in the MainApp page.
                                </p>
                                <ul className="actions">
                                <li><Link href="https://github.com/sgouver/myreads"><a target="_blank" className="button">Github</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </section>
            </div>

        </div>
    </Layout>
)
