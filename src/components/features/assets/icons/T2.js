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
          x1={0.028}
          y1={0.5}
          x2={1.075}
          y2={0.5}
          gradientUnits="objectBoundingBox"
        >
          <stop offset={0} stopColor="#ffd601" />
          <stop offset={0.119} stopColor="#fc905b" />
          <stop offset={0.504} stopColor="#37a7b7" />
          <stop offset={0.892} stopColor="#fff1eb" />
          <stop offset={1} stopColor="#fff" />
        </linearGradient>
      </defs>
      <rect
        data-name="Rectangle 1585"
        width={121}
        height={17}
        rx={5}
        fill="url(#prefix__a)"
      />
    </svg>
  )
}

export default SvgComponent
