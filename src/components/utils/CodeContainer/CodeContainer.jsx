
export const CodeContainer = ({children, width = "50vw", padding = "25px", margin =  "15px"}) => {
    return (
        <>
            <div style={{
                width: width,
                backgroundColor: "#2B2B2B",
                borderRadius: "20px",
                padding: padding,
                margin: margin
            }}>
                <code>{children}</code>
            </div>
        </>
    );
}