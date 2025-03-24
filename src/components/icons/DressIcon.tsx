import React from "react";

interface DressIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const DressIcon: React.FC<DressIconProps> = ({
  width = 24,
  height = 24,
  color = "currentColor",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Dress top */}
      <path
        d="M7 4H17V8H7V4Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Dress bodice */}
      <path
        d="M7 8H17V12H7V8Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Dress skirt */}
      <path
        d="M7 12L12 24L17 12"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Straps */}
      <path
        d="M7 4L10 2L13 4"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 2L12 4L13 2"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Neckline */}
      <path
        d="M9 8L12 10L15 8"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DressIcon;
