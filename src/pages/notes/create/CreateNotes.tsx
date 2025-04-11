import React from "react";
import NavBar from "../navBar";
import { Breadcrumbs, Link } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const CreateNotes = () => {
  const breadCrumbs = [
    <Link href="/notes">Notes</Link>,
    <Link href="">Create Notes</Link>,
  ];
  return (
    <>
      {" "}
      <NavBar />
      <div className="flex flex-col gap-1 my-10 mx-16">
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small"/>}
          aria-label="breadcrumb"
        >
          {breadCrumbs}
        </Breadcrumbs>
        <h1 className="plus-jakarta-sans-header text-2xl text-[#61aeb6]">
          Create New Notes
        </h1>
      </div>
    </>
  );
};

export default CreateNotes;
