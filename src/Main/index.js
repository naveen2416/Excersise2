import React, { useState } from "react";

const Main = () => {
    const [input,setInput] = useState("");
    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const styles = {
        mainContainer: {
            display: "flex",
            justifyContent: "center",
            height: "100vh",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "grey",
        },
        input: {
            height: 20,
        },
        output: {
            marginTop: 30,
            fontSize: 30,
            height: 40,
            color: "red",
        },
    }
    return(
        <div style={styles.mainContainer}>
            <textarea style={styles.input} onChange={handleChange}></textarea>
            <div style={styles.output}>{input.toUpperCase()}</div>
        </div>
    )
};


export default Main;