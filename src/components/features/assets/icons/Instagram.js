import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      data-name="Icon awesome-instagram"
      xmlns="http://www.w3.org/2000/svg"
      width={37.127}
      height={37.118}
      viewBox="0 0 37.127 37.118"
      {...props}
    >
      <defs>
        <linearGradient
          id="prefix__a"
          x1={0.158}
          y1={0.091}
          x2={0.903}
          y2={1}
          gradientUnits="objectBoundingBox"
        >
          <stop offset={0} stopColor="#1670c9" />
          <stop offset={0.246} stopColor="#f157fc" />
          <stop offset={0.453} stopColor="#f321bc" />
          <stop offset={0.634} stopColor="#ffb921" />
          <stop offset={1} stopColor="#fe367e" />
        </linearGradient>
      </defs>
      <path
        data-name="Icon awesome-instagram"
        d="M18.562 11.28a9.517 9.517 0 109.517 9.52 9.5 9.5 0 00-9.517-9.52zm0 15.7a6.187 6.187 0 116.187-6.18 6.2 6.2 0 01-6.187 6.187zm12.126-16.089a2.22 2.22 0 11-2.22-2.22 2.215 2.215 0 012.22 2.22zm6.3 2.253c-.141-2.973-.82-5.607-3-7.777s-4.8-2.849-7.777-3c-3.065-.174-12.25-.174-15.314 0-2.965.141-5.6.82-7.777 2.99s-2.849 4.8-3 7.777c-.174 3.065-.174 12.25 0 15.314.141 2.973.82 5.607 3 7.777s4.8 2.849 7.777 3c3.065.174 12.25.174 15.314 0 2.973-.141 5.607-.82 7.777-3s2.849-4.8 3-7.777c.174-3.065.174-12.242 0-15.306zm-3.956 18.594a6.264 6.264 0 01-3.532 3.529c-2.443.969-8.241.745-10.941.745s-8.506.215-10.941-.745a6.264 6.264 0 01-3.528-3.528c-.967-2.444-.743-8.239-.743-10.939s-.215-8.506.745-10.941a6.264 6.264 0 013.529-3.532c2.443-.969 8.241-.745 10.941-.745s8.506-.215 10.941.745a6.264 6.264 0 013.528 3.528c.969 2.445.746 8.245.746 10.945s.223 8.5-.745 10.938z"
        transform="translate(.005 -2.238)"
        fill="url(#prefix__a)"
      />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
