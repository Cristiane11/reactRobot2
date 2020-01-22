import React from 'react';
import './Card.css';

const Card = ({name,email,id}) =>{
   
    return(
            <div id="cardComponent">
            <div id="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt =" robotPhoto"src={`https://robohash.org/${id}?200x200`} className='br-100 h4 w4 dib ba b--black-05 pa2'/>
            <div>
                <h2 className="f3 mb2">{name}</h2>
                <p className="f5 fw4 gray mt0">{email}</p>
            </div>
        </div>
        </div>
    );
}
export default Card;