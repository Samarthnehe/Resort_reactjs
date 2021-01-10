import React from 'react'
import Hero from '../component/Hero';
import Banner from '../component/Banner';
import {Link} from 'react-router-dom';
import Services from '../component/Services';
import FeaturedRoom from '../component/FeaturedRoom';
import Button from '../component/StyledHero';

export default function Home() {
    return (
        <div>
            
            <Hero >
                <Banner title="Luxurious Rooms" subtitle="Deluxe rooms starting at Rs 2,000">
                    <Link to='/room' className='btn-primary'>
                        <b>Our Rooms</b>
                    </Link>
                </Banner>
            </Hero>
            <Services/>
            <FeaturedRoom/>
         
        </div>
    )
}
