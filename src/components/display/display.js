import React, { Component } from 'react';
import axios from 'axios';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';
class Display extends Component {
    state = {
        songData: [],
        current: [],
        past: [],
        pages: 0,
        firstTen: [],
        secondTen: []
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

            <div>
                <h4>Recent Songs</h4>
                {/* <div className='container'> */}
                {this.state.past.slice(0, 10).map((old, index) => {
                    return (

                        <p key={index} divider='true'>
                            <a href={'http://www.google.com/search?q=' + old.title}>{index + 1}.{old.title}</a>
                        </p>
                    )
                })}
                {/* </div> */}
                <div className='container'>
                </div>
            </div>

        )
    }
}
export default Display;