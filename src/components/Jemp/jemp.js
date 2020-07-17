import React, { Component } from 'react';
import axios from 'axios';
import Iframe from 'react-iframe'

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
                <div align='center'>
                    <Iframe url="https://embed.radio.co/player/15a1a96.html" id="iframe" title="JEMP Radio" width="450px"
                        allow="autoplay" frameBorder='0' />
                </div>
            </div>

        )
    }
}
export default Jemp;