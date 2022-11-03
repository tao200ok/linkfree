import './Links.css';
import Link from '../Link/Link';
import { Link as RouterLink } from 'react-router-dom';

function Links() {
    return (
        <article>
            <Link id="slack" url="#" content="tao" />
            <Link id="twitter" url="https://twitter.com/gtktao" content="Twitter Link" />
            <Link id="btn__zuri" url="https://training.zuri.team" content="Zuri Team" />
            <Link id="books" url="https://books.zuri.team" content="Zuri Books" />
            <Link id="book__python" url="https://books.zuri.team/python-for-beginners?ref_id=tao" content="Python Books" />
            <Link id="pitch" url="#" content="Background Check for Coders" />
            <Link id="book__design" url="https://books.zuri.team/design-rules" content="Design Books" />
            <RouterLink id="contact" className="link" to="/contact">Contact Me</RouterLink>
        </article>
    );
}

export default Links;