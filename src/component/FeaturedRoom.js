import React, { Component } from 'react'
import {RoomContext} from '../context';
import Title from './Title';
import Room from './Room';
import Loading from './Loading'

export default class FeaturedRoom extends Component {
    static contextType=RoomContext;
    render() {
        let {loading,featuredRooms}=this.context;
        const rooms=featuredRooms.map(room=>{
            return <Room key={room.id} room={room}/>
        })
        console.log(loading);
        return (
            <section className='featured-rooms'>
                <Title title="featured rooms"/>
                <div className="featured-rooms-center">
                    {loading?<Loading/>:rooms}
                </div>
             
            </section>
        )
    }
}
