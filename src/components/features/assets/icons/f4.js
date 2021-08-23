import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={58.649}
      height={8.184}
      viewBox="0 0 58.649 8.184"
      {...props}
    >
      <defs>
        <linearGradient
          id="prefix__a"
          x1={-0.039}
          y1={-0.187}
          x2={0.974}
          y2={0.843}
          gradientUnits="objectBoundingBox"
        >
          <stop offset={0} stopColor="#fff" />
          <stop offset={1} />
        </linearGradient>
      </defs>
      <rect
        data-name="Rectangle 1608"
        width={58.649}
        height={8.184}
        rx={4.092}
        fill="url(#prefix__a)"
      />
    </svg>
  )
}

export default SvgComponent
