import { memo } from "react";
import styled, { keyframes } from "styled-components";

const Papers = ({ width = 7 }) => {
  return (
    <StyledPapers width={width}>
      {Array(6)
        .fill(null)
        .map((element, index) => (
          <Paper key={index} className={`paper-${index + 1}`} />
        ))}
    </StyledPapers>
  );
};

const slide = keyframes`
  0% {
    transform: rotateX(90deg) translate3d(10em, 26rem, 6em);
  }
`;

const StyledPapers = styled.div`
  display: none;
  position: absolute;
  width: ${({ width }) => `${width}em`};
  height: ${({ width }) => `${width * 1.4}em`};
  transform-style: preserve-3d;
  transform: rotateX(90deg) translate3d(10em, 4em, 6.2em);

  animation: ${slide} 1s backwards 1.8s;

  &:hover {
    .paper-3 {
      transform: rotateZ(3deg) translateZ(-0.02em);
    }
    .paper-5 {
      transform: rotateZ(6deg) translateZ(0.02em);
    }
    .paper-6 {
      transform: rotateZ(9deg) translateZ(0.04em);
    }
  }

  @media (min-width: 545px) {
    display: block;
  }
`;

const Paper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 0.7em;
  background-color: #fff;
  box-shadow: 3px 0px 2px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;

  &.paper-1 {
    transform: translateZ(-0.06em);
  }
  &.paper-2 {
    transform: translateZ(-0.04em);
  }
  &.paper-3 {
    transform: translateZ(-0.02em);
  }
  &.paper-5 {
    transform: translateZ(0.02em);
  }
  &.paper-6 {
    transform: rotateZ(0) translateZ(0.04em);
    transform-origin: 100% 100%;
  }
`;

export default memo(Papers);
