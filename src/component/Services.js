import React, { Component } from 'react'
import Title from './Title';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'


export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"free cocktails",
                info:"Free Cocktails available. Enjoy to the fullest here!"
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info:"Enjoy Hiking? This is the place for you, because you have endless hiking here!"
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free Shuttle",
                info:"Tired of walking? Dont worry! we have free shuttles available for you here!"
            },
            {
                icon:<FaBeer/>,
                title:"Strongest Beer",
                info:"Want to enjoy the cold nights with a glass of beer? Cheers! We have got the best beers with us"
            },
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                    {this.state.services.map((item,index)=>{
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
