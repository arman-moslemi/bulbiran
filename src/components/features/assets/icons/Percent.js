import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      viewBox="0 0 25 25"
      {...props}
    >
      <g data-name="Group 671">
        <g data-name="Ellipse 3" fill="none" stroke="#ffd200" strokeWidth={2}>
          <circle cx={12.5} cy={12.5} r={12.5} stroke="none" />
          <circle cx={12.5} cy={12.5} r={11.5} />
        </g>
        <path
          data-name="Icon awesome-percentage"
          d="M9.909 9.683a2.178 2.178 0 10-3.081 0 2.179 2.179 0 003.081 0zm8.713 5.633a2.178 2.178 0 100 3.081 2.179 2.179 0 00.001-3.081zm-.066-7.877l-.765-.774a1.089 1.089 0 00-1.54 0l-9.36 9.356a1.089 1.089 0 000 1.54l.77.77a1.089 1.089 0 001.54 0l9.352-9.352a1.089 1.089 0 00.004-1.54z"
          fill="#ffd200"
        />
      </g>
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
