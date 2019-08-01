import React from 'react';
import styled from 'styled-components';
import { FaTwitter, FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa';

const StyledUl = styled.footer`
    list-style-type: none;
    padding: 0;
    margin: 0;
    background: hsl(0, 0%, 15%);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
const Link = styled.a`
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


const FooterBar = () => (
    <footer>
        <StyledUl>
            <li><Link href="http://twitter.com"><FaTwitter /> Twitter</Link></li>
            <li><Link href="http://facebook.com"><FaFacebook /> Facebook </Link></li>
            <li><Link href="http://linkedin.com"><FaLinkedin /> LinkedIn </Link></li>
            <li><Link href="http://youtube.com"><FaYoutube /> YouTube </Link></li>
            <li><Link href="http://instagram.com"><FaInstagram /> Instagram </Link></li>
        </StyledUl>
    </footer>
);

export default FooterBar;