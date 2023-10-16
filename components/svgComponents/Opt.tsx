import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={31}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M12.817 17.25c.6.6 1.375.894 2.325.882.95-.012 1.65-.356 2.1-1.032l8.4-12.6-12.6 8.4c-.675.45-1.03 1.137-1.068 2.063-.037.925.244 1.687.843 2.287ZM15.142 0c1.475 0 2.894.207 4.257.62a13.834 13.834 0 0 1 3.843 1.855l-2.85 1.8a11.352 11.352 0 0 0-2.568-.956A11.555 11.555 0 0 0 15.142 3c-3.325 0-6.156 1.168-8.494 3.505C4.31 8.842 3.14 11.674 3.142 15c0 1.05.144 2.087.432 3.113A12.355 12.355 0 0 0 4.792 21h20.7c.575-.95.994-1.938 1.257-2.962.263-1.026.394-2.088.393-3.188 0-.9-.106-1.775-.32-2.625a10.96 10.96 0 0 0-.955-2.475l1.8-2.85a16.663 16.663 0 0 1 1.782 3.75c.438 1.325.67 2.7.693 4.125a14.659 14.659 0 0 1-.487 4.088c-.35 1.3-.863 2.537-1.538 3.712-.275.45-.65.8-1.125 1.05s-.975.375-1.5.375h-20.7a3.177 3.177 0 0 1-1.5-.375c-.475-.25-.85-.6-1.125-1.05A14.887 14.887 0 0 1 .142 15c0-2.075.394-4.019 1.182-5.832A15.262 15.262 0 0 1 4.55 4.407a15.214 15.214 0 0 1 4.78-3.226C11.151.393 13.09-.001 15.141 0Z"
    />
  </svg>
)
export default SvgComponent