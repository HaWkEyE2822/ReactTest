import * as React from 'react';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';

interface IAvatar {
    pic?: any,
    width?: string,
    height?: string,
    username?: string,
    border?: boolean
}

const Avatar = ({ pic, width, height, username, border = true }: IAvatar) => (
    <div className="avatar_container">
        <div style={{ width, height, border: border ? "2px solid lightcoral" : "none" }} className="avatar_container__pic">
            {pic ? <img src={pic} width="100%" height="100%" /> : <PersonOutlinedIcon />}
        </div>
        {username && <div className="avatar_container__text">
            {username}
        </div>}
    </div>
);

export default Avatar;