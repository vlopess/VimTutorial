import "./SideBarItem.css"
import {Link} from "react-router-dom";

export const SideBarItem = ({text, isActive, onClick}) => {

    return (
        <>
            <div className={`item ${isActive ? 'active' : ''}`}>
                <Link to={`/tutorialvim/${text}`} onClick={onClick} writingsuggestions="auto">{text}</Link>
            </div>
        </>
    );
}