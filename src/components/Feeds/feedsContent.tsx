import * as React from 'react';

const FeedsContent = ({ content }: any) => {
    const { type, images } = content;
    return (
        <div>
            {type === 'image' ? <div>
                {images.map((image, idx) => (
                <div key={idx} className="content_image">
                    <img width="100%" height="100%" src={image} alt={"image"}/>
                </div>
            ))}
            </div> : null}
        </div>
    );
}

export default FeedsContent;