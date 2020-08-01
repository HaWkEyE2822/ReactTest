import * as React from 'react';
import { ISVGIconProps } from '../../common/types';
import SVG from '../../common/SVG';

export const SendIcon = ({ width = "24", height = "24" }: ISVGIconProps) => (
    <SVG width={width} height={height}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
        </svg>								
    </SVG>
);								