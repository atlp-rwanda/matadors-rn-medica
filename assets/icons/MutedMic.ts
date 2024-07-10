import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface MutedMicProps {
  width?: number;
  height?: number;
  fill?: string;
}

const MutedMic: React.FC<MutedMicProps> = ({ width = 24, height = 24, fill = "none" }) => (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
  <circle cx="12" cy="12" r="12" fill="#333" />
  <line x1="7" y1="7" x2="17" y2="17" stroke="#FFF" stroke-width="2" />
  <path d="M9 7h6a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z" fill="#FFF" />
</svg>`
);

export default MutedMic;



