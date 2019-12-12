import React from 'react';
import './style.scss';
const Sidedrawer = props => (
    <button className="menu_button" onClick={props.click}>
        <div className="menu_button_item" />
        <div className="menu_button_item" />
        <div className="menu_button_item" />
    </button>

)

export default Sidedrawer;