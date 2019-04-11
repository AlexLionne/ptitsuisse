import React, { Component } from 'react';
import '../styles/styles.css';
import 'semantic-ui-css/semantic.min.css'


import DriverLicense from "../components/DriverLicense";
import Driver from "../components/Driver";
import {Grid} from "semantic-ui-react";
import body from "../assets/body.png"

const data = [
    {'Nom':"MAIFFRET"},
    {'Prénom':"Kevin"},
    {'Surnom':"P'tit Suisse"},
    {'Age':"10 ans"},
    {divider:'divider_white'},
    {'Nat.':"Française, Suisse"}
];


class Presentation extends Component {
    state = {
        windowHeight: undefined,
        windowWidth: undefined
    };

    handleResize = () => this.setState({
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth

    });

    componentDidMount() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }

    render() {
        console.log(this.state.windowWidth);
        return (
                    <div className={'driver_page'}>
                        <Grid columns={3}>
                                <Grid.Column width={this.state.windowWidth < 768 ? 16 : 4}>
                                    <DriverLicense
                                        list={data}
                                    />
                                </Grid.Column>

                            <Grid.Column className={'driver_image_container'} width={this.state.windowWidth < 768 ? 16 : 8}>
                                <img alt={'motoclycler_body'} src={body}/>
                            </Grid.Column>
                                <Grid.Column  width={this.state.windowWidth < 768 ? 16 : 4}>
                                    <Driver/>
                                </Grid.Column>
                        </Grid>


                    </div>


        );
    }
}

export default Presentation;
