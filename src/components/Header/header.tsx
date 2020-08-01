import * as React from 'react';
import { SendIcon } from '../../atoms/icons/sendIcon';

const Header = () => {
    return (
        <div>
            <div>
                Camera
            </div>
            <div>
                Instagram
            </div>
            <div>
                <SendIcon />
            </div>
        </div>

    );
}

export default Header;