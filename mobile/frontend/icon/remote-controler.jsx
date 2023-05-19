import * as React from 'react';
import Svg, { Circle, Ellipse, G, Text, TSpan, TextPath, Path, Polygon, Polyline, Line, Rect, Use, Image, Symbol, Defs, LinearGradient, RadialGradient, Stop, ClipPath, Pattern, Mask, } from 'react-native-svg';

export default function RemoteControler({ size }) {
    return (
        <Svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
            <G id="SVGRepo_bgCarrier" strokeWidth="0"></G>
            <G id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></G>
            <G id="SVGRepo_iconCarrier">
                <G>
                    <Path fill="none" d="M0 0h24v24H0z"></Path>
                    <Path fillRule="nonzero" d="M18 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12zm-1 2H7v16h10V4zm-2 11v2h-2v-2h2zm-4 0v2H9v-2h2zm2-9v2h2v2h-2.001L13 12h-2l-.001-2H9V8h2V6h2z"></Path>
                </G>
            </G>
        </Svg>
    )
}