import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(100px, auto);
    column-gap: 1em;
    row-gap: 1em;
    padding: 1em 0;
    @media (min-width: 600px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 900px){
        grid-template-columns: repeat(3, 1fr);
    }
`;

const Card = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    min-height: 200px;
    min-width: 300px;
    :hover .overlay{
        opacity: 1;
    }
    img {
        display: block;
        width: 100%;
    }
`;

const DescOverlay = styled.div`
    position: absolute;
    bottom: 0;
    background: silver;
    color: #f1f1f1;
    width: 100%;
    transition: .5s ease;
    opacity:0;
    color: white;
    font-size: 14px;
    padding: 20px;
    text-align: center;
    height: 100%;
    overflow: auto;
`;


class ClientList extends Component {
    render() { 
        return ( 
            <Wrapper>
            {this.props.clients.map(item => (
                    <Card key={item.id}>
                        <img src={item.imgUrl} alt={item.imgAlt} />
                        <DescOverlay className="overlay">{item.desc}</DescOverlay>
                    </Card>
                ))
            }
            </Wrapper>
         );
    }
}
 
export default ClientList;