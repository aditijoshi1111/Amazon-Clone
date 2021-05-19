import React from 'react';
import Card from "../CSSstyles/OpenCard.module.css";

 export const OpenCard = (props) => {
     if(!props.show){
         return null
     }
    return (
        <div className={Card.modal}>
            <div className={Card.content}>
                <div className={Card.header}>
                    <h4 className={Card.title}>{props.title}</h4>
                </div>
                <div className={Card.body}>
                    {props.children}
                </div>
                <div className={Card.footer}>
                    <button onClick={props.onClose} className="button">Close</button>
                </div>
            </div>
            
        </div>
    )
}
