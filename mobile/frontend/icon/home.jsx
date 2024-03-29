import * as React from 'react';
import Svg, { Circle, Ellipse, G, Text, TSpan, TextPath, Path, Polygon, Polyline, Line, Rect, Use, Image, Symbol, Defs, LinearGradient, RadialGradient, Stop, ClipPath, Pattern, Mask, } from 'react-native-svg';

export default function Home({ size }) {
    return (
        <Svg width={size} height={size} viewBox="0 0 32 32" >
            <G>
                <Path fill="#F2C99E" d="M30,9L15,3L7.182,5.606V1c0-0.552-0.448-1-1-1H1C0.448,0,0,0.448,0,1v28c0,1.657,1.343,3,3,3h26
                                            c1.657,0,3-1.343,3-3V9H30z"/>
                <Polygon fill="#C9483A" points="15,0 17,0 32,6 32,9 30,9 15,3 0,8 0,5 	" />
                <Path fill="#F9E0BD" d="M27,32H3c-1.657,0-3-1.343-3-3V1c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v5.333L15,3l15,6v20
                                            C30,30.657,28.657,32,27,32z"/>
                <Path fill="#98D3BC" d="M11,26H7v-6h4V26z M11,10H7v6h4V10z M23,10h-4v6h4V10z" />
                <Path fill="#D97360" d="M25,32h-8V21c0-0.552,0.448-1,1-1h6c0.552,0,1,0.448,1,1V32z M13,25v-4c0-0.552-0.448-1-1-1
                                            h-1v6h1C12.552,26,13,25.552,13,25z M7,20H6c-0.552,0-1,0.448-1,1v4c0,0.552,0.448,1,1,1h1V20z M13,15v-4c0-0.552-0.448-1-1-1h-1v6
                                            h1C12.552,16,13,15.552,13,15z M7,10H6c-0.552,0-1,0.448-1,1v4c0,0.552,0.448,1,1,1h1V10z M25,15v-4c0-0.552-0.448-1-1-1h-1v6h1
                                            C24.552,16,25,15.552,25,15z M19,10h-1c-0.552,0-1,0.448-1,1v4c0,0.552,0.448,1,1,1h1V10z M0,8l15-5l15,6V6L15,0L0,5V8z"/>
            </G>
        </Svg>
    )
}
