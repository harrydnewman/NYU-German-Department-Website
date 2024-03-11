import React from "react";

const DropdownMenuItems = ({ menuItems }) => {
  return (
    <div className="dropdown-menu">
      <ul className="dropdownUl">
        {menuItems.map((item, index) => (
          <li className="dropdownLi" key={index}>
            <a className="navBarLink" href={item.link}>{item.label}</a>
          </li>
        ))} 
      </ul> 
    </div>
  );
};

// Usage
const menuItems = [
  { label: 'Menu 1', link: '/menu1' },
  { label: 'Menu 2', link: '/menu2' },
  { label: 'Menu 3', link: '/menu3' },
];

<DropdownMenuItems menuItems={menuItems} />;

export default DropdownMenuItems;