import React, { useState } from "react";

const AppA = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      style={{
        backgroundColor: isDarkMode ? "black" : "white",
        color: isDarkMode ? "white" : "black",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "all 0.5s",
      }}
    >
      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 20px",
          backgroundColor: isDarkMode ? "white" : "black",
          color: isDarkMode ? "black" : "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Toggle to {isDarkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
};

export default AppA;
