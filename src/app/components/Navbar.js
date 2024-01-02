"use client";

import Image from "next/image";
import Logo from "../../../public/logo.svg";

export default function Navbar() {
  return (
    <>
      <nav className="border-b-[#4f5157] border-b-2 bg-[#1f2024] flex items-center justify-between">
        <div className="flex items-center">
          <span className="material-symbols-outlined m-4 hover:cursor-pointer">
            menu
          </span>

          <>
            <Image
              src={Logo}
              width={35}
              height={35}
              alt="Picture of the author"
              className="mx-2"
            />
            <span className="text-xl">TasksBoard</span>
          </>
        </div>

        <div className="flex items-center rounded-xl">
          <div className="bg-[#292a2f] flex items-center px-3 mx-5">
            <label htmlFor="search">
              <span className="material-symbols-outlined hover:cursor-pointer">
                search
              </span>
            </label>
            <input 
              type="text"
              className="focus:outline-none bg-[#292a2f] text-[#bfbfbf] placeholder:text-[#bfbfbf] ml-2 w-[30vw] my-2"
              placeholder="Search"
              autoComplete="off"
              spellCheck="off"
              id="search"
            />
          </div>
        </div>

        <div className="flex items-center">
          <div className="text-[#dddddd] mr-6">
            <span className="material-symbols-outlined p-2 hover:cursor-pointer">
              cloud_done
            </span>
            <span className="material-symbols-outlined p-2 hover:cursor-pointer">
              view_agenda
            </span>
            <span className="material-symbols-outlined p-2 hover:cursor-pointer">
              settings
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}
