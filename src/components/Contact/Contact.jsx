import './Contact.css';

function Contact() {
    return (
        <article id="form-container">
            <header>
                <h1>Contact Me</h1>
                <p>Hi there, contact me to ask me about anything you have in mind.</p>
            </header>
            <form action="../linkfree">
                <div id="name">
                    <div className="name_field-container">
                        <label htmlFor="first_name">First name</label>
                        <br />
                        <input type="text" placeholder="Enter your first name" id="first_name" />
                    </div>
                    <div className="name_field-container">
                        <label htmlFor="last_name">Last name</label>
                        <br />
                        <input type="text" placeholder="Enter your last name" id="last_name" />
                    </div>
                </div>
                <label htmlFor="email">Email</label>
                <br />
                <input type="email" required placeholder="yourname@email.com" id="email" />
                <label htmlFor="message">Message</label>
                <br />
                <textarea placeholder="Send me a message and I'll reply you as soon as possible..." id="message" />
                <div id="consent-container">
                    <input type="checkbox" required id="consent-checkbox" />
                    <label htmlFor="consent-checkbox">You agree to providing your data to Taofeeq Hamzat who may contact you.</label>
                </div>
                <input type="submit" id="btn__submit" value="Send message" />
            </form>
        </article>
    )
}

export default Contact;