import * as React from 'react';
import { PROFILES } from './stories_metadata';
import Avatar from '../../atoms/avatar';

const Stories = () => {
    return (
        <div className="stories_container">
            {PROFILES.map((profile, idx) => {
                return <Avatar key={idx} width="6rem" height="6rem" { ...profile }/>
            })}
        </div>
    );
}

export default Stories;