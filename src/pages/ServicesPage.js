import React, {Component} from 'react';
import ServiceList from '../components/ServiceList';
import styled from 'styled-components';

const Wrap = styled.div`
    max-width: 960px;   
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    min-height: 200px;
`;

const StyledInput = styled.input`
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`;

class SearchBar extends Component {
    render() { 
        return ( 
            <StyledInput
                id="searchServ"
                type="text"
                placeholder="Enter query here"
                onChange={e=> this.props.searchServ(e.target.value)}
                autoComplete="off"
            />
        );
    }
}



class ServicesPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            cartEmpty: true,
            serviceArr: [],
            queryText: '',
            cartArray: [],
         } 
        this.searchServ = this.searchServ.bind(this);  
        this.addToCart = this.addToCart.bind(this);      
    }

    addToCart(itm){
        alert(JSON.stringify(itm));
    } 

    searchServ(query){
        this.setState({queryText: query});
    }

    componentDidMount() {
		fetch('./data/services.json')
			.then(data => data.json())
			.then(data => this.setState({serviceArr : data}))
	}

    render() {
        let filteredService = this.state.serviceArr;
        filteredService = filteredService.filter(eachItem => {
            return(
                eachItem['name']
                .toLowerCase()
                .includes(this.state.queryText.toLowerCase())
            )
        })
        return ( 
            <Wrap>
                <p>{this.state.cartArray}</p>
                <h2>Our services</h2>
                <div>
                    <SearchBar searchServ = {this.searchServ} />
                </div>
                    <ServiceList 
                        servises={filteredService}
                        addToCart={this.addToCart}
                    />
            </Wrap>
        );
    }
}
 
export default ServicesPage;


