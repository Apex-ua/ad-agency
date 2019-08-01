import React from 'react';
import styled from 'styled-components';
import Slider from '../components/Slider';

const Wrap = styled.div`
    max-width: 900px;
    margin: 0 auto;
    padding:  10px;
    overflow: hidden;
`;

const H3 = styled.h3`
    font-family: 'Saira Stencil One', cursive;  
    font-size: 1.5em;
    position: relative;
    text-transform: uppercase;
`;

const HomePage = () => (
    <>
    <Slider />
    <Wrap>
        <h1>Hello, welcome to our advertising agency site!</h1>
        <H3>Strategy</H3>
        <p>
            All our creative ideas are born from the behavior of ordinary people. 
            This is the only way to create work that can change the brand. 
            In order for your brand to become a cult, it must become simple, like a 
            conversation between two friends in an elevator. The strategy is primarily 
            responsible for this. And our strategic department.
        </p>
        <H3>Creative</H3>
        <p>
            Advertising creative always pursues one goal and solves one specific problem. 
            To solve problems, we create stories. Sometimes a big idea of a story can hide in the simple, 
            small and most obvious. The main thing is to be the first to discover it. 
            No matter what the campaign will be: how it will look or sound, it is important what impact it 
            will have on people. And how else someone will tell someone about it - and even better, if in their own words.
        </p>
        <H3>Craft</H3>
        <p>
            Both in fiction and in any other form of art, the most important element is detail. 
            Creative craft, which is also advertising, is impossible without painstaking work on the details.
            Therefore, 90% of what we come up with is what we do.
        </p>
    </Wrap>
    </>
);

export default HomePage;