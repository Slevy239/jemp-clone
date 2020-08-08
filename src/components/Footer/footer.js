import React, { Component } from 'react';
import '../Footer/footer.css';
import { Container, Row, Col } from 'react-bootstrap'

class Footer extends Component {

    render() {

        return (
            <div className='main-footer'>
                <Container>
                    <Row>
                        <Col>
                            <h3>JEMP Radio Clone</h3>
                            <a href='https://jempradio.com/'>Jemp Radio</a>
                            <hr />
                            <p>
                                &copy;{new Date().getFullYear()} Sam Levy | All Rights Reserved 
                        </p>
                        </Col>

                    </Row>
                </Container>
            </div >

        )
    }
}
export default Footer;