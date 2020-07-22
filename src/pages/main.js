import React, { Component } from 'react';
// import Display from '../components/display/display'
import Jemp from '../components/Jemp/jemp';
import Header from '../components/Header/header'
import Footer from '../components/Footer/footer';
import Tabs from '../components/Tabs/tabs';
import TopNav from '../components/TopNav/topnav'
import Display from '../components/display/display';

class Home extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {

        return (
            <div>
                <TopNav />
                {/* <Header /> */}
                <Jemp />
                <Display />
                {/* <Tabs /> */}
                <Footer />
            </div>

        )
    }
}
export default Home;