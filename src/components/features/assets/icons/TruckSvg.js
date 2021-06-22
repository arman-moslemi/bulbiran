import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={40.141}
      height={29.385}
      viewBox="0 0 40.141 29.385"
      {...props}
    >
      <path
        data-name="Path 1"
        d="M34.216 7.542h-8.288v15.022h13.58v-6.761l-1.584-5.474a3.86 3.86 0 00-3.708-2.787"
        fill="#165a9f"
      />
      <path
        data-name="Path 2"
        d="M37.523 15.733l-1.411-4.879a1.986 1.986 0 00-1.9-1.426h-6.4v6.3z"
        fill="#84dbff"
      />
      <path data-name="Path 3" d="M37.524 15.731h-9.716v-6.3z" fill="#cdd6e0" />
      <path
        data-name="Path 4"
        d="M37.523 15.733l-1.411-4.879a1.986 1.986 0 00-1.9-1.426h-6.4z"
        fill="#f2f2f2"
      />
      <path
        data-name="Path 5"
        d="M2.509.003h20.908a2.509 2.509 0 012.509 2.509v20.051H0V2.509A2.508 2.508 0 012.509.003"
        fill="#ffd200"
      />
      <path
        data-name="Path 6"
        d="M16.992.004v6.628l-.97-.97-1.017 1.017-1.016-1.017-1.016 1.017-1.018-1.017-1.025 1.017-1.015-1.017-.982.982V.004z"
        fill="#f2f2f2"
      />
      <path
        data-name="Path 7"
        d="M40.14 22.561v2.835H.003v-2.835h4.189a5.748 5.748 0 0110.034 0h13.48a5.74 5.74 0 0110.025 0z"
        fill="#334a5e"
      />
      <path
        data-name="Path 8"
        d="M36.721 25.379a4.005 4.005 0 11-4.006-4.006 4.006 4.006 0 014.006 4.006"
        fill="#40596b"
      />
      <path
        data-name="Path 9"
        d="M34.324 25.379a1.61 1.61 0 11-1.609-1.609 1.609 1.609 0 011.609 1.609"
        fill="#acb3ba"
      />
      <path
        data-name="Path 10"
        d="M13.212 25.379a4.006 4.006 0 11-4.006-4.006 4.007 4.007 0 014.006 4.006"
        fill="#40596b"
      />
      <path
        data-name="Path 11"
        d="M10.816 25.379a1.609 1.609 0 11-1.609-1.609 1.608 1.608 0 011.609 1.609"
        fill="#acb3ba"
      />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
