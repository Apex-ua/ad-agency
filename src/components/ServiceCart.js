import React from 'react';
import styled from 'styled-components';

const Container = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 200px;
    flex-basis: 30%;
`;

const Button = styled.button`
    background: white;
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;
const Image = styled.img`
    display: block;
    width: 100%;
`;



const ServiceCart = ( { name, imgUrl, imgAlt, desc, price, buttonOnClick } ) => {
    return ( 
        <Container>
            <h3>{name}</h3>
            <Image src={imgUrl} alt={imgAlt} />
            <p>{desc}</p>
            <p>{price}</p>
            <Button onClick={buttonOnClick}>Add to cart</Button>
        </Container>
     );
}
 
export default ServiceCart;
