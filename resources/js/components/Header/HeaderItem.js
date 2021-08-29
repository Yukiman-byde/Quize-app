import React from 'react';
import { IconButton } from '@material-ui/core';
import './HeaderItem.css';

export default function HeaderItem({ Icon}){
    return(
        <div className="header__Item">
         <IconButton>
             {Icon && <Icon style={{ fontSize: 35, color: 'white' }} className="header__item" />}
        </IconButton>
        </div>
    );
}