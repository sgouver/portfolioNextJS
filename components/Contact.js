const Contact = (props) => (
    <section id="contact">
        <section>
            <div className="contact-method">
                <span className="icon alt fa-envelope"></span>
                <h3>Email</h3>
                <span className="unselectable">stefanosgkouveris@gmail.com</span>
            </div>
        </section>
        <section>
            <div className="contact-method">
                <span className="icon alt fa-phone"></span>
                <h3>Phone</h3>
                <span className="unselectable">+44 07925 013 989</span>
            </div>
        </section>
        <section>
            <div className="contact-method">
                <span className="icon alt fa-home"></span>
                <h3>Address</h3>
                <span className="unselectable">Wapping, London, E1W 2PU, United Kingdom</span>
            </div>
        </section>
    </section>
)

export default Contact
