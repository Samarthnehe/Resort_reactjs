import React from 'react'
import {useContext} from 'react';
import {RoomContext} from '../context';
import Title from '../component/Title';

const getUnique=(items,value)=>{
    return [...new Set(items.map(item=>item[value]))]
}
export default function RoomsFilter({rooms}) {
    const context = useContext(RoomContext);
    const {handleChange,type,capacity,price,minPrice,maxPrice,minSize,maxSize,breakfast,pets}=context;
    //get unique types
    console.log(rooms)
    let types=getUnique(rooms,'type');
    types=['all',...types]
    types=types.map((item,index)=>{
        return <option value={item} key={index}>{item}</option>
    })
    let captypes=getUnique(rooms,'capacity');
    
    captypes=captypes.map((item,index)=>{
        return <option value={item} key={index}>{item}</option>
    })
    return (
        <section className="filter-container">
            <Title title="search rooms"/>
            <form className="filter-form">
                <div className="form-group">
                    <label htmlFor="type">Room Type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                       {types}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="capacity">Guest</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                       {captypes}
                    </select>
                </div>
                <div className="form-group" style={{width:"220px"}}>
                    <label htmlFor="price">Room Price Rs{price}</label>
                    <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="size">Room Size</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input"></input>
                        <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input"></input>
                    </div>
                </div>
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange}></input>
                        <label htmlFor="breakfast">Breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange}></input>
                        <label htmlFor="pets">Pets</label>
                    </div>
                </div>
            </form>
        </section>
    )
}
