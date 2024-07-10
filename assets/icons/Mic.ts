import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface MicProps {
  width?: number;
  height?: number;
  fill?: string;
}

const Mic: React.FC<MicProps> = ({ width = 24, height = 24, fill = "none" }) => (
    `<svg width="404" height="296" viewBox="0 0 404 296" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_dd_5858_19840)">
    <rect x="200" y="180" width="68" height="68" rx="34" fill="#F0F0F0" fill-opacity="0.32" shape-rendering="crispEdges"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M234.205 217.753H233.797C230.993 217.753 228.72 215.508 228.72 212.74V207.346C228.72 204.577 230.993 202.333 233.797 202.333H234.205C237.008 202.333 239.282 204.577 239.282 207.346V212.74C239.282 215.508 237.008 217.753 234.205 217.753ZM241.657 212.58C241.657 211.963 242.163 211.464 242.787 211.464C243.411 211.464 243.917 211.963 243.917 212.58C243.917 217.601 240.068 221.747 235.131 222.304V224.55C235.131 225.166 234.625 225.666 234.001 225.666C233.376 225.666 232.871 225.166 232.871 224.55V222.304C227.933 221.747 224.084 217.601 224.084 212.58C224.084 211.963 224.59 211.464 225.214 211.464C225.838 211.464 226.344 211.963 226.344 212.58C226.344 216.748 229.779 220.14 234.001 220.14C238.222 220.14 241.657 216.748 241.657 212.58Z" fill="white"/>
    </g>
    <defs>
    <filter id="filter0_dd_5858_19840" x="0" y="0" width="468" height="468" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="20"/>
    <feGaussianBlur stdDeviation="100"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0.0156863 0 0 0 0 0.0235294 0 0 0 0 0.0588235 0 0 0 0.08 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5858_19840"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="20"/>
    <feGaussianBlur stdDeviation="50"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"/>
    <feBlend mode="normal" in2="effect1_dropShadow_5858_19840" result="effect2_dropShadow_5858_19840"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_5858_19840" result="shape"/>
    </filter>
    </defs>
    </svg>
    `
);

export default Mic;

