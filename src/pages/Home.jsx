import React, { Component } from 'react';
import '../styles/styles.css';
import Card from "../components/Card";
import 'semantic-ui-css/semantic.min.css'
import {Grid} from "semantic-ui-react";
import presentation from '../assets/kevin.jpg'
import business from '../assets/business.jpg'
import blog from '../assets/blog.jpg'
import logo from '../assets/logo.png'
import videos from '../assets/videos.jpg'
import budget from '../assets/budget.jpg'
import contact from '../assets/contact.jpg'

import posed, {PoseGroup} from 'react-pose';




const AppAnimation = posed.div({

    enter:{
        height:'100%!important',
        delayChildren: 200,
        staggerChildren: 50,
    },
    exit:{
        height:'100%!important',
        delayChildren: 200,
        staggerChildren: 50,
    },
});


const opts = {
    height: '390',
    width: '640',
    playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
    }
};

class Home extends Component {
    render() {
        return (
                    <div>
                        <AppAnimation>
                            <Grid columns={3} >
                                <Grid.Column width={3}>
                                    <Card
                                        icon={null}
                                        icon_text={null}
                                        selected={true}
                                        text={'CONTACT'}
                                        sub_text={'hello 2'}
                                        is_text_overlay={false}
                                        image={contact}
                                        video={''}
                                    />
                                </Grid.Column>
                                <Grid.Column width={10}>
                                    <Card
                                        link={'/presentation'}
                                        icon={null}
                                        icon_text={null}
                                        selected={true}
                                        text={'PRÉSENTATION'}
                                        sub_text={'hello 2'}
                                        is_text_overlay={false}
                                        image={presentation}
                                    />

                                </Grid.Column>
                                <Grid.Column width={3}>
                                    <Card
                                        link={'/blog'}
                                        key={'card'}
                                        icon={null}
                                        icon_text={null}
                                        selected={true}
                                        text={'BLOG'}
                                        sub_text={'hello 2'}
                                        is_text_overlay={false}
                                        image={blog}
                                    />
                                </Grid.Column>

                                <Grid.Column width={5}>
                                    <Card
                                        icon={null}
                                        icon_text={null}
                                        selected={true}
                                        text={'TEAM FDG'}
                                        sub_text={'hello 2'}
                                        is_text_overlay={false}
                                        image={logo}
                                    />
                                </Grid.Column>
                                <Grid.Column width={5}>
                                    <Card
                                        icon={null}
                                        icon_text={null}
                                        selected={true}
                                        text={'BUDGET'}
                                        sub_text={'hello 2'}
                                        is_text_overlay={false}
                                        image={budget}
                                    />
                                </Grid.Column>

                                <Grid.Column width={3}>
                                    <Card
                                        icon={null}
                                        icon_text={null}
                                        selected={true}
                                        text={'VIDÉOS'}
                                        sub_text={'hello 2'}
                                        is_text_overlay={false}
                                        image={videos}
                                    />
                                </Grid.Column>
                                <Grid.Column width={3}>
                                    <Card
                                        link={'/'}
                                        key={'card'}
                                        icon={null}
                                        icon_text={null}
                                        selected={true}
                                        text={'SPONSORS'}
                                        sub_text={'hello 2'}
                                        is_text_overlay={false}
                                        image={business}
                                    />
                                </Grid.Column>
                            </Grid>
                        </AppAnimation>
                    </div>


        );
    }
}

export default Home;
