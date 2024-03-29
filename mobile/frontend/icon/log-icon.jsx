import * as React from 'react';
import Svg, { Circle, Ellipse, G, Text, TSpan, TextPath, Path, Polygon, Polyline, Line, Rect, Use, Image, Symbol, Defs, LinearGradient, RadialGradient, Stop, ClipPath, Pattern, Mask, } from 'react-native-svg';

export default function LogIcon({ tab, size }) {
    return (
        <Svg fill={tab === 3 ? '#F29E7D' : '#2B5C64'} width={size} height={size} viewBox="0 -3 24 24" id="meteor-icon-kit__solid-envelope" >
            <Path fillRule="evenodd" clipRule="evenodd" d="M23.4006 1.20046L13.1469 8.9765C12.4583 9.4585 11.5417 9.4585 10.8531 8.9765L0.599433 1.20046C1.14673 0.47153 2.0183 0 3 0H21C21.9817 0 22.8533 0.47153 23.4006 1.20046zM24 3.25413V15C24 16.6569 22.6569 18 21 18H3C1.34315 18 0 16.6569 0 15V3.25413L9.70615 10.615C11.0834 11.5791 12.9166 11.5791 14.2938 10.615L24 3.25413z" />
        </Svg>
    )
}