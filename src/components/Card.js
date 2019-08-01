import React from 'react';
import styled from 'styled-components';

const ArticleCard = styled.article`
    display: block;
    background: white;
    margin-bottom: 2em;	
    a {
        color: black;
        text-decoration: none;
    }
    a:hover {
        box-shadow: 3px 3px 8px hsl(0, 0%, 70%);
    }
    img {
        // display: block;
        // border: 0;
        // width: 100%;
        // height: auto;
    }

    @media screen and (min-width: 40em) {
        display: flex;
        flex: 0 1 calc(50% - .5em);
        margin-bottom: 1em;
    }
    
    @media screen and (min-width: 60em) {
        flex: 0 1 calc(33% - 1em);
        margin-bottom: 2em;
    }
`;

const CardContent = styled.div`
    padding: 1.4em;
    h2 {
        margin-top: 0;
        margin-bottom: .5em;
        font-weight: normal;
    }
    p {
        font-size: 95%;
    }
`;

const Card = ({imgSrc="#", imgAlt="No alt Provided", title="No Title Provided", description="No Description Provided"}) => {
    return(
        <ArticleCard>
            <a href="#">
                <img src={imgSrc} alt={imgAlt} />
            </a>
            <CardContent>
                <h2>{title}</h2>
                <p>{description}</p>
            </CardContent>
        </ArticleCard>
    );
}

export default Card;
