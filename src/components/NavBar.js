import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavUl = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    background: hsl(0, 0%, 15%);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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

const NavBar = () => (
    <nav>
        <NavUl>
            <li>
                <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
                <StyledLink to="/contacts">Contacts</StyledLink>
            </li>
            <li>
                <StyledLink to="/portfolio">Portfolio</StyledLink>
            </li>
            <li>
                <StyledLink to="/services">Services</StyledLink>
            </li>
        </NavUl>
    </nav>
);

export default NavBar;