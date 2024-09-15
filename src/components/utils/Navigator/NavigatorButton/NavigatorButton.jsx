import "./NavigatorButton.css";

export const NavigatorButton = ({isBack = false, Text, onClick}) => {
    let arrow = isBack ? 'left' : 'right';
    const ButtonClass = `cta ${arrow}`;
    return (
        <>
            <button className={ButtonClass} onClick={onClick}>
                <span>{Text}</span>
                <svg id={"arrow"} width="15px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
                <svg id={"arrow-back"} width="15px" height="10px" viewBox="0 0 13 10">
                    <path d="M10,5 L2,5"></path>
                    <polyline points="5 1 1 5 5 9"></polyline>
                </svg>
            </button>
        </>
    );
}