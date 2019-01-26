import React, { Component } from 'react';

function isOpp(val)  {
    return isNaN(val) || val === "=";
}

export const Button = props => 
    <div className={`button_wrapper ${isOpp(props.children) ? "operator": null }`} onClick={() => props.handleClick(props.children)}>
    
    {props.children}
    </div>

