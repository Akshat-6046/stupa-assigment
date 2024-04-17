import Header from "../Header"; // HEADER COMPONENT
import Loader from "../Loader"; // USING LOADER FOR FALLBACK WHILE LAZY LOADING
import { Suspense } from "react"; // ALLOW US TO LOAD FALLBACK WHILE COMPONENT GETS LAZY LOADED
import { Outlet } from "react-router-dom"; // ROUTING OUTLET
import { useState } from "react";
import ContextTheme from "../../utils/context"; // USING THEME CONTEXT TO SWITCH THEMES

const Main = () => {
  
  const [theme, setTheme] = useState("light"); // USING STATE FOR KEEPING CURRENT THEME VALUE AND PASSING IT IN CONTEXT
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ContextTheme.Provider value={{theme, toggleTheme}}>
      <div className="App">
        <Header /> 
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </ContextTheme.Provider>
  );
};

export default Main;
