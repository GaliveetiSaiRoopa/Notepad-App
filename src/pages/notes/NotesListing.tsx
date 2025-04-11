import { ClickAwayListener } from "@mui/material";
import React, { useState } from "react";
import NavBar from "./navBar";

const NotesListing = () => {
  const initial_states = { search_key: "" };
  const [params, setParams] = useState(initial_states);

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

  const notes_data = [
    {
      name: "Note1",
      description: "Hello this is notes1,",
      category: "Product",
      tags: "Note1",
    },
    {
      name: "Note2",
      description: "Hello this is notes1",
      category: "Mobile",
      tags: "Note2",
    },
    {
      name: "Note3",
      description: "Hello this is notes1",
      category: "Bottle",
      tags: "Note3",
    },
  ];

  const [notesListing, setNotesListing] = useState([]);

  return (
    <div className="h-screen overflow-y-auto w-full">
      {/* <div className="h-14 flex justify-between px-8 py-3 bg-[#61aeb6]">
        <img
          src="/icons/notepadIcon.svg"
          alt="notepadIcon"
          className="w-8 h-8"
        />

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
      </div> */}
      <NavBar />

      <div className="flex justify-between px-24 py-8 items-center">
        <div className="flex gap-8">
          <input
            name="search_key"
            type="search_key"
            placeholder="Search"
            id="search_key"
            value={params?.search_key}
            onChange={() => {}}
            className="w-full text-base text-black rounded-md px-4 py-2 border border-[#61aeb6]"
          />

          <button className="bg-[#61aeb6] text-white px-6 py-2 text-lg font-semibold font-nunitoRegular rounded-md">
            Search
          </button>
        </div>
        <button className="bg-[#61aeb6] text-white px-6 py-2 text-lg font-semibold font-nunitoRegular rounded-md">
          Create New Notes
        </button>
      </div>
      <div className="flex flex-col gap-4 px-24 py-8">
        {React.Children.toArray(
          notes_data.map((item, index) => <div className=""></div>)
        )}
      </div>
    </div>
  );
};

export default NotesListing;
