import * as React from 'react';
import Svg, { Circle, Ellipse, G, Text, TSpan, TextPath, Path, Polygon, Polyline, Line, Rect, Use, Image, Symbol, Defs, LinearGradient, RadialGradient, Stop, ClipPath, Pattern, Mask, } from 'react-native-svg';

export default function Clear({ size }) {
    return (
        <Svg width={size} height={size} viewBox="0 0 32 32" enableBackground="new 0 0 32 32">
            <G id="Layer_21">
                <G>
                    <Path d="M26,16c0,5.5-4.5,10-10,10S6,21.5,6,16S10.5,6,16,6S26,10.5,26,16z" fill="#FFC10A" />
                </G>
                <G>
                    <Path d="M16,1c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1s1-0.4,1-1V2C17,1.4,16.6,1,16,1z" fill="#F44236" />
                    <Path d="M16,27c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1s1-0.4,1-1v-2C17,27.4,16.6,27,16,27z" fill="#F44236" />
                    <Path d="M30,15h-2c-0.6,0-1,0.4-1,1s0.4,1,1,1h2c0.6,0,1-0.4,1-1S30.6,15,30,15z" fill="#F44236" />
                    <Path d="M4,15H2c-0.6,0-1,0.4-1,1s0.4,1,1,1h2c0.6,0,1-0.4,1-1S4.6,15,4,15z" fill="#F44236" />
                    <Path d="M25.2,5.4l-1.4,1.4c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l1.4-1.4    c0.4-0.4,0.4-1,0-1.4S25.6,5,25.2,5.4z" fill="#F44236" />
                    <Path d="M6.8,23.8l-1.4,1.4c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l1.4-1.4    c0.4-0.4,0.4-1,0-1.4S7.2,23.4,6.8,23.8z" fill="#F44236" />
                    <Path d="M6.8,5.4C6.4,5,5.8,5,5.4,5.4s-0.4,1,0,1.4l1.4,1.4C7,8.4,7.3,8.5,7.5,8.5S8,8.4,8.2,8.2    c0.4-0.4,0.4-1,0-1.4L6.8,5.4z" fill="#F44236" />
                    <Path d="M25.2,23.8c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l1.4,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3    c0.4-0.4,0.4-1,0-1.4L25.2,23.8z" fill="#F44236" />
                </G>
            </G>
        </Svg>
    )
}