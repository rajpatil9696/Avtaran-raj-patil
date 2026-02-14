function VirtualCfoSvg({
  width = "42",
  height = "42",
}: {
  width?: string;
  height?: string;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_428_679)">
        <rect
          y="12.4038"
          width="84"
          height="84"
          rx="42"
          transform="rotate(-8.49154 0 12.4038)"
          fill="#0068FF"
          fillOpacity="0.08"
          shapeRendering="crispEdges"
        />
        <path
          d="YOUR_FULL_PATH_HERE"
          fill="#0F6089"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_428_679"
          x="-3"
          y="0"
          width="101.483"
          height="101.483"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_428_679"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_428_679"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default VirtualCfoSvg;
