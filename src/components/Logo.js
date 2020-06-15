import tw, { styled } from "twin.macro"
import React from "react"

const Svg = styled.svg`
  margin: 0px;
  animation-duration: 1.5s;
  animation-name: rotate;
  animation-iteration-count: 1;
  transition: ease-in-out all;
  @keyframes rotate {
    0% {
      //opacity: 0;
      transform: rotate(380deg);
    }

    90% {
      transform: rotate(-20deg);
    }

    100% {
      //opacity: 1;
      transform: rotate(0deg);
    }
  }
`

const PathOne = styled.path`
  animation-duration: 1s;
  animation-name: slideIn;
  animation-iteration-count: 1;
  &:hover {
    animation-name: moveZ;
    animation-iteration-count: infinite;
    animation-duration: 1s;
  }
  fill: lightgrey;
  @keyframes slideIn {
    from {
      //opacity: 0;
      transform: translateX(-50px);
    }

    to {
      //opacity: 1;
      transform: translateX(0px);
    }
  }
  @keyframes moveZ {
    from {
      //opacity: 0;
      transform: translateX(0px);
    }

    to {
      //opacity: 1;
      transform: translateX(-10px);
    }
  }
`
const PathTwo = styled.path`
  animation-duration: 2s;
  animation-name: slideIn1;
  animation-iteration-count: 1;
  fill: black;
  &:hover {
    animation-name: moveZ;
    animation-iteration-count: infinite;
    animation-duration: 1s;
  }
  @keyframes slideIn1 {
    from {
      //opacity: 0;
      transform: translateY(-100px);
    }

    to {
      //opacity: 1;
      transform: translateY(0px);
    }
  }
`
const PathThree = styled.path`
  animation-duration: 2s;
  animation-name: slideIn2;
  animation-iteration-count: 1;
  fill: black;
  &:hover {
    animation-name: moveZ;
    animation-iteration-count: infinite;
    animation-duration: 1s;
  }
  @keyframes slideIn2 {
    from {
      //opacity: 0;
      transform: translateX(-50px);
    }

    to {
      //opacity: 1;
      transform: translateX(0px);
    }
  }
`

const PathFour = styled.path`
  animation-duration: 2s;
  animation-name: slideIn3;
  animation-iteration-count: 1;
  fill: black;
  &:hover {
    animation-name: moveZ;
    animation-iteration-count: infinite;
    animation-duration: 1s;
  }
  @keyframes slideIn3 {
    from {
      transform: translateY(50px);
    }

    to {
      transform: translateY(0px);
    }
  }
`

const PathFive = styled.path`
  animation-duration: 2s;
  animation-name: slideIn4;
  animation-iteration-count: 1;
  fill: black;
  &:hover {
    animation-name: moveZ;
    animation-iteration-count: infinite;
    animation-duration: 1s;
  }
  @keyframes slideIn4 {
    from {
      //opacity: 0;
      transform: translateY(-50px) translateX(-50px);
    }

    to {
      //opacity: 1;
      transform: translateY(0px) translateX(0px);
    }
  }
`

const PathSix = styled.path`
  animation-duration: 2s;
  animation-name: slideIn5;
  animation-iteration-count: 1;
  fill: black;
  &:hover {
    animation-name: moveZ;
    animation-iteration-count: infinite;
    animation-duration: 1s;
  }
  @keyframes slideIn5 {
    from {
      transform: translateX(50px);
    }

    to {
      transform: translateX(0px);
    }
  }
`

const PathSeven = styled.path`
  animation-duration: 2s;
  animation-name: slideIn6;
  animation-iteration-count: 1;
  fill: lightgrey;
  &:hover {
    animation-name: moveZ;
    animation-iteration-count: infinite;
    animation-duration: 1s;
  }
  @keyframes slideIn6 {
    from {
      transform: translateY(50px) translateX(50px);
    }

    to {
      transform: translateY(0px) translateX(0px);
    }
  }
`

const PathEight = styled.path`
  animation-duration: 2s;
  animation-name: slideIn7;
  animation-iteration-count: 1;
  fill: black;
  &:hover {
    animation-name: moveZ;
    animation-iteration-count: infinite;
    animation-duration: 1s;
  }
  @keyframes slideIn7 {
    from {
      transform: translateY(75px);
    }

    to {
      transform: translateY(0px);
    }
  }
`

const PathNine = styled.path`
  animation-duration: 2s;
  animation-name: slideIn8;
  animation-iteration-count: 1;
  fill: black;
  &:hover {
    animation-name: moveZ;
    animation-iteration-count: infinite;
    animation-duration: 1s;
  }
  @keyframes slideIn8 {
    from {
      transform: translateY(-50px) translateX(50px);
    }

    to {
      transform: translateY(0px) translateX(0px);
    }
  }
`

