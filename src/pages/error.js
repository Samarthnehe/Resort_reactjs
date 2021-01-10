import React from 'react'
import Hero from '../component/Hero';
import Banner from '../component/Banner';
import {Link} from 'react-router-dom'

export default function Error() {
    return (
        <div>
            <Hero>
                <Banner title='404' subtitle='Page Not Found'>
                    <Link to='/' className='btn-primary'>
                            <b>Return Home</b>
                    </Link>
                </Banner>
                
            </Hero>
        </div>
    )
}
