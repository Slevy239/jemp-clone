import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import Button from '@material-ui/core/Button';
class Header extends Component {

    handleClick(e) {
        e.preventDefault()
        console.log('hi')
    }


    render() {

        return (
            <div id='head'>

                <StickyContainer>
                    <Button type="submit" className="btn btn-danger" onClick={this.handleClick}  >Menu</Button>
                    <Sticky relative={true}>
                        {({
                            style,
                        }) => (
                                <h1 style={style}>
                                    Jemp Radio Clone
                                </h1>
                            )}
                    </Sticky>
                </StickyContainer>
            </div>
        )
    }
}
export default Header;