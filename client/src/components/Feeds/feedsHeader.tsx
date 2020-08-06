import * as React from 'react';
import Avatar from '../../atoms/avatar';
import MoreOptionsModal from './more_options_modal';
interface IFeedsHeader {
    pic?: string,
    username: string
}

const FeedsHeader = ({ pic, username }: IFeedsHeader) => {
    return (
        <div className="feeds_header_container">
            <Avatar width="3rem" height="3rem" pic={pic} />
            <div className="feeds_header_user">{username}</div>
            <div>
                <MoreOptionsModal />
            </div>
        </div>
    );
}

export default FeedsHeader;