import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import { JetrixLogo } from "./JetrixLogo.jsx";
import { menuItems } from "../../utils/headerUtils.js";

const Header = () => {
  const [activeButton, setActiveButton] = useState(menuItems[0].id);

  const handleMenuButtonClick = (activeSection) => {
    setActiveButton(activeSection);
  };

  return (
    <Navbar shouldHideOnScroll className="bg-blue-800">
      <NavbarBrand>
        <JetrixLogo />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        {menuItems.map((menuItem, index) => {
          return (
            <NavbarItem
              onClick={handleMenuButtonClick}
              isActive={activeButton === menuItem.id}
              key={menuItem.id}
              className="text-blue-100"
            >
              <Link
                className="text-white"
                href="#"
                onClick={() => {
                  handleMenuButtonClick(menuItem.id);
                }}
              >
                {menuItem.title}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
