import { useRef, useEffect } from "react";

function FocusInput() {
    const inputRef = useRef(null); // Create a ref

    useEffect(() => {
        inputRef.current.focus(); // Automatically focus on input when mounted
    }, []);

    return <input ref={inputRef} placeholder="Type here..." />;
}

export default FocusInput;
