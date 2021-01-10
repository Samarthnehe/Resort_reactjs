import React from 'react'
import Hero from '../component/Hero';
import Banner from '../component/Banner';
import {Link} from 'react-router-dom'
import RoomsContainer from '../component/RoomsContainer';

export default function Room() {
    return (
        <>
       <Hero hero="roomsHero">
           <Banner title='Our Rooms'> 
                <Link to='/' className="btn-primary">
                    <b>return home</b>
                </Link>
           </Banner>
        </Hero>
        <RoomsContainer/>
        </>
    )
}
