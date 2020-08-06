import * as React from 'react';
import { SendIcon, CameraIcon } from '../../atoms/icons/outlined/icons-outlined';
import InstagramLogoText from '../../assets/images/instagram-logo-text.png';

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
            <div>
                <SendIcon width="2.8rem" height="2.8rem"/>
            </div>
        </div>

    );
}

export default Header;