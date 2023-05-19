import * as React from 'react';
import Svg, { Circle, Ellipse, G, Text, TSpan, TextPath, Path, Polygon, Polyline, Line, Rect, Use, Image, Symbol, Defs, LinearGradient, RadialGradient, Stop, ClipPath, Pattern, Mask, } from 'react-native-svg';

export default function DHLLogo({ }) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="200" height="200">
            <Path fill="#F29E7D" d="M5.584 15.001 1 15a1.002 1.002 0 0 1-.892-1.453l1.704-3.349 1.782.907L2.631 13h2.953c.524 0 1.018-.279 1.287-.729a1.483 1.483 0 0 0 .019-1.51A1.485 1.485 0 0 0 5.584 10H1V8h4.584c1.278 0 2.417.664 3.047 1.776a3.462 3.462 0 0 1-.045 3.525 3.517 3.517 0 0 1-3.002 1.7z" />
            <Path fill="#2B5C64" d="M18.5 15.001a.998.998 0 0 1-.86-.491.996.996 0 0 1-.016-.991l3.231-5.877 1.753.963L20.191 13H25v2l-6.5.001zM8.642 14.395l3.712-6.754 1.752.963-3.711 6.754zM13.642 14.395l3.712-6.754 1.752.963-3.711 6.754z" />
            <Path fill="#2B5C64" d="M11.205 10.5h5.38v2h-5.38z" />
        </Svg>
    )
}