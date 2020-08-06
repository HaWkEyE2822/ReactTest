import * as React from 'react';
import { IFeedsFooter } from './types';
import { HeartIcon, CommentIcon, SendIcon, BookmarkIcon } from '../../atoms/icons/outlined/icons-outlined';

const width: string = "2.4rem";
const height: string = "2.4rem";

const FeedsFooter = ({ views, description, likes, comments, username } : IFeedsFooter ) => {
    return (
        <div>
            <div className="footer_icons">
                    <HeartIcon width={width} height={height} />
                    <CommentIcon width={width} height={height} />
                    <SendIcon width={width} height={height} />
                <div>
                    <BookmarkIcon width={width} height={height} />
                </div>
            </div>
            <div className="feeds_footer_info">   
                <div>{`${views} views`}</div>
                <div>{`${likes} likes`}</div>
                <div>
                    <span>{username}</span>
                    <span style={{ marginLeft: '0.8rem', fontWeight: "normal" }}>{description}</span>
                </div>
                <div>
                    <div style={{ color: "rgba(255,255,255,0.4)", margin: '0.4rem 0' }}>{`${ comments && comments.length} Comments`}</div>
                        {comments && comments.map((comment, i) => <div key={i}>
                        <span>{comment.username}</span>
                        <span style={{ marginLeft: '0.8rem', fontWeight: "normal" }}>{comment.text}</span>
                    </div>)}
                </div>
            </div>
        
        </div>
    );
}

export default FeedsFooter;