import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavUl = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    background-color: #262626;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const StyledLink = styled(Link)`
    display: block;
    text-decoration: none;
    color: white;
    padding: .6em 1em;
    :hover {
        background: hsl(0, 0%, 25%);
    }
    flex: 1 0 auto;
    text-align: center;
`;
const Logo = styled.a`
    font-family: 'Saira Stencil One', cursive;  
    font-size: 2em;
    text-decoration: none;
    color: white;
    padding-left: 0.5em;
`;
const StyledHeader = styled.header`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    background-color: #262626;
`;



const NavBar = () => (
    <StyledHeader>
        <div>
            <Logo href="/">AD-AGENCY</Logo>
        </div>
        <nav>
            <NavUl>
                <li>
                    <StyledLink to="/">Home</StyledLink>
                </li>
                <li>
                    <StyledLink to="/contacts">Contacts</StyledLink>
                </li>
                <li>
                    <StyledLink to="/clients">Clients</StyledLink>
                </li>
                <li>
                    <StyledLink to="/services">Services</StyledLink>
                </li>
            </NavUl>
        </nav>
    </StyledHeader>
);

export default NavBar;