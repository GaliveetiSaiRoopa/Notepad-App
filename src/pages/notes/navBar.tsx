import { ClickAwayListener } from "@mui/material";
import React, { useState } from "react";

const NavBar = () => {
  const [lmenu, setLmenu] = useState(false);
  const toggelLMenu = () => {
    setLmenu((prevState) => !prevState);
  };

  const menu_item = [
    {
      name: "Account - Settings",
      icon: "/icons/acc-setting.svg",
      onClick: () => {},
    },
    { name: "Logout", icon: "/icons/logout.svg", onclick: () => {} },
  ];
  return (
    <div className="h-14 flex justify-between px-8 py-3 bg-[#61aeb6]">
      <img src="/icons/notepadIcon.svg" alt="notepadIcon" className="w-8 h-8" />

      <div className="relative">
        <button className="flex gap-1 items-center" onClick={toggelLMenu}>
          <p className="text-base text-white font-nunitoRegular">
            Hello, Username
          </p>
          <img src="/icons/acc.svg" alt="accIcon" className="w-8 h-8" />
        </button>
        {lmenu && (
          <ClickAwayListener onClickAway={() => setLmenu(false)}>
            <div className="w-60 absolute top-11 right-[2px] bg-[#6abcc6] shadow-lg rounded-lg overflow-hidden">
              {React.Children.toArray(
                menu_item.map((item, index) => (
                  <button
                    onClick={item.onClick}
                    className="px-1 py-2 flex items-center gap-2 border-b last:border-0 border-black w-full"
                  >
                    <img src={item?.icon} alt="accIcon" className="w-4 h-4" />
                    <p>{item.name}</p>
                    {index === 1 && (
                      <div className="absolute right-2">
                        <img
                          src="/icons/acc.svg"
                          alt="accIcon"
                          className="w-6 h-6 -rotate-90 invert"
                        />
                      </div>
                    )}
                  </button>
                ))
              )}
            </div>
          </ClickAwayListener>
        )}
      </div>
    </div>
  );
};

export default NavBar;
