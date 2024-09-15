import "./SideBarItem.css"
import {Link} from "react-router-dom";
import {useState} from "react";
import $ from 'jquery';


export const SideBarItem = ({text, isActive, onClick}) => {

    return (
        <>
            <div className={`item ${isActive ? 'active' : ''}`}>
                <Link to={`/${text}`} onClick={onClick} writingsuggestions="auto">{text}</Link>
            </div>
        </>
    );
}