import * as React from 'react';

interface ISVG {
    children?: any,
    width?: string,
    height?: string
}

const SVG = ({ children, width = "24", height = "24"}: ISVG) => React.cloneElement(children, {
                width,
                height
            })

export default SVG;