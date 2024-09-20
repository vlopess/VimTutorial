import "./Key.css";

export const Key = ({text, width = 65}) => {
    return (
        <>
            <button className="key-button" style={{width}}>{text}</button>
        </>
    );
}