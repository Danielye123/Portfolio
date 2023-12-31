import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (
  props: SVGProps<SVGSVGElement> & { pathClassName?: string }
) => (
  <svg
    width="115"
    height="114"
    viewBox="15 16 63 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_d_3309_2107)" id="hover-me">
      <rect
        x="16.6421"
        y="16"
        width="62"
        height="62"
        rx="10"
        fill="#0252CD"
      />
    </g>
    <path
      d="M44.8171 52.25C45.4171 52.85 46.1921 53.144 47.1421 53.132C48.0921 53.12 48.7921 52.776 49.2421 52.1L57.6421 39.5L45.0421 47.9C44.3671 48.35 44.0111 49.0375 43.9741 49.9625C43.9371 50.8875 44.2181 51.65 44.8171 52.25ZM47.1421 35C48.6171 35 50.0361 35.2065 51.3991 35.6195C52.7621 36.0325 54.0431 36.651 55.2421 37.475L52.3921 39.275C51.5671 38.85 50.7111 38.5315 49.8241 38.3195C48.9371 38.1075 48.0431 38.001 47.1421 38C43.8171 38 40.9856 39.1685 38.6476 41.5055C36.3096 43.8425 35.1411 46.674 35.1421 50C35.1421 51.05 35.2861 52.0875 35.5741 53.1125C35.8621 54.1375 36.2681 55.1 36.7921 56H57.4921C58.0671 55.05 58.4861 54.0625 58.7491 53.0375C59.0121 52.0125 59.1431 50.95 59.1421 49.85C59.1421 48.95 59.0356 48.075 58.8226 47.225C58.6096 46.375 58.2911 45.55 57.8671 44.75L59.6671 41.9C60.4171 43.075 61.0111 44.325 61.4491 45.65C61.8871 46.975 62.1181 48.35 62.1421 49.775C62.1671 51.2 62.0046 52.5625 61.6546 53.8625C61.3046 55.1625 60.7921 56.4 60.1171 57.575C59.8421 58.025 59.4671 58.375 58.9921 58.625C58.5171 58.875 58.0171 59 57.4921 59H36.7921C36.2671 59 35.7671 58.875 35.2921 58.625C34.8171 58.375 34.4421 58.025 34.1671 57.575C33.5171 56.45 33.0171 55.256 32.6671 53.993C32.3171 52.73 32.1421 51.399 32.1421 50C32.1421 47.925 32.5361 45.981 33.3241 44.168C34.1121 42.355 35.1871 40.768 36.5491 39.407C37.9111 38.044 39.5041 36.9685 41.3281 36.1805C43.1521 35.3925 45.0901 34.999 47.1421 35Z"
      fill="white"
    />
    <defs>
      <filter
        id="filter0_d_3309_2107"
        x="0.64209"
        y="0"
        width="114"
        height="114"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="10" dy="10" />
        <feGaussianBlur stdDeviation="13" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.00784314 0 0 0 0 0.321569 0 0 0 0 0.803922 0 0 0 0.28 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_3309_2107"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_3309_2107"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgComponent;
