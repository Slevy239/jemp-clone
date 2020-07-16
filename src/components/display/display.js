import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ReactList from 'react-list';

import axios from 'axios';
class Display extends Component {
    state = {
        songData: [],
        current: [],
        past: []
    }
    componentDidMount() {
        axios.get("https://public.radio.co/stations/sd71de59b3/status").then(res => {
            this.setState({ songData: res.data })
            this.setState({ current: res.data.current_track.title })
            this.setState({ past: res.data.history })
        }).catch(err => console.log(err))

    }
  
    render() {
        console.log(this.state.past)
        return (

            <div>
                <h4>Recent Songs</h4>

                {this.state.past.map((old, index) => {
                    return (

                        <p key={index} divider='true'>
                            <a href={'http://www.google.com/search?q=' + old.title}>{old.title}</a>
                        </p>
                    )
                })}
            </div>

        )
    }
}
export default Display;