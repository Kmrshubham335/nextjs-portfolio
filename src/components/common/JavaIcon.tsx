import React from 'react';

const JavaIcon = ({ height, width }:any) => {
  const iconSize = height ?? width ?? "24px";
  const circleRadius = 0.5 * parseInt(iconSize);
  const backgroundColor = '#007396';
  const textColor = '#000000';

  return (
    <svg
      viewBox={`0 0 ${iconSize} ${iconSize}`}
      height={height ?? "24px"}
      width={width ?? "24px"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx={iconSize / 2} cy={iconSize / 2} r={circleRadius} fill={backgroundColor} />
      <text x="50%" y="50%" textAnchor="middle" alignmentBaseline="middle" fontSize="0.6em" fill={textColor}>Java</text>
    </svg>
  );
};

export default JavaIcon;
