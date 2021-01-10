import React from 'react'
import gif from '../images/gif/loading-gear.gif';


export default function Loading() {
    return (
        <div className="loading">
            <h4>rooms data loading...</h4>
            <img src={gif} alt=""/>
        </div>
    )
}
