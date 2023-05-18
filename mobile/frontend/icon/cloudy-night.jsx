import * as React from 'react';
import Svg, { Circle, Ellipse, G, Text, TSpan, TextPath, Path, Polygon, Polyline, Line, Rect, Use, Image, Symbol, Defs, LinearGradient, RadialGradient, Stop, ClipPath, Pattern, Mask, } from 'react-native-svg';

export default function CloudyNight({ size }) {
    return (
        <Svg width={size} height={size} viewBox="0 0 32 32" enableBackground="new 0 0 32 32">
            <G id="Layer_18">
                <G>
                    <G>
                        <Path d="M14.9,10.5c-0.8,0.8-1.3,1.7-1.6,2.6c-0.1,0.3-0.4,0.6-0.7,0.7c-0.1,0-0.2,0-0.2,0     c-0.3,0-0.5-0.1-0.7-0.3C10.7,12.5,9.4,12,8,12c-1,0-2,0.3-2.8,0.8C5,13,4.7,13.1,4.5,13c-0.3-0.1-0.5-0.2-0.6-0.5     c-0.4-0.7-0.8-1.5-1-2.3C2,6.5,3.8,2.8,7.3,1.1C7.6,0.9,8,1,8.3,1.2c0.3,0.2,0.5,0.6,0.4,0.9c-0.1,0.7,0,1.4,0.1,2     c0.6,2.6,2.8,4.5,5.5,4.7c0.4,0,0.7,0.3,0.9,0.7C15.2,9.8,15.1,10.3,14.9,10.5z" fill="#FFC10A" />
                    </G>
                </G>
                <G>
                    <Path d="M31,15c0,5-4.5,9-10,9H8c-3.9,0-7-3.1-7-7c0-2.3,1.2-4.5,3.1-5.8c2.3-1.6,5.5-1.5,7.8,0    c0.4-0.7,0.9-1.4,1.5-2.1C15.3,7.1,18.1,6,21,6C26.5,6,31,10,31,15z" fill="#607C8B" />
                </G>
            </G>
        </Svg>
    )
}