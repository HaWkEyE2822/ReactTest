import * as React from 'react';
import { HomeIcon, SearchIcon, AddIcon, HeartIcon } from '../../atoms/icons/outlined/icons-outlined';
import { PROFILES } from '../Stories/stories_metadata';
import Avatar from '../../atoms/avatar';

const width: string = "2.4rem";
const height: string = "2.4rem";

const firstProfile = {
    id: PROFILES[0].id,
    pic: PROFILES[0].pic
}

const Footer  = () => {
    return (
        <div className="footer_container">
            <HomeIcon width={width} height={height} />
            <SearchIcon width={width} height={height} />
            <AddIcon width={width} height={height} />
            <HeartIcon width={width} height={height} />
            {<Avatar border={false} width={width} height={height} { ...firstProfile } /> }
        </div>
    );
}

export default Footer;