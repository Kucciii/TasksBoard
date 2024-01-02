export default function Task() {
  return (
    <>
      <div
        className="task flex flex-col p-1"
        id="task"
        onMouseOver={() => {
          document.getElementById("task").classList.add("bg-[#2f3138]");
          document.getElementById("moreBtn").classList.remove("invisible")
        }}
        onMouseLeave={() => {
          document.getElementById("task").classList.remove("bg-[#2f3138]");
          document.getElementById("moreBtn").classList.add("invisble")
        }}
      >
        <div className="flex justify-evenly">
          <div className="taskComplete flex items-center justify-center">
            <span
              className="material-symbols-outlined text-[#a5a5a5]"
              style={{ fontVariationSettings: "'FILL' 0" }}
            >
              radio_button_unchecked
            </span>
          </div>
          <div className="taskInfo px-2 flex flex-col  justify-center">
            <input type="text" className="bg-transparent focus:outline-none text-sm m-1" placeholder="Title"/>
            <input type="text" className="bg-transparent focus:outline-none text-xs m-1 text-[#a5a5a5] leading-3" placeholder="Details"/>
          </div>
          <div className="taskMore hover:cursor-pointer text-[#A5A5A5] invisible flex items-center justify-center" id="moreBtn">
            <span className="material-symbols-outlined">more_vert</span>
          </div>
        </div>

        {/* Task Operations  */}
        <div className="taskOperations"></div>
      </div>
    </>
  );
}

function onTaskHover() {}
