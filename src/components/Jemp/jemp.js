import React, { Component } from 'react';
import axios from 'axios';

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
                {/* <img src={this.state.img} id='playerLogo' /> */}
                <iframe src="https://embed.radio.co/player/15a1a96.html" title="JEMP Radio" width="100%" allow="autoplay" />
            </div>

        )
    }
}
export default Jemp;