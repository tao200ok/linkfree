import './Profile.css';

// import Link from '../Link/Link';

import profileImage from '../../assets/profile__img.svg'

function Profile() {
    return (
        <header>
            <img src={profileImage} alt="user" id="profile__image" />
            <h1>First Last</h1>
        </header>
    );
}

export default Profile;