import * as React from 'react';
import Svg, { Circle, Ellipse, G, Text, TSpan, TextPath, Path, Polygon, Polyline, Line, Rect, Use, Image, Symbol, Defs, LinearGradient, RadialGradient, Stop, ClipPath, Pattern, Mask, } from 'react-native-svg';

export default function CurtainOn({ size }) {
    return (
        <Svg fill="#FFFFFF" height={size} width={size} viewBox="0 0 256 256">
            <Path id="XMLID_7_" d="M90.6,171.9l26.2-23.7l3.7,4L94.3,176L90.6,171.9z M126,214.4l-3.7-4l26.2-23.7l3.7,4L126,214.4z M94.9,199.4
                                    l70-60l3.5,4.1l-70,60L94.9,199.4z M5.7,1v254h57.4l-0.7-8.4h132.9l-0.7,8.4h56.9V1H5.7z M154,13.5c-0.5,5.2-0.6,12.3-0.6,18.7
                                    c0,12.8,1,25.2,3,36.7h-54.9c1.8-11.5,2.6-22.6,2.6-34.5c0-7.1-0.2-14.6-0.8-20.9H154z M55.4,162.5c20.5-17.2,36.3-46.5,43.8-81
                                    h59.5c7.7,33.5,23.4,62.1,43.5,79l-6.1,73.6H61.3L55.4,162.5z"/>
        </Svg>
    )
}