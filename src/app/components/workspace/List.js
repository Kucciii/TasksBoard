"use client";

import Task from "./Task";
import React from "react";

export default function List({ listTitle }) {
  return (
    <>
      <div className="list bg-[#292a2f] w-[20vw] rounded-md m-4">
        <div className="flex items-center justify-between p-4">
          <span>{listTitle}</span>
          <span className="material-symbols-outlined hover:cursor-pointer">
            more_vert
          </span>
        </div>

        <div
          className="addTaskBtn p-4 flex items-center hover:cursor-pointer"
          id="addTaskBtn"
          onMouseOver={() => {
            document.getElementById("addIcon").innerHTML = "add_circle";
            document.getElementById("addText").style = "color: #729de5";
          }}
          onMouseLeave={() => {
            document.getElementById("addIcon").innerHTML = "add";
            document.getElementById("addText").style = "color: #9e9f9f";
          }}
          onClick={addTask}
        >
          <span
            className="material-symbols-outlined text-[#729de5]"
            id="addIcon"
          >
            add
          </span>
          <span className="text-[#9e9f9f] px-3 text-sm py" id="addText">
            Add a task
          </span>
        </div>
      </div>
    </>
  );
}

function addTask() {
  const taskContainer = document.getElementById("taskContainer");
}
