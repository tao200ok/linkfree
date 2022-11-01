import './Social.css';

import slack from '../../assets/slack.svg';
import github from '../../assets/github.svg';

function Social() {
    return (
        <div className='social_links'>
            <div>
                <a id="slack" className='social' href='http://slack.com/tao' target="_blank" rel='noreferrer'><img src={slack} alt='' /></a>
                <a id="github" className='social' href='https://github.com/tao200ok' target="_blank" rel='noreferrer'><img src={github} alt='' /></a>
            </div>
        </div>
    );
}

export default Social;