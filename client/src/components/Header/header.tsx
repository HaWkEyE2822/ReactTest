import * as React from 'react';
import { SendIcon, CameraIcon } from '../../atoms/icons/outlined/icons-outlined';
import InstagramLogoText from '../../assets/images/instagram-logo-text.png';
import axios from 'axios';
import API from '../../config/api-endpoints';

const handleClick = () => {
    axios.get(`${API.AUTH_URL}/signup`)
        .then(res => {
            console.log('check res', res);
        })
}

const Header = () => {
    return (
        <div className="header_container">
            <div>
                <CameraIcon width="2.8rem" height="2.8rem"/>
            </div>
            <div style={{
                flex: 1,
                marginLeft: '1.2rem',
                height: '2.8rem'
            }}>
                <img height="100%" src={InstagramLogoText}/>
            </div>
            <div onClick={handleClick}>
                <SendIcon width="2.8rem" height="2.8rem"/>
            </div>
        </div>

    );
}

export default Header;