import * as React from 'react';
import SVG from '../../components/SVG/svg';
import { ISVGIconProps } from '../../common/types';

export const sendIcon = ({ width = "24", height = "24" }: ISVGIconProps) => (
    <SVG 
        xmlns="http://www.w3.org/2000/svg" 
        width={width} 
        height={height} 
        viewBox="0 0 24 24"
        d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" 
    />  
);								