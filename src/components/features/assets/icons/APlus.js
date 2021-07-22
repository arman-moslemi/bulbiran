import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={47}
      viewBox="0 0 32 47"
      {...props}
    >
      <g data-name="Component 43 \u2013 1" fill="#fff">
        <g
          data-name="Component 18 \u2013 1"
          fontFamily="IRANYekanFN-ExtraBold, IRANYekanFN"
          fontWeight={800}
        >
          <text transform="translate(13 34)" fontSize={30}>
            <tspan x={10} y={10}>
              {"A"}
            </tspan>
          </text>
          <text data-name="+" transform="translate(21 21)" fontSize={17}>
            <tspan x={4.006} y={2}>
              {"+"}
            </tspan>
          </text>
        </g>
        <text
          data-name="\u0628\u0647\u0631\u0647 \u0648\u0631\u06CC \u0628\u0627\u0644\u0627"
          transform="translate(16 7)"
          fontSize={6}
          fontFamily="IRANYekanFN-Medium, IRANYekanFN"
          fontWeight={500}
        >
          <tspan x={15.053} y={0}>
            {
              "\u0628\u0647\u0631\u0647 \u0648\u0631\u06CC \u0628\u0627\u0644\u0627"
            }
          </tspan>
        </text>
      </g>
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
