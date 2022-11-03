import './Contact.css';

function Contact() {
    return (
        <article id="form-container">
            <header>
                <h1>Contact Me</h1>
                <p>Hi there, contact me to ask me about anything you have in mind.</p>
            </header>
            <form action="./">
                <div id="form__name">
                    <div className="name-field-container">
                        <label htmlFor="first-name">First name</label>
                        <br />
                        <input type="text" placeholder="Enter your first name" id="first-name" />
                    </div>
                    <div className="name-field-container">
                        <label htmlFor="last-name">Last name</label>
                        <br />
                        <input type="text" placeholder="Enter your last name" id="last-name" />
                    </div>
                </div>
                <label htmlFor="form__email">Email</label>
                <br />
                <input type="email" placeholder="yourname@email.com" id="form__email" />
                <label htmlFor="form__message">Message</label>
                <br />
                <textarea placeholder="Send me a message and I'll reply you as soon as possible..." id="form__message" />
                <div id="consent-container">
                    <input type="checkbox" id="form__consent-checkbox" />
                    <label htmlFor="form__consent-checkbox">You agree to providing your data to Taofeeq Hamzat who may contact you.</label>
                </div>
                <input type="submit" value="Send message" />
            </form>
        </article>
    )
}

export default Contact;