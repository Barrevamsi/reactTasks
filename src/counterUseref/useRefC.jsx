import { useRef, useState } from "react";

function CounterApp() {
    const [states,setStates]=useState(0)
    const countRef = useRef(0); // Stores count without re-rendering
    const renderCount = useRef(1); // Tracks the number of renders

    const increase = () => {
        countRef.current += 1;
        console.log("Count:", countRef.current);
        setStates(countRef.current)
    };

    const decrease = () => {
        countRef.current -= 1;
        console.log("Count:", countRef.current);
        setStates(countRef.current)
    };

    renderCount.current += 1; // Increment render count

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h2>🔢 Counter App (useRef Only)</h2>
            <p>Click buttons and check the console for count updates.</p>
            <p>{states}</p>
            <button onClick={increase}>➕ Increase</button>
            <button onClick={decrease} style={{ marginLeft: "10px" }}>➖ Decrease</button>
            <p>🔄 Component Rendered: {renderCount.current} times</p>
        </div>
    );
}

export default CounterApp;
