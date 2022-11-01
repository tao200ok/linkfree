import './Profile.css';

// import Link from '../Link/Link';

import shareIcon from '../../assets/share_icon.svg';

import profileImage from '../../assets/profile__img.svg'

function Profile() {
    return (
        <header>
            <img src={profileImage} alt="user" id="profile__image" />
            <h1>Taofeeq Hamzat</h1>
            <div class="share">
                <span class="tooltiptext">Share Link</span>
                <img src={shareIcon} alt="share" id="share" />
            </div>
        </header>
    );
}

export default Profile;