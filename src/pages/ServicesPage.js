import React, {Component} from 'react';
import ServiceCart from '../components/ServiceCart';
import styled from 'styled-components';

const ServArr = [
    {    
        id: "1",
        name: "testName",
        imgUrl: "./img/rowdy.jpg",
        imgAlt: "test alt",
        desc: "test desc",
        price: 100
    },
    {    
        id: "2",
        name: "Second",
        imgUrl: "./img/rowdy.jpg",
        imgAlt: "second alt",
        desc: "second desc",
        price: 200
    }
];

const ServicesContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

class ServicesPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            cartEmpty: true,
            serviceArr: [],
         }         
    }

	AddItemToCart = () => {
		this.setState(prevState => ({
			cartEmpty: !prevState.cartEmpty
		}))
	}

    render() { 
        return ( 
            <>
                { this.state.cartEmpty ?
                <p>Cart is empty</p> :
                <p>Cart not empry</p> }
                <h2>Our services</h2>
                <ServicesContainer>
                    {ServArr.map((service) =>
                        <ServiceCart key={service.id.toString()}
                            name={service.name}
                            imgUrl={service.imgUrl}
                            imgAlt={service.imgAlt}
                            desc={service.desc}
                            price={service.price} 
                            buttonOnClick={this.AddItemToCart} />
                    )}
                </ServicesContainer>
            </>
         );
    }
}
 
export default ServicesPage;


