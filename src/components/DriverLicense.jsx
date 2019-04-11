import React, { Component } from 'react';
import '../styles/styles.css';
import icon from '../assets/next.svg'


//animate


class Card extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const {list} = this.props;

        return (
            <div className={"driver_license" }>
                <ul>
                    <li><h1>Driver license</h1></li>
                {list.map((item,i)=>{
                    if(item.divider !== undefined){
                        return(<div className={'divider_white'}/>)
                    }else{
                        return(
                            <li>
                                <p className={'left'}>{Object.keys(item)}</p>
                                <p className={'right'}>
                                    {Object.values(item)}</p>
                                </li>
                        );
                    }
                })}
                </ul>
            </div>
        );
    }
}

export default Card;
