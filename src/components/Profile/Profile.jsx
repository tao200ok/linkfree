import './Profile.css';

import shareIcon from '../../assets/share_icon.svg';

import profileImage from '../../assets/profile__img.jpeg';

function Profile() {
    return (
        <header>
            <img src={profileImage} alt="user" id="profile__image" />
            <h1>Taofeeq Hamzat</h1>
            <div class="share" onClick={()=> navigator.clipboard.writeText("https://twitter.com/gtktao")}>
                <span class="tooltiptext">Copy Link</span>
                <img src={shareIcon} alt="share" id="share" />
            </div>
        </header>
    );
}

export default Profile;