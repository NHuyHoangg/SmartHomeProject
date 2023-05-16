import * as React from 'react';
import Svg, { Circle, Ellipse, G, Text, TSpan, TextPath, Path, Polygon, Polyline, Line, Rect, Use, Image, Symbol, Defs, LinearGradient, RadialGradient, Stop, ClipPath, Pattern, Mask, } from 'react-native-svg';

export default function VoiceIcon({ tab, size }) {
    return (
        <Svg fill={tab === 1 ? '#F29E7D' : '#2B5C64'} height={size} width={size} version="1.1" id="Layer_1"
            viewBox="0 0 512 512" enableBackground="new 0 0 512 512" >
            <Path d="M155.7,320.3c2.8,23.3,24.9,42.4,49,42.4h87.8c24.1,0,46.2-19.1,49-42.4l11.7-96.6c2.8-23.3,2.8-61.4,0-84.8l-11.7-96.6
                                C338.6,19,316.5,0,292.4,0h-87.8c-24.1,0-46.2,19.1-49,42.4L144,138.9c-2.8,23.3-2.8,61.5,0,84.8L155.7,320.3z M419.1,170.7h-42.6
                                c0.4,19.5-0.3,40.2-2.2,55.6l-11.7,96.6c-4.1,34.3-34.9,61.1-70.2,61.1h-87.8c-35.2,0-66-26.9-70.2-61.1l-11.7-96.6
                                c-1.9-15.4-2.6-36.1-2.2-55.6H77.9c-0.4,21.3,0.4,43.6,2.5,60.7L92.1,328c6.7,55.3,56.1,98.6,112.5,98.6h22.6v42.7h-64V512h170.7
                                v-42.7h-64v-42.7h22.6c56.5,0,105.9-43.4,112.5-98.7l11.7-96.7C418.7,214.2,419.5,191.9,419.1,170.7z"/>
        </Svg>
    )
}