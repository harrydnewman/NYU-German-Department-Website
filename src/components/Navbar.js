import { useState } from "react";
import DropdownMenuItems from "./DropdownMenuItems";
import '../App.css'

function DropDownMenu({ text, menuItems }) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <div
          className="menu"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button><p>{text}</p></button>
          {isDropdownVisible && <DropdownMenuItems menuItems={menuItems} />}
        </div>
      </header>
    </div>
  );
}

export default DropDownMenu;
