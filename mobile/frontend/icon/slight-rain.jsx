import * as React from 'react';
import Svg, { Circle, Ellipse, G, Text, TSpan, TextPath, Path, Polygon, Polyline, Line, Rect, Use, Image, Symbol, Defs, LinearGradient, RadialGradient, Stop, ClipPath, Pattern, Mask, } from 'react-native-svg';

export default function SlightRain({ size }) {
    return (
        <Svg width={size} height={size} viewBox="0 0 32 32" enableBackground="new 0 0 32 32">
            <G id="Layer_25">
                <G>
                    <Path d="M16,27c-0.6,0-1-0.4-1-1v-3c0-0.6,0.4-1,1-1s1,0.4,1,1v3C17,26.6,16.6,27,16,27z" fill="#16BCD4" />
                </G>
                <G>
                    <Path d="M16,31c-0.6,0-1-0.4-1-1v-1c0-0.6,0.4-1,1-1s1,0.4,1,1v1C17,30.6,16.6,31,16,31z" fill="#16BCD4" />
                </G>
                <G>
                    <Path d="M10,27c-0.6,0-1-0.4-1-1v-3c0-0.6,0.4-1,1-1s1,0.4,1,1v3C11,26.6,10.6,27,10,27z" fill="#16BCD4" />
                </G>
                <G>
                    <Path d="M10,31c-0.6,0-1-0.4-1-1v-1c0-0.6,0.4-1,1-1s1,0.4,1,1v1C11,30.6,10.6,31,10,31z" fill="#16BCD4" />
                </G>
                <G>
                    <Path d="M22,27c-0.6,0-1-0.4-1-1v-3c0-0.6,0.4-1,1-1s1,0.4,1,1v3C23,26.6,22.6,27,22,27z" fill="#16BCD4" />
                </G>
                <G>
                    <Path d="M22,31c-0.6,0-1-0.4-1-1v-1c0-0.6,0.4-1,1-1s1,0.4,1,1v1C23,30.6,22.6,31,22,31z" fill="#16BCD4" />
                </G>
                <G>
                    <Path d="M31,15c0,5-4.5,9-10,9H8c-3.9,0-7-3.1-7-7s3.1-7,7-7c1.4,0,2.8,0.4,3.9,1.2C13.5,8.1,17.1,6,21,6    C26.5,6,31,10,31,15z" fill="#607C8B" />
                </G>
            </G>
        </Svg>
    )
}