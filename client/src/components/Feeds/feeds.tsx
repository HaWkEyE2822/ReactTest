import * as React from 'react';
import FeedsHeader from './feedsHeader';
import FeedsContent from './feedsContent';
import FeedsFooter from './feedsFooter';
import { FEEDS_DATA } from './feeds_metadata';

const Feeds = () => {
    return (
        <div style={{ color: 'white' }} className="feeds_container">
            {FEEDS_DATA.map((feed, idx) => {
                const { pic, username, content, ...rest } = feed;
                return (
                    <div key={idx}>
                        <FeedsHeader pic={pic} username={username} />
                        <FeedsContent content={content} />
                        <FeedsFooter  username={username} { ...rest }/>
                    </div>
                );
            })}
        </div>
    );
}

export default Feeds;