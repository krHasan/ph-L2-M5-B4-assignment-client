const PageHeader = ({ text, padding = "0" }: { text: string; padding?: string }) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "1.5rem",
                padding: `${padding}`,
            }}
        >
            <h1 style={{ fontSize: "2rem" }}>{text}</h1>
        </div>
    );
};

export default PageHeader;
