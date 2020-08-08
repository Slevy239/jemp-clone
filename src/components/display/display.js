import React, { Component } from 'react';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Card from "@material-ui/core/Card";
import './display.css';
class Display extends Component {
    state = {
        songData: [],
        current: [],
        past: [],
    }
    componentDidMount() {
        window.scrollTo(0, 0)
        axios.get("https://public.radio.co/stations/sd71de59b3/status").then(res => {
            this.setState({ songData: res.data })
            this.setState({ current: res.data.current_track.title })
            this.setState({ past: res.data.history })
            this.setState({ pages: res.data.history.length })

        }).catch(err => console.log(err))
    }


    render() {
        console.log(this.state.past)

        return (

            <div id='displayBoarder'>
                <Paper id='paper'>
                    <Card>
                        <h1 id='displayhistory'>Recent Songs</h1>
                    </Card>
                    {/* <div className='container'> */}
                    {this.state.past.slice(0, 10).map((old, index) => {
                        return (
                            <Paper id='songTitle' elevation={2}>

                                <p key={index} divider='true'>
                                    <a href={'http://www.google.com/search?q=' + old.title}>{index + 1}.{old.title}</a>
                                </p>
                            </Paper>
                        )
                    })}
                    {/* </div> */}
                    <div className='container'>
                    </div>
                </Paper>
            </div>

        )
    }
}
export default Display;