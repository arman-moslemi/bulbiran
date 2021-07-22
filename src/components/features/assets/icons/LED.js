import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={97}
      height={62}
      viewBox="0 0 97 62"
      {...props}
    >
      <g data-name="Component 44 \u2013 1">
        <text
          transform="translate(50 53)"
          fill="#fff"
          fontSize={17}
          fontFamily="IRANYekanFN"
          letterSpacing=".045em"
        >
          <tspan x={45.858} y={0}>
            {"PRODUCTS"}
          </tspan>
        </text>
        <g
          data-name="Component 17 \u2013 1"
          fill="none"
          strokeLinecap="round"
          strokeWidth={4}
          strokeDasharray="0 7"
        >
          <path data-name="Line 67" stroke="#cf1e22" d="M2 2v33" />
          <path data-name="Line 68" stroke="#cf1e22" d="M8 2v33" />
          <path data-name="Line 69" stroke="#cf1e22" d="M22 30H9" />
          <path data-name="Line 70" stroke="#cf1e22" d="M22 23H9" />
          <path data-name="Line 71" stroke="#4d7c1b" d="M35 2v30" />
          <path data-name="Line 72" stroke="#4d7c1b" d="M42 2v31" />
          <path data-name="Line 77" stroke="#4d7c1b" d="M55 16H42" />
          <path data-name="Line 78" stroke="#4d7c1b" d="M56 2H44" />
          <path data-name="Line 79" stroke="#165a9f" d="M71 2v29" />
          <path data-name="Line 80" stroke="#165a9f" d="M77 2v32" />
          <path data-name="Line 81" stroke="#165a9f" d="M84 30h-1" />
          <path data-name="Line 82" stroke="#165a9f" d="M84 2h-6" />
          <path data-name="Line 85" stroke="#165a9f" d="M90 2v31" />
          <path data-name="Line 86" stroke="#165a9f" d="M95 9v21" />
          <path data-name="Line 87" stroke="#4d7c1b" d="M55 30H42" />
        </g>
      </g>
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
