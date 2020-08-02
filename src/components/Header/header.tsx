import * as React from 'react';
import { SendIcon } from '../../atoms/icons/sendIcon';
import InstagramLogoText from '../../assets/images/instagram-logo-text.png';
import { CameraIcon } from '../../atoms/icons/cameraIcon';

const Header = () => {
    return (
        <div className="header_container">
            <div>
                <CameraIcon width="6rem" height="6rem"/>
            </div>
            <div style={{
                flex: 1,
                marginLeft: '12px',
                height: '6rem'
            }}>
                <img height="100%" src={InstagramLogoText}/>
            </div>
            <div>
                <SendIcon width="6rem" height="6rem"/>
            </div>
        </div>

    );
}

export default Header;