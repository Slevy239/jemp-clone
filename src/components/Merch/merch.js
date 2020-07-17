import React, { Component } from 'react';
// import Display from '../components/display/display'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Card'

class Merch extends Component {
    componentDidMount() {
    }
    render() {

        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
    </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>

        )
    }
}
export default Merch;