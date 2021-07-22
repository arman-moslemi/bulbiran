import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={34}
      height={53}
      viewBox="0 0 34 53"
      {...props}
    >
      <g
        data-name="Component 37 \u2013 1"
        fill="#fff"
        fontFamily="IRANYekanFN-ExtraBold, IRANYekanFN"
        fontWeight={800}
      >
        <text transform="translate(17 27)" fontSize={27}>
          <tspan x={18.238} y={0}>
            {"UV"}
          </tspan>
        </text>
        <text transform="translate(17 45)" fontSize={17}>
          <tspan x={19.227} y={0}>
            {"FREE"}
          </tspan>
        </text>
      </g>
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
