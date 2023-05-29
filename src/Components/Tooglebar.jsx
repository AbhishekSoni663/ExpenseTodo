import { useEffect, useState } from "react";

const Darkmode = () => {
  const [theme, setTheme] = useState("light-theme");
  const toggleTheme = () => {
    theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <nav className="navbar bg-primary">
        <div className="container-fluid">
          <span>Expenseive Todo</span>
          <div className="checkbox-wrapper-5">
            <div className="check">
              <input
                type="checkbox"
                id="check-5"
                onClick={() => toggleTheme()}
              />
              <label htmlFor="check-5"></label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Darkmode;
