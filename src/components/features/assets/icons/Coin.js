import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={55.144}
      height={55.64}
      viewBox="0 0 55.144 55.64"
      {...props}
    >
      <defs>
        <linearGradient
          id="prefix__a"
          x1={6.918}
          y1={5.101}
          x2={4.867}
          y2={8.2}
          gradientUnits="objectBoundingBox"
        >
          <stop offset={0} stopColor="#fe7062" />
          <stop offset={1} stopColor="#ff928e" />
        </linearGradient>
        <linearGradient
          id="prefix__b"
          x1={15.384}
          y1={7.921}
          x2={12.818}
          y2={10.841}
          xlinkHref="#prefix__a"
        />
      </defs>
      <g data-name="Group 691" transform="rotate(16 1851.897 -4307.157)">
        <circle
          data-name="Ellipse 638"
          cx={23.877}
          cy={23.877}
          r={23.877}
          transform="rotate(-7.5 3243.064 -9485.73)"
          fill="url(#prefix__a)"
        />
        <path
          data-name="Path 12339"
          d="M1271.198 358.713a.484.484 0 01-.214 0 .458.458 0 01-.355-.541 22.4 22.4 0 0116.155-17.205 22.832 22.832 0 014.011-.711.46.46 0 01.079.916 21.6 21.6 0 00-19.345 17.185.465.465 0 01-.331.356z"
          fill="#fff"
          opacity={0.69}
        />
        <circle
          data-name="Ellipse 639"
          cx={20.21}
          cy={20.21}
          r={20.21}
          transform="rotate(-45 1070.605 -1345.145)"
          fill="#fff"
          opacity={0.69}
        />
        <path
          data-name="Path 12340"
          d="M1276.566 276.038l-.573-2.12a18.037 18.037 0 01-6.317.324 1.275 1.275 0 01-1.074-1.267v-2.125a1.279 1.279 0 011.461-1.263 14.877 14.877 0 005.812-.336c2.127-.576 3.521-1.729 3.123-3.21-.363-1.338-1.809-1.8-4.987-1.788-4.536 0-8.07-1.03-9.08-4.738-.908-3.356.849-6.589 4.927-8.429l-.577-2.124a1.279 1.279 0 01.9-1.579l1.248-.336a1.279 1.279 0 011.579.9l.517 1.9a16.3 16.3 0 014.947-.43 1.271 1.271 0 011.184 1.275v1.974a1.279 1.279 0 01-1.4 1.275 13.326 13.326 0 00-4.856.415c-2.527.687-2.965 1.931-2.712 2.87.316 1.153 2.049 1.536 5.606 1.658 5.078.134 7.557 1.555 8.508 5.057.872 3.214-.727 6.751-5.156 8.725l.647 2.369a1.287 1.287 0 01-.9 1.579l-1.244.336a1.283 1.283 0 01-1.579-.916z"
          transform="translate(18.766 102.032)"
          fill="url(#prefix__b)"
        />
      </g>
    </svg>
  )
}

export default SvgComponent
