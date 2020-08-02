import * as React from 'react';
import FeedsHeader from './feedsHeader';
import FeedsContent from './feedsContent';
// import FeedsFooter from './feedsFooter';
import { FEEDS_DATA } from './feeds_metadata';

const Feeds = () => {
    return (
        <div style={{ color: 'white' }} className="feeds_container">
            {FEEDS_DATA.map(feed => {
                const { pic, username, content } = feed;
                console.log('check dfd', content)
                return (
                    <div>
                        <FeedsHeader pic={pic} username={username} />
                        <FeedsContent content={content} />
                        {/* <FeedsFooter { ...feed } /> */}
                    </div>
                );
            })}
        </div>
    );
}

export default Feeds;