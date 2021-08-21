import React from 'react';
import './HeaderItem.css';

export default function HeaderItem({ Icon, title }){
    return(
        <div className="header__Item">
         {Icon && <Icon style={{ fontSize: 24 }} className="header__item" />}
         <h4  style={{ fontSize: 20 }}>{title}</h4>
        </div>
    );
}