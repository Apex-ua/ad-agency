import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(100px, auto);
    column-gap: 1em;
    row-gap: 1em;
    padding: 1em 0;
    img{
        display: block;
        width: 100%;
    }
    @media (min-width: 600px){
        grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 900px){
        grid-template-columns: 1fr 1fr 1fr;
    }
`;
const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1em;
    // background: papayawhip;
    border: 4px solid transparent;
    box-shadow: 0 0 10px rgba(0,0,0,.1), 0 1px 60px rgba(0,0,0,.1);
`;

const Button = styled.button`
    background: #FFF;
    color: #262626;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #262626;
    border-radius: 3px;
    cursor: pointer;
`;

const Price = styled.span`
:before {
    content: "$";
    margin-right: 6px;
}
:after {
    content: " / per month";
    margin-right: 6px;
}
`;

class ServiseList extends Component {
    render() { 
        return ( 
            <Wrapper>
                {this.props.servises.map(item => (
                    <Card key={item.id}>
                        <h3>{item.name}</h3>
                        <img src={item.imgUrl} alt={item.imgAlt} />
                        <p>{item.desc}</p>
                        <div>
                            <Price>{item.price}</Price>
                        </div>
                        <Button onClick={()=> this.props.addToCart(item)}>
                            <FaPlus /> Order
                        </Button>
                    </Card>
                ))
                }
            </Wrapper>
         );
    }
}
 
export default ServiseList;