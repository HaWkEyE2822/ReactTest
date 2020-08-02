import * as React from 'react';
import { HomeIcon } from '../../atoms/icons/homeIcon';
import { SearchIcon } from '../../atoms/icons/searchIcon';
import { AddIcon } from '../../atoms/icons/AddIcon';
import { HeartIcon } from '../../atoms/icons/heartIcon';
import { PROFILES } from '../Stories/stories_metadata';
import Avatar from '../../atoms/avatar';

const width: string = "5rem";
const height: string = "5rem";

const Footer  = () => {
    return (
        <div className="footer_container">
            <HomeIcon width={width} height={height} />
            <SearchIcon width={width} height={height} />
            <AddIcon width={width} height={height} />
            <HeartIcon width={width} height={height} />
            {<Avatar width={width} height={height} { ...PROFILES[0] } /> }
        </div>
    );
}

export default Footer;