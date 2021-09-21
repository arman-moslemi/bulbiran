/*مراکز درمانی*/
import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={91.266}
      height={82.684}
      viewBox="0 0 91.266 82.684"
      {...props}
    >
      <g data-name="cardiogram (1)">
        <path
          data-name="Path 7538"
          d="M86.347 41.432c-.018.018.057 0-.224 0a3.984 3.984 0 00-3.979 5.309c-.5.524 1.649-1.621-34.649 34.487a2.644 2.644 0 01-3.732 0C7.477 45.129 9.617 47.27 9.115 46.741c1.074-2.662-1.171-5.451-4.2-5.3v-.005A26.614 26.614 0 01.506 26.421C.916 5.909 25.946-9.215 45.63 8.002c19.673-17.207 44.714-2.1 45.124 18.419a26.614 26.614 0 01-4.406 15.011z"
          fill="#ff405c"
          stroke="#000"
        />
        <path
          data-name="Path 7539"
          d="M86.347 41.432c-.018.018.057 0-.224 0a3.985 3.985 0 00-3.979 5.309c-.5.524 1.649-1.621-34.649 34.487a2.639 2.639 0 01-1.866.771v-74c12.253-10.718 27.542-9.349 37.28.386 8.66 8.662 10.651 21.769 3.438 33.047z"
          fill="#c30047"
          stroke="#000"
        />
        <path
          data-name="Path 7540"
          d="M86.347 41.431a34.786 34.786 0 01-4.185 5.291H62.561a2.647 2.647 0 01-2.33-1.392l-7.4-13.736-10.459 22.08a2.647 2.647 0 01-4.623.288L30.17 42.053l-2.032 3.384a2.643 2.643 0 01-2.268 1.284H9.101a34.787 34.787 0 01-4.185-5.291h19.462l3.462-5.771a2.644 2.644 0 014.5-.058l7.305 11.478 10.647-22.48a2.648 2.648 0 014.722-.122l9.127 16.951h22.205z"
          fill="#e1f3ff"
        />
        <path
          data-name="Path 7541"
          d="M55.014 24.48a2.648 2.648 0 00-4.722.122l-4.663 9.845V46.81l7.207-15.214 7.4 13.736a2.647 2.647 0 002.33 1.392h19.6a34.78 34.78 0 004.185-5.291h-22.21z"
          fill="#b1d5f1"
        />
      </g>
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent