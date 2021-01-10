import React, { Component } from 'react'
import defaultImg from '../images/details-2.jpeg';
import Hero from '../component/Hero';
import Banner from '../component/Banner';
import {Link} from 'react-router-dom';
import {RoomContext} from '../context';
import StyledHero from '../component/StyledHero';


export default class SingleRoom extends Component {
    constructor(props){
        super(props)
        this.state={
            slug:this.props.match.params.slug,
            defaultImg
        };
    }
    static contextType=RoomContext;
    render() {
        const {getRoom}=this.context;
        const room=getRoom(this.state.slug);
        if(!room){
            return <div className="error">
                <h3>No such room could be found</h3>
                <Link to='/room' className="btn-primary"><b>Back to Rooms</b></Link>

            </div>
        }
        const {name,description,capacity,price,size,pets,images,extras,breakfast}=room;
        const [mainImg,...defaultImg]=images;
        return (
            <>
           <StyledHero img={mainImg|| this.state.defaultImg}>
               <Banner title={`${name} room`}>
                   <Link to='/room' className='btn-primary'><b>Back to rooms</b>
                   </Link>

               </Banner>
           </StyledHero>
           <section className="single-room">
               <div className="single-room-images">
               {defaultImg.map((item,index)=>{
                   return <img key={index} src={item} alt={name}/>
               })}
               </div>
               <div className="single-room-info">
                    <article className="desc">
                        <h3>Details</h3>
                        <p>{description}</p>   
                    </article>
                    <article className="info">
                        <h3>Price</h3>
                        <h6>price : Rs{price}</h6>   
                        <h6>size : {size} SQFT</h6>
                        <h6>Max capacity : {capacity>1 ?`${capacity} people`:`${capacity} people`}</h6>
                        <h6>{pets?"pets allowed":"No pets allowed"}</h6>
                        <h6>{breakfast ? "free breakfast included":""}</h6>
                    </article>
               </div>
           
           </section>
           <section className="room-extras">
               <h6>Extras</h6>
               <ul className="extras">
                {extras.map((item,index)=>{
                    return <li key={index}>- {item}</li>
                })}
               </ul>
           </section>
           </>
        )
    }
}
