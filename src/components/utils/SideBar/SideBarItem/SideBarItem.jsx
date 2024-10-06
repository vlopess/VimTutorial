import "./SideBarItem.css"
import {Link} from "react-router-dom";

export const SideBarItem = ({text, isActive, onClick}) => {

    return (
        <>
            <div className={`item ${isActive ? 'active' : ''}`}>
                <Link to={`/VimTutorial/${text}`} onClick={onClick} writingsuggestions="auto">{text}</Link>
            </div>
        </>
    );
}