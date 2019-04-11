import React, { Component } from 'react';
import '../styles/styles.css';
import posed from 'react-pose';
import {Link} from "react-router-dom";
import IronImage from "./IronImage";
import YouTube from 'react-youtube';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
//animate

const CardAnimation = posed.div({
    hoverable: true,
    init: {
        scale: 1
    },
    enter: {y:-100,opacity: 1},
    exit:{y:100,opacity:0},
    hover:{
        scale: 1.15,
        duration: 200,
        transition: {
               scale: {
                   ease: 'easeOut',
                   duration: 300
                },
                default: {
                    ease: 'easeOut',
                    duration: 300
                }
              }
    }
});


class Card extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const {image,text,link,video} = this.props;
        console.log(link)
        return (
            <div>
                {link !== undefined ? <CardAnimation pose={'open'} className={"card"}>
                        {image !== undefined ?
                            <IronImage link={link} srcPreload={image} srcLoaded={image} className={'card_image'}/>
                            : null}
                        <div className={'card_text'}>{text}</div>

                    </CardAnimation> :
                    <CardAnimation pose={'open'} className={"card disabled"}>
                        {image !== undefined ?
                            <IronImage link={link} srcPreload={image} srcLoaded={image} className={'card_image'}/>
                            : null}
                            <FontAwesomeIcon color={'white'} className={'locked'} size={'6x'} icon={faLock}/>
                        <div className={'card_text'}>{text}</div>

                    </CardAnimation>
                }
            </div>
        );
    }
}

export default Card;
