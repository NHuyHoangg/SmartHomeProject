import * as React from 'react';
import Svg, { Circle, Ellipse, G, Text, TSpan, TextPath, Path, Polygon, Polyline, Line, Rect, Use, Image, Symbol, Defs, LinearGradient, RadialGradient, Stop, ClipPath, Pattern, Mask, } from 'react-native-svg';

export default function Drizzle({ size }) {
    return (
        <Svg width={size} height={size} viewBox="0 0 32 32" enableBackground="new 0 0 32 32">
            <G id="Layer_15">
                <G>
                    <Path d="M31,15c0,5-4.5,9-10,9H8c-3.9,0-7-3.1-7-7s3.1-7,7-7c1.4,0,2.8,0.4,3.9,1.2C13.5,8.1,17.1,6,21,6    C26.5,6,31,10,31,15z" fill="#607C8B" />
                </G>
                <G>
                    <Circle cx="16" cy="26" fill="#16BCD4" r="1.5" />
                    <Circle cx="22.5" cy="26" fill="#16BCD4" r="1.5" />
                    <Circle cx="9.5" cy="26" fill="#16BCD4" r="1.5" />
                </G>
                <G>
                    <Circle cx="22.5" cy="30" fill="#16BCD4" r="1.5" />
                    <Circle cx="9.5" cy="30" fill="#16BCD4" r="1.5" />
                    <Circle cx="16" cy="30" fill="#16BCD4" r="1.5" />
                </G>
            </G>
        </Svg>
    )
}