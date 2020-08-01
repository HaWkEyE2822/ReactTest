import * as React from 'react';

const SVG = (props: any) => {
    // return (
        // props.children.map(child => {
            return React.cloneElement(props.children, {
                width: props.width || "24",
                height: props.height || "24"
            })
        // })
    // );
}

export default SVG;