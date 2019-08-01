import React, { Component } from 'react';
import Slide from './Slide'
import styled from 'styled-components';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'; 

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: #262626;
`;

const Button = styled.button`
    background: #FFF;
    color: #262626;
    font-size: 1em;
    margin: 1em;
    width: 130px;
    padding: 0.25em 1em;
    border: 2px solid #262626;
    border-radius: 3px;
    cursor: pointer;
`;

class Slider extends Component {
    constructor(props) {
      super(props);
      this.state = {
        slide: [
          {
            id: "1",
            image:
              "./img/slider-1.jpg",
            text: "Nobody looks advertisement."
          },
          {
            id: "2",
            image:
              "./img/slider-2.jpg",
            text: "People watch what interests them."
          },
          {
            id: "3",
            image:
              "./img/slider-3.jpg",
            text: "And only occasionally - it is an advertisement."
          }
        ],
        currentIndex: 0
      };
    }

    componentDidMount() {
        this.timer = setInterval(
            () => this.nextState(),
            5000
          );
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }
  
    previousState = () => {
      const { slide, currentIndex } = this.state;
      if (currentIndex === 0) {
        return this.setState({ currentIndex: slide.length - 1 });
      }
      this.setState({ currentIndex: currentIndex - 1 });
    };
  
    nextState = () => {
      const { currentIndex, slide } = this.state;
      if (currentIndex === slide.length - 1) {
        return this.setState({ currentIndex: 0 });
      }
      this.setState({ currentIndex: currentIndex + 1 });
    };

    render() {
      const { slide, currentIndex } = this.state;
      return (
            <>
                <Slide key={slide[currentIndex].id} info={slide[currentIndex]} />
                <ButtonsContainer>
                    <Button onClick={this.previousState}>
                      <FaArrowCircleLeft/> 
                      Previous
                    </Button>
                    <Button onClick={this.nextState}>
                      Next
                      <FaArrowCircleRight />
                    </Button>
                </ButtonsContainer>
            </>
      );
    }
  }
  
  export default Slider;