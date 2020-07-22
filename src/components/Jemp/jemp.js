import React, { Component } from 'react';
import axios from 'axios';
import Iframe from 'react-iframe';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Jemp extends Component {
    state = {
        img: []
    }
    componentDidMount() {
        axios.get("https://public.radio.co/stations/sd71de59b3/status").then(res => {
            this.setState({ img: res.data.logo_url })
        }).catch(err => console.log(err))

    }
    render() {
        console.log(this.state.img)
        return (
            <div>
                <Container>
                    <Row>
                        <Col >
                            {/* <img src={this.state.img} className='float-left' id='mainImg' /> */}
                            <Iframe url="https://embed.radio.co/player/15a1a96.html" id="iframe" title="JEMP Radio"
                                allow="autoplay" frameBorder='0' align='center'  />
                        </Col>
                    </Row>
                </Container>

            </div>

        )
    }
}
export default Jemp;