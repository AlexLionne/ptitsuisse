import React, { Component } from 'react'
import '../styles/styles.css'
import france from '../assets/france.png'
import switzerland from '../assets/switzerland.png'
import kevin from '../assets/kevin_2.png'



class Driver extends Component {

    render() {

        return (
            <div className={"driver"}>
                <img alt={'kevin'} className={'driver_image'} src={kevin}/>
                <div className={'driver_text'}>
                    <img className={'flag'} src={france} height={'50px'} alt={'france_logo'}/>
                    <img className={'flag'} src={switzerland} height={'50px'} alt={'switzerland_logo'}/>
                   <p className={'driver_num'}>118</p>
                   <p className={'driver_ligue'}>Ligue Occitanie Moto 25 Power</p>
                </div>
            </div>

        );
    }
}

export default Driver;
