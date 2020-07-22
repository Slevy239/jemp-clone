import React, { Component } from 'react';
// import Display from '../components/display/display'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './merchData'
import MerchData from './merchData';
import Pagination from '@material-ui/lab/Pagination';
class Merch extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        console.log('hi')
        return (
            <div>
                {MerchData.items.map((old, index) => {
                    return (

                        <Card key={index} divider='true'>
                            <Card.Img variant='top' src={old.img} />
                            <Card.Body>
                                <Card.Title>{old.name}</Card.Title>
                                <Card.Text>{old.price}</Card.Text>
                                <Button variant='primary'>Purchase</Button>
                            </Card.Body>
                        </Card>
                    )
                })}
                <div className='center'>

                    <Pagination />
                </div>
            </div>

        )
    }
}
export default Merch;