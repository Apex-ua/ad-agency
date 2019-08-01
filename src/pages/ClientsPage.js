import React from 'react';
import ClientList from '../components/ClientList';
import styled from 'styled-components';

const Wrap = styled.div`
    max-width: 960px;   
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    min-height: 200px;
`;

const ClientsArr = [
    {    
        "id": 1,
        "name": "testName",
        "imgUrl": "./img/client2.png",
        "imgAlt": "test alt",
        "desc": "Trademark of retail insurance, founded in 2000. Trademark of retail insurance, founded in 2000. Trademark of retail insurance, founded in 2000",
    },
    {    
        "id": 2,
        "name": "testName",
        "imgUrl": "./img/client1.png",
        "imgAlt": "test alt",
        "desc": "Trademark of retail insurance, founded in 2000. Trademark of retail insurance, founded in 2000. Trademark of retail insurance, founded in 2000"
    },
    {    
        "id": 3,
        "name": "testName",
        "imgUrl": "./img/client2.png",
        "imgAlt": "test alt",
        "desc": "Trademark of retail insurance, founded in 2000. Trademark of retail insurance, founded in 2000. Trademark of retail insurance, founded in 2000"
    },
    {    
        "id": 4,
        "name": "testName",
        "imgUrl": "./img/client1.png",
        "imgAlt": "test alt",
        "desc": "Trademark of retail insurance, founded in 2000. Trademark of retail insurance, founded in 2000. Trademark of retail insurance, founded in 2000"
    },
    {    
        "id": 5,
        "name": "testName",
        "imgUrl": "./img/client2.png",
        "imgAlt": "test alt",
        "desc": "test desc",
    },
    {    
        "id": 6,
        "name": "testName",
        "imgUrl": "./img/client1.png",
        "imgAlt": "test alt",
        "desc": "test desc",
    },
    {    
        "id": 7,
        "name": "testName",
        "imgUrl": "./img/client2.png",
        "imgAlt": "test alt",
        "desc": "test desc",
    }
];

const ClientsPage = () => (
    <Wrap>
        <h1>Trusted by</h1>
        <ClientList clients={ClientsArr}/>
    </Wrap>
);

 
export default ClientsPage;
