import * as React from 'react';
import Svg, { Circle, Ellipse, G, Text, TSpan, TextPath, Path, Polygon, Polyline, Line, Rect, Use, Image, Symbol, Defs, LinearGradient, RadialGradient, Stop, ClipPath, Pattern, Mask, } from 'react-native-svg';

export default function Temp({ size }) {
    return (
        <Svg width={size} height={size} viewBox="0 0 32 32">
            <G id="Layer_10">
                <G><Path d="M23,24c0,3.9-3.1,7-7,7s-7-3.1-7-7c0-2.3,1.1-4.4,3-5.7V5c0-2.2,1.8-4,4-4s4,1.8,4,4v13.3    C21.9,19.6,23,21.7,23,24z" fill="#F29E7D" /></G>
                <G><Path d="M20,24c0,2.2-1.8,4-4,4s-4-1.8-4-4c0-1.9,1.3-3.4,3-3.9V13c0-0.5,0.5-1,1-1s1,0.5,1,1v7.1    C18.7,20.6,20,22.1,20,24z" fill="#EDB544" /></G>
            </G>
        </Svg>
    )
}