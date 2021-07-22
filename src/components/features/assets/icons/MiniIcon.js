import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      viewBox="0 0 30 30"
      {...props}
    >
      <g data-name="Group 676" transform="translate(-1344.701 -808)">
        <rect
          data-name="Rectangle 1949"
          width={30}
          height={30}
          rx={5}
          transform="translate(1344.701 808)"
          fill="#ff93ba"
        />
        <g fill="#fff">
          <path
            data-name="Path 10879"
            d="M1354.484 825.755a3.323 3.323 0 011.12 1.912h3.425v-4.8a2.7 2.7 0 01-2.019-2.607h1.346a1.346 1.346 0 002.692 0h1.346a2.7 2.7 0 01-2.019 2.607v4.8h3.426a3.364 3.364 0 011.133-1.922 8.073 8.073 0 10-10.448.01z"
          />
          <path
            data-name="Path 10880"
            d="M1359.702 834.487a2.7 2.7 0 002.692-2.692h-5.384a2.7 2.7 0 002.692 2.692z"
          />
          <path
            data-name="Path 10881"
            d="M1355.663 829.013h8.077v1.436h-8.077z"
          />
        </g>
      </g>
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
