
export const CodeContainer = ({children}) => {
    return (
        <>
            <div style={{
                width: "50vw",
                backgroundColor: "#2B2B2B",
                borderRadius: "20px",
                padding: "25px",
                margin: "15px"
            }}>
                <code>{children}</code>
            </div>
        </>
    );
}