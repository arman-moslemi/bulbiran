import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      data-name="Icon awesome-telegram-plane"
      xmlns="http://www.w3.org/2000/svg"
      width={35.276}
      height={29.584}
      viewBox="0 0 35.276 29.584"
      {...props}
    >
      <path
        data-name="Icon awesome-telegram-plane"
        d="M35.176 2.693l-5.324 25.105c-.4 1.772-1.449 2.213-2.937 1.378l-8.111-5.977-3.914 3.764a2.037 2.037 0 01-1.63.8l.583-8.261L28.876 5.914c.654-.583-.142-.906-1.016-.323L9.275 17.293l-8-2.5c-1.74-.543-1.772-1.74.362-2.575L32.931.158c1.449-.544 2.717.322 2.245 2.535z"
        fill="#3ebdff"
      />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
