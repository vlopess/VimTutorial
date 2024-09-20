import "./Tooltip.css";

export const Tooltip = ({children, text}) => {
    return (
        <>
            <div className="tooltip-container">
                <span className="tooltip">{text}</span>
                <a className="text">{children}</a>
            </div>
        </>
    );
}