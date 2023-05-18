import * as React from 'react';
import Svg, { Circle, Ellipse, G, Text, TSpan, TextPath, Path, Polygon, Polyline, Line, Rect, Use, Image, Symbol, Defs, LinearGradient, RadialGradient, Stop, ClipPath, Pattern, Mask, } from 'react-native-svg';

export default function CloudyDay({ size }) {
    return (
        <Svg width={size} height={size} viewBox="0 0 32 32" enableBackground="new 0 0 32 32" version="1.1">
            <G id="Layer_24">
                <G>
                    <Path d="M16.1,9.5c-1.4,0.9-2.4,2.2-2.8,3.7c-0.1,0.3-0.4,0.6-0.7,0.7c-0.1,0-0.2,0-0.2,0c-0.3,0-0.5-0.1-0.7-0.3    C10.7,12.5,9.4,12,8,12c-1.2,0-2.3,0.4-3.2,1.1c-0.3,0.2-0.6,0.3-1,0.2c-0.3-0.1-0.6-0.4-0.7-0.7C3.1,12.1,3,11.5,3,11    c0-3.9,3.1-7,7-7c2.8,0,5.3,1.7,6.5,4.3C16.6,8.7,16.5,9.2,16.1,9.5z" fill="#FFC10A" />
                </G>
                <G>
                    <Path d="M31,15c0,5-4.5,9-10,9H8c-3.9,0-7-3.1-7-7c0-2.1,0.9-4,2.5-5.4C4.8,10.6,6.4,10,8,10    c1.4,0,2.8,0.4,3.9,1.2c0.7-1.3,1.7-2.5,3-3.4C16.7,6.6,18.8,6,21,6C26.5,6,31,10,31,15z" fill="#607C8B" />
                </G>
            </G>
        </Svg>
    )
}