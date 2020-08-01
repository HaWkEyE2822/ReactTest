import * as React from 'react';

interface ICustomSVGProps {
    width: string
    height: string
    d: string
    xmlns: string
    viewBox: string

}

export default ({ width, height, d, xmlns, viewBox } : ICustomSVGProps ) => (
    <svg width={width} height={height} d={d} xmlns={xmlns} >
        <path viewBox={viewBox} />
    </svg>
);