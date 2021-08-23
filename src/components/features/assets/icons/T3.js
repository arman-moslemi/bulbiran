import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={121}
      height={17}
      viewBox="0 0 121 17"
      {...props}
    >
      <defs>
        <linearGradient
          id="prefix__a"
          y1={0.5}
          x2={1}
          y2={0.5}
          gradientUnits="objectBoundingBox"
        >
          <stop offset={0} stopColor="#ebebeb" />
          <stop offset={1} />
        </linearGradient>
      </defs>
      <rect
        data-name="Rectangle 1586"
        width={121}
        height={17}
        rx={5}
        fill="url(#prefix__a)"
      />
    </svg>
  )
}

export default SvgComponent
