import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 471 70"
    {...props}
  >
    <path stroke="#151E2C" d="M11 34.5h459" />
    <circle cx={35} cy={35} r={35} fill="#F3F8FF" />
    <circle cx={35} cy={35} r={34.5} stroke="#151E2C" />
    <circle cx={35} cy={35} r={22} fill="#151E2C" />
  </svg>
)
export default SvgComponent
