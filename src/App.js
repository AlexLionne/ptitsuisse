import React, { Component } from 'react';
import './styles/styles.css';
import header from './assets/header.jpg'
import 'semantic-ui-css/semantic.min.css'


import posed, {PoseGroup} from 'react-pose';
import Home from "./pages/Home";
import {Route, Switch} from "react-router-dom";
import Presentation from "./pages/Presentation";
import User from "./pages/User";


const RouteContainer = posed.div({
    enter: { opacity: 1, delay: 300, height:'100%!important',beforeChildren: true },
    exit: { opacity: 0, delay: 300, height:'100%!important',beforeChildren: false }
});


class App extends Component {


    componentDidMount() {
        setTimeout(this.toggle, 1000);
    }


    render() {

    return (
        <Route
            render={({ location }) => (
                <div>
                    <img className={'app_image'} src={header}/>
                    <User/>
                <div className={'app'}>

                    <PoseGroup>
                        <RouteContainer className={'route_container'} key={location.pathname}>
                            <Switch location={location}>
                                <Route exact path="/" render={()=><Home/>} key="home" />
                                <Route exact path="/presentation" render={()=><Presentation/>} key="presentation" />
                            </Switch>
                        </RouteContainer>
                    </PoseGroup>
                </div>
                </div>
            )}/>

    );
  }
}

export default App;
