import React from "react";
import styled from 'styled-components';

const SlideSection = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${props => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 400px;
    ::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.3);
    }
`;
const H2 = styled.h2`
  font-family: 'Saira Stencil One', cursive;  
  font-size: 2em;
  position: relative;
  text-transform: uppercase;
  color: white;
  z-index: 1;
`;

const Slide = ({ info: { image, text } }) => {
  return (
    <SlideSection url={image}>
      <div>
        <H2>{text}</H2>
      </div>
    </SlideSection>
  );
};

export default Slide;
