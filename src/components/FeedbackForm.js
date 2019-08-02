import React, {Component} from 'react';
import styled from 'styled-components';

const Input = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: block;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const Textarea = styled.textarea`
    width: 100%;
    height: 150px;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 1x solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
    resize: none;
`;

const Button = styled.button`
    width: 100%;
    background-color: #FFF;
    color: 262626;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    :hover {
        background-color: #45a049;
    }
`;
const Form = styled.form`
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
    margin: 10px;
`;
  
class FeedbackForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstName: '',
            lastName: '',
            email: '',
            message: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }
    handleAdd(e){
        e.preventDefault();
        alert(`Send message:
            First name: ${this.state.firstName}
            Last name: ${this.state.lastName}
            Email: ${this.state.lastName}
            Message: ${this.state.message}
        `);
        
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            message: '',
        });
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        
        this.setState({
           [name]: value 
        });
    }


    render() { 
        return ( 
            <Form 
                noValidate
                onSubmit={this.handleAdd}
            >
                <Input
                    type="text"
                    name="firstName" 
                    placeholder="First name*"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                />
                <Input
                    type="text"
                    name="lastName" 
                    placeholder="Last Name*"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                />
                <Input
                    type="email"
                    name="email" 
                    placeholder="Email*"
                    value={this.state.email}
                    onChange={this.handleChange}
                />
                <Textarea
                    rows="4"
                    cols="50"
                    name="message"
                    placeholder="Message*"
                    value={this.state.message}
                    onChange={this.handleChange}
                />
                <Button type="submit">
                    Send
                </Button>
            </Form>
        );
    }
}
 
export default FeedbackForm;