const Logo = () => {
  return (
    <div>
      <Svg
        width="200"
        height="200"
        viewBox="-50 -75 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* <path
          d="M22.0014 0.72641V11.6691L5.50043 11.6691C2.46265 11.6691 4.95911e-05 9.21953 4.95911e-05 6.19778C4.95911e-05 3.17602 2.46265 0.72641 5.50043 0.72641L22.0014 0.72641Z"
          fill="#C4C4C4"
          stroke="#C4C4C4"
          width="4"
        /> */}
        <PathOne
          id="one"
          d="M22.0014 0.72641V11.6691L5.50043 11.6691C2.46265 11.6691 4.95911e-05 9.21953 4.95911e-05 6.19778C4.95911e-05 3.17602 2.46265 0.72641 5.50043 0.72641L22.0014 0.72641Z"
          fill="url(#paint0_linear)"
        />
        {/* <PathTwo
          d="M11 0.72641H22.0007L22.119 54.4573C22.1257 57.5162 19.6347 59.9995 16.5595 59.9995C13.4891 59.9995 11 57.5235 11 54.4694V0.72641Z"
          fill="#C4C4C4"
        /> */}
        <PathTwo
          d="M11 0.72641H22.0007L22.119 54.4573C22.1257 57.5162 19.6347 59.9995 16.5595 59.9995C13.4891 59.9995 11 57.5235 11 54.4694V0.72641Z"
          fill="url(#paint1_linear)"
        />
        {/* <path
          d="M44.3898 30.4574V41.3989H10.9963V30.4574L44.3898 30.4574Z"
          fill="#003DE9"
        /> */}
        <PathThree
          d="M44.3898 30.4574V41.3989H10.9963V30.4574L44.3898 30.4574Z"
          fill="url(#paint2_linear)"
        />
        <PathFour
          d="M33.2598 27.1755H44.391V54.4638C44.391 57.5213 41.8992 60 38.8254 60C35.7516 60 33.2598 57.5213 33.2598 54.4638V27.1755Z"
          fill="#92DFFE"
        />
        <PathFive
          d="M44.3921 25.8625L22.1298 0.915741V19.7643L44.3921 42.4935V25.8625Z"
          fill="#10B1FE"
        />
        {/* <PathSix
          d="M93.4996 49.0566C96.5374 49.0566 98.9999 51.5062 98.9999 54.528C98.9999 57.5497 96.5374 59.9994 93.4996 59.9994H82.4989V49.0566H93.4996Z"
          fill="#C4C4C4"
        /> */}
        <PathSix
          d="M93.4996 49.0566C96.5374 49.0566 98.9999 51.5062 98.9999 54.528C98.9999 57.5497 96.5374 59.9994 93.4996 59.9994H82.4989V49.0566H93.4996Z"
          fill="url(#paint3_linear)"
        />
        <PathSeven
          d="M95.3348 59.9999L65.9137 16.9023V35.036L82.5006 59.9999H95.3348Z"
          fill="#92DFFE"
        />
        {/* <path
          d="M55.0628 5.90695C55.066 2.85496 57.5542 0.382538 60.6223 0.382538C63.6998 0.382538 66.1917 2.86939 66.1818 5.93059L66.0242 54.5403C66.0144 57.5585 63.552 60 60.5179 60C57.4745 60 55.0083 57.5442 55.0115 54.517L55.0628 5.90695Z"
          fill="#C4C4C4"
        /> */}
        <PathEight
          d="M55.0628 5.90695C55.066 2.85496 57.5542 0.382538 60.6223 0.382538C63.6998 0.382538 66.1917 2.86939 66.1818 5.93059L66.0242 54.5403C66.0144 57.5585 63.552 60 60.5179 60C57.4745 60 55.0083 57.5442 55.0115 54.517L55.0628 5.90695Z"
          fill="url(#paint4_linear)"
        />
        <PathNine
          d="M85.2599 1.97657L55.1536 34.0436L55.1525 48.2969L92.9935 9.18062C96.251 5.81337 93.8961 0.266707 89.2095 0.267348C87.7149 0.267587 86.2823 0.887465 85.2599 1.97657Z"
          fill="#10B1FE"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="22.0014"
            y1="11.6691"
            x2="4.95911e-05"
            y2="11.6691"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#BAEAFE" />
            <stop offset="1" stopColor="#0491FF" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="22.1312"
            y1="0.915339"
            x2="22.1312"
            y2="59.9996"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#BAEAFE" />
            <stop offset="1" stopColor="#0491FF" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="44.3898"
            y1="41.3989"
            x2="10.9963"
            y2="41.3989"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0C4BEB" />
            <stop offset="1" stopColor="#83CFFC" />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="98.9999"
            y1="59.5236"
            x2="82.4989"
            y2="59.5236"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#003DE9" />
            <stop offset="1" stopColor="#92DFFE" />
          </linearGradient>
          <linearGradient
            id="paint4_linear"
            x1="66.1998"
            y1="0.382538"
            x2="66.1998"
            y2="59.4668"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#003DE9" />
            <stop offset="1" stopColor="#92DFFE" />
          </linearGradient>
        </defs>
      </Svg>
    </div>
  )
}

export default Logo
